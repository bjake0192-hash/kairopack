"use client";

import Image from "next/image";
import { ChangeEvent, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, CheckCircle2, Lock, Type, Palette, ArrowRight } from "lucide-react";
import {
  customDesignFee,
  placementOptions,
  products,
  type LogoPlacement,
  type ProductKind,
} from "@/lib/site-data";

type OrderFormState = {
  buyerName: string;
  company: string;
  email: string;
  shippingAddress: string;
  notes: string;
};

const currency = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

const productImages: Record<string, string> = {
  "double-wall-cup": "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&q=80&w=600",
  "salad-bowl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
  "burger-box": "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&q=80&w=600",
  "carrier-bag": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600"
};

const previewImages: Record<ProductKind, string> = {
  cup: "https://images.unsplash.com/photo-1550907589-94073b64c0db?auto=format&fit=crop&q=80&w=1200", // Dark takeaway cup
  bowl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200", // Salad bowl
  box: "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&q=80&w=1200", // Burger box
  bag: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200", // Carrier bag
};

const logoPositions: Record<ProductKind, Record<LogoPlacement, string>> = {
  cup: {
    top: "top-[35%] left-[50%] h-20 w-32 -translate-x-1/2 -translate-y-1/2 rotate-[-2deg]",
    middle: "top-[50%] left-[50%] h-24 w-36 -translate-x-1/2 -translate-y-1/2 rotate-[-2deg]",
    bottom: "top-[65%] left-[50%] h-20 w-32 -translate-x-1/2 -translate-y-1/2 rotate-[-2deg]",
  },
  bowl: {
    top: "top-[40%] left-[50%] h-16 w-32 -translate-x-1/2 -translate-y-1/2",
    middle: "top-[55%] left-[50%] h-20 w-36 -translate-x-1/2 -translate-y-1/2",
    bottom: "top-[70%] left-[50%] h-16 w-32 -translate-x-1/2 -translate-y-1/2",
  },
  box: {
    top: "top-[40%] left-[50%] h-20 w-32 -translate-x-1/2 -translate-y-1/2",
    middle: "top-[55%] left-[50%] h-24 w-36 -translate-x-1/2 -translate-y-1/2",
    bottom: "top-[70%] left-[50%] h-20 w-32 -translate-x-1/2 -translate-y-1/2",
  },
  bag: {
    top: "top-[45%] left-[50%] h-20 w-32 -translate-x-1/2 -translate-y-1/2",
    middle: "top-[60%] left-[50%] h-28 w-40 -translate-x-1/2 -translate-y-1/2",
    bottom: "top-[75%] left-[50%] h-20 w-32 -translate-x-1/2 -translate-y-1/2",
  },
};

const emptyForm: OrderFormState = {
  buyerName: "",
  company: "",
  email: "",
  shippingAddress: "",
  notes: "",
};

export function ProductCustomizer() {
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [logoName, setLogoName] = useState("");
  const [placement, setPlacement] = useState<LogoPlacement>("middle");
  const [quantity, setQuantity] = useState(products[0].minOrder);
  const [customDesign, setCustomDesign] = useState(false);
  const [orderForm, setOrderForm] = useState<OrderFormState>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const product = useMemo(
    () => products.find((item) => item.id === selectedProductId) ?? products[0],
    [selectedProductId],
  );

  const placementMeta = placementOptions.find((option) => option.value === placement) ?? placementOptions[1];

  const quote = useMemo(() => {
    const perHundred = product.basePrice + placementMeta.fee;
    const subtotal = (perHundred / 100) * quantity;
    const total = subtotal + (customDesign ? customDesignFee : 0);

    return {
      perHundred,
      subtotal,
      total,
    };
  }, [customDesign, placementMeta.fee, product.basePrice, quantity]);

  function handleProductChange(nextProductId: string) {
    const nextProduct = products.find((item) => item.id === nextProductId);
    if (!nextProduct) {
      return;
    }

    setSelectedProductId(nextProductId);
    setQuantity((currentQuantity) => Math.max(currentQuantity, nextProduct.minOrder));
    setSubmitMessage("");
  }

  function handleLogoUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setSubmitMessage("Upload failed. Please try another file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setLogoPreview(typeof reader.result === "string" ? reader.result : null);
      setLogoName(file.name);
      setSubmitMessage("");
    };

    reader.readAsDataURL(file);
  }

  function handleInputChange(field: keyof OrderFormState, value: string) {
    setOrderForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit() {
    if (quantity < product.minOrder) {
      setSubmitMessage(`Minimum order: ${product.minOrder} units.`);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product.id,
          productName: product.name,
          quantity,
          placement,
          customDesign,
          quoteTotal: quote.total,
          logoName,
          buyerName: orderForm.buyerName,
          company: orderForm.company,
          email: orderForm.email,
          shippingAddress: orderForm.shippingAddress,
          notes: orderForm.notes,
        }),
      });

      const payload = (await response.json()) as { message?: string; orderId?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Unable to place your order.");
      }

      setSubmitMessage(payload.message ?? `Order ${payload.orderId ?? ""} submitted.`);
      setOrderForm(emptyForm);
    } catch (error) {
      setSubmitMessage(error instanceof Error ? error.message : "Unable to submit the order.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-start relative">
      {/* LEFT PANEL: Workspace */}
      <div className="flex flex-col gap-16">
        
        {/* Product Selection */}
        <section>
          <div className="mb-8">
            <p className="text-[#C49A62] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">01 / Select Product</p>
            <h2 className="text-3xl font-bold text-[#0B0B0B] tracking-tight mb-2">Select a product</h2>
            <p className="text-[#71717A] text-base">Choose the packaging format that best suits your product.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {products.map((item) => {
              const isSelected = item.id === product.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleProductChange(item.id)}
                  className={`group relative text-left transition-all duration-300 overflow-hidden flex flex-col rounded-[16px] border ${
                    isSelected
                      ? "border-[#C49A62] bg-[#0B0B0B] text-white"
                      : "border-[#E7E7E7] bg-white text-[#0B0B0B] hover:border-[#0B0B0B]/30"
                  }`}
                >
                  <div className="relative w-full aspect-[4/3] bg-[#E9E0D4] overflow-hidden">
                    <Image
                      src={productImages[item.id] || "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&q=80&w=400"}
                      alt={item.name}
                      fill
                      className={`object-cover transition-transform duration-700 ${isSelected ? 'scale-105' : 'group-hover:scale-105'}`}
                      unoptimized
                    />
                    {isSelected && (
                      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#C49A62] text-white flex items-center justify-center shadow-md">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  <div className="p-5 relative z-10 flex-1 flex flex-col justify-center">
                    <p className="text-sm font-bold tracking-tight uppercase mb-1">{item.name}</p>
                    <p className={`text-xs leading-relaxed ${isSelected ? "text-white/70" : "text-[#71717A]"}`}>
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Logo Upload */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#0B0B0B] tracking-tight mb-2">Upload your logo</h2>
            <p className="text-[#71717A] text-sm">PNG, SVG, PDF or AI. Maximum file size: 10MB</p>
          </div>
          <label className="relative flex flex-col items-center justify-center rounded-[16px] border-2 border-dashed border-[#E7E7E7] bg-white p-10 cursor-pointer hover:bg-[#F7F5F1] hover:border-[#0B0B0B]/20 transition-all group">
            <div className="w-14 h-14 rounded-full bg-[#F7F5F1] flex items-center justify-center mb-4 text-[#0B0B0B] group-hover:text-[#C49A62] group-hover:bg-[#C49A62]/10 transition-colors">
              <UploadCloud className="w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-[#0B0B0B] mb-1">Choose file</span>
            <span className="text-xs text-[#71717A]">or drag and drop</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
            {logoName && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[16px] flex flex-col items-center justify-center p-6 border border-[#C49A62]">
                <CheckCircle2 className="w-8 h-8 text-[#C49A62] mb-3" />
                <p className="text-sm font-bold text-[#0B0B0B] truncate max-w-full px-4">{logoName}</p>
                <p className="text-xs text-[#71717A] mt-2 underline">Click to replace</p>
              </div>
            )}
          </label>
        </section>

        {/* Live Preview */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#0B0B0B] tracking-tight mb-2">Live Preview</h2>
          </div>
          <div className="rounded-[16px] bg-[#F7F5F1] border border-[#E7E7E7] overflow-hidden relative flex flex-col items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <PackagingPreview kind={product.kind} placement={placement} logoPreview={logoPreview} />
            
            {/* Preview Controls */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-[#E7E7E7] shadow-sm">
               <label className="flex items-center gap-2 text-xs font-bold text-[#0B0B0B] hover:text-[#C49A62] cursor-pointer transition-colors">
                  <UploadCloud className="w-4 h-4" /> UPLOAD LOGO
                  <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
               </label>
               <div className="w-px h-4 bg-[#E7E7E7]" />
               <button className="flex items-center gap-2 text-xs font-bold text-[#0B0B0B] hover:text-[#C49A62] transition-colors">
                  <Type className="w-4 h-4" /> ADD TEXT
               </button>
               <div className="w-px h-4 bg-[#E7E7E7]" />
               <button className="flex items-center gap-2 text-xs font-bold text-[#0B0B0B] hover:text-[#C49A62] transition-colors">
                  <Palette className="w-4 h-4" /> CHOOSE COLOURS
               </button>
            </div>
          </div>
        </section>

        {/* Spec Sheet */}
        <section className="bg-white rounded-[16px] border border-[#E7E7E7] p-8 lg:p-10">
          <div className="mb-8 border-b border-[#E7E7E7] pb-8">
            <p className="text-[#C49A62] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">SPEC SHEET</p>
            <h3 className="text-2xl font-bold text-[#0B0B0B] mb-3">{product.name}</h3>
            <p className="text-base text-[#71717A] leading-relaxed max-w-2xl">{product.description}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 text-sm">
            <div>
              <span className="text-[#71717A] block mb-1">Lead time</span>
              <span className="font-semibold text-[#0B0B0B]">{product.leadTime}</span>
            </div>
            <div>
              <span className="text-[#71717A] block mb-1">Minimum order</span>
              <span className="font-semibold text-[#0B0B0B]">{product.minOrder} units</span>
            </div>
            <div>
              <span className="text-[#71717A] block mb-1">Finish</span>
              <span className="font-semibold text-[#0B0B0B]">{product.finish}</span>
            </div>
            <div>
              <span className="text-[#71717A] block mb-1">Material</span>
              <span className="font-semibold text-[#0B0B0B]">Premium food-grade board</span>
            </div>
            <div>
              <span className="text-[#71717A] block mb-1">Sizes</span>
              <span className="font-semibold text-[#0B0B0B]">Standard commercial sizing</span>
            </div>
            <div>
              <span className="text-[#71717A] block mb-1">Printing</span>
              <span className="font-semibold text-[#0B0B0B]">Full colour / Pantone</span>
            </div>
          </div>
        </section>

        {/* Custom Project */}
        <section className="bg-[#E9E0D4] rounded-[16px] p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 border border-[#E7E7E7]">
          <div>
            <h3 className="text-xl font-bold text-[#0B0B0B] mb-2 tracking-tight">Need something custom?</h3>
            <p className="text-sm text-[#0B0B0B]/70 max-w-md leading-relaxed">Tell us what you need and our team will help create the perfect packaging solution.</p>
          </div>
          <button className="whitespace-nowrap inline-flex h-12 items-center justify-center bg-[#0B0B0B] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#151515] group">
            Start custom project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>

      </div>

      {/* RIGHT PANEL: Quote & Order (Sticky) */}
      <div className="lg:sticky lg:top-32 flex flex-col gap-8 bg-white rounded-[16px] border border-[#E7E7E7] p-8 lg:p-10 shadow-sm">
        
        <div>
          <p className="text-[#C49A62] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">02 / QUOTE & ORDER</p>
          <h2 className="text-2xl font-bold text-[#0B0B0B] tracking-tight">Production details</h2>
        </div>

        {/* Logo Placement */}
        <div>
          <p className="text-xs font-bold text-[#0B0B0B] mb-3 uppercase tracking-widest">Logo placement</p>
          <div className="grid gap-3">
            {placementOptions.map((option) => {
              const isSelected = option.value === placement;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPlacement(option.value)}
                  className={`relative rounded-[10px] border px-4 py-3 flex items-center justify-between transition-all duration-300 ${
                    isSelected
                      ? "border-[#0B0B0B] bg-[#0B0B0B] text-white"
                      : "border-[#E7E7E7] bg-white text-[#0B0B0B] hover:border-[#0B0B0B]/30"
                  }`}
                >
                  <span className="text-sm font-semibold relative z-10">{option.label}</span>
                  <span className={`text-xs font-medium relative z-10 ${isSelected ? "text-[#C49A62]" : "text-[#71717A]"}`}>
                    {option.fee === 0 ? "Included" : `+${currency.format(option.fee)} / 100`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-bold text-[#0B0B0B] uppercase tracking-widest">Quantity</p>
            <p className="text-xs font-semibold text-[#71717A]">MOQ: {product.minOrder}</p>
          </div>
          <input
            type="number"
            min={product.minOrder}
            step={50}
            value={quantity}
            onChange={(event) => setQuantity(Math.max(product.minOrder, Number(event.target.value) || product.minOrder))}
            className="w-full rounded-[10px] border border-[#E7E7E7] bg-white px-4 py-3 text-[#0B0B0B] text-lg font-semibold outline-none transition focus:border-[#0B0B0B] focus:ring-1 focus:ring-[#0B0B0B]"
          />
          {quantity < product.minOrder && (
             <p className="text-xs text-red-500 mt-2 font-medium">Minimum order: {product.minOrder} units.</p>
          )}
        </div>

        {/* Custom Design Service */}
        <label className="flex items-start gap-4 rounded-[10px] border border-[#E7E7E7] bg-[#F7F5F1] p-5 cursor-pointer hover:border-[#C49A62] transition-colors group">
          <div className="pt-0.5">
            <input
              type="checkbox"
              checked={customDesign}
              onChange={(event) => setCustomDesign(event.target.checked)}
              className="h-4 w-4 rounded border-[#E7E7E7] text-[#C49A62] focus:ring-[#C49A62]"
            />
          </div>
          <div>
             <span className="text-sm font-bold text-[#0B0B0B] block mb-1">Custom Design (+{currency.format(customDesignFee)})</span>
             <span className="text-xs text-[#71717A] leading-relaxed">
               We turn your uploaded logo into a fully branded packaging concept before production.
             </span>
          </div>
        </label>

        {/* Price Calculator */}
        <div className="bg-[#0B0B0B] text-white rounded-[16px] p-6 lg:p-8 mt-2">
          <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mb-6">Approximate Quote</p>
          <div className="space-y-4 text-sm text-white/80">
            <div className="flex items-center justify-between">
              <span>Base price per 100</span>
              <span className="font-medium text-white">{currency.format(product.basePrice)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Placement uplift</span>
              <span className="font-medium text-white">{placementMeta.fee === 0 ? "Included" : currency.format(placementMeta.fee)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Production subtotal</span>
              <span className="font-medium text-white">{currency.format(quote.subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Custom design</span>
              <span className="font-medium text-white">{customDesign ? currency.format(customDesignFee) : "Not added"}</span>
            </div>
            <div className="flex items-center justify-between border-t border-white/20 pt-6 mt-6 text-2xl font-bold text-white">
              <span>Total Estimate</span>
              <span className="text-[#C49A62]">{currency.format(quote.total)}</span>
            </div>
            <p className="text-[10px] text-white/40 mt-4 leading-relaxed">
               Final pricing may vary based on artwork, materials and production requirements.
            </p>
          </div>
        </div>

        {/* Shipping Details */}
        <div className="space-y-5 pt-6 border-t border-[#E7E7E7]">
          <p className="text-xs font-bold text-[#0B0B0B] uppercase tracking-widest">Shipping Details</p>
          <div className="grid gap-4">
            <FormInput
              label="Your name"
              value={orderForm.buyerName}
              onChange={(value) => handleInputChange("buyerName", value)}
              placeholder="e.g. Emma Shaw"
            />
            <FormInput
              label="Company name"
              value={orderForm.company}
              onChange={(value) => handleInputChange("company", value)}
              placeholder="e.g. Harbour Catering"
            />
            <FormInput
              label="Email address"
              type="email"
              value={orderForm.email}
              onChange={(value) => handleInputChange("email", value)}
              placeholder="you@company.com"
            />
            <FormTextArea
              label="Delivery address"
              value={orderForm.shippingAddress}
              onChange={(value) => handleInputChange("shippingAddress", value)}
              placeholder="Full shipping address..."
            />
            <FormTextArea
              label="Order notes"
              value={orderForm.notes}
              onChange={(value) => handleInputChange("notes", value)}
              placeholder="Event date, print colour, or any extra packaging notes"
            />
          </div>
        </div>

        {/* Primary Action */}
        <div className="mt-2">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full inline-flex h-14 items-center justify-center rounded-[8px] bg-[#0B0B0B] px-6 font-semibold text-white transition-all hover:bg-[#151515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0B0B] disabled:cursor-not-allowed disabled:opacity-50 group"
          >
            {isSubmitting ? "Processing..." : (
               <>Request Production Quote <ArrowRight className="ml-2 w-4 h-4 text-[#C49A62] group-hover:translate-x-1 transition-transform" /></>
            )}
          </button>
          <p className="text-[11px] text-[#71717A] text-center mt-4 flex items-center justify-center gap-1.5 font-medium">
             <Lock className="w-3 h-3" /> Your details are secure and will only be used for this quote.
          </p>

          <AnimatePresence>
            {submitMessage && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-sm font-medium text-center text-[#0B0B0B] bg-[#F7F5F1] py-4 px-6 rounded-[8px] border border-[#C49A62] mt-6"
              >
                {submitMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function PackagingPreview({
  kind,
  placement,
  logoPreview,
}: {
  kind: ProductKind;
  placement: LogoPlacement;
  logoPreview: string | null;
}) {
  return (
    <div className="relative flex w-full h-full items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src={previewImages[kind]}
          alt={`${kind} preview`}
          fill
          unoptimized
          className="object-cover opacity-95"
        />
        {/* Dark gradient overlay to ensure the logo pops if needed, though Unsplash images chosen are good */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent mix-blend-multiply" />
      </div>
      
      <div className="relative w-full h-full max-w-[600px] aspect-[4/3] sm:aspect-auto">
        <div
          className={`absolute z-20 flex items-center justify-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)] ${logoPositions[kind][placement]}`}
        >
          {logoPreview ? (
            <Image src={logoPreview} alt="Uploaded logo preview" fill unoptimized className="object-contain drop-shadow-md mix-blend-multiply opacity-90" />
          ) : (
            <div className="flex flex-col items-center justify-center text-center opacity-70 mix-blend-multiply">
              <div className="w-10 h-10 mb-1 border-[3px] border-current rounded-full flex items-center justify-center">
                 <span className="font-bold text-xs">A</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] leading-tight">Acme<br/>Coffee Co.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



function FormInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-[#0B0B0B] mb-2 block">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-[8px] border border-[#E7E7E7] bg-[#F7F5F1] px-4 py-3 text-sm text-[#0B0B0B] outline-none transition focus:border-[#0B0B0B] focus:ring-1 focus:ring-[#0B0B0B] placeholder:text-[#71717A]"
      />
    </label>
  );
}

function FormTextArea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-[#0B0B0B] mb-2 block">{label}</span>
      <textarea
        rows={3}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-[8px] border border-[#E7E7E7] bg-[#F7F5F1] px-4 py-3 text-sm text-[#0B0B0B] outline-none transition focus:border-[#0B0B0B] focus:ring-1 focus:ring-[#0B0B0B] placeholder:text-[#71717A] resize-none"
      />
    </label>
  );
}
