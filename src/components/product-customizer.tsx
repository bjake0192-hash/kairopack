"use client";

import Image from "next/image";
import { ChangeEvent, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, CheckCircle2 } from "lucide-react";
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

const logoPositions: Record<ProductKind, Record<LogoPlacement, string>> = {
  cup: {
    top: "top-[23%] left-1/2 h-16 w-24 -translate-x-1/2",
    middle: "top-[39%] left-1/2 h-20 w-28 -translate-x-1/2",
    bottom: "top-[57%] left-1/2 h-16 w-24 -translate-x-1/2",
  },
  bowl: {
    top: "top-[34%] left-1/2 h-14 w-32 -translate-x-1/2",
    middle: "top-[46%] left-1/2 h-16 w-36 -translate-x-1/2",
    bottom: "top-[58%] left-1/2 h-12 w-32 -translate-x-1/2",
  },
  box: {
    top: "top-[28%] left-1/2 h-14 w-32 -translate-x-1/2",
    middle: "top-[45%] left-1/2 h-20 w-36 -translate-x-1/2",
    bottom: "top-[61%] left-1/2 h-12 w-28 -translate-x-1/2",
  },
  bag: {
    top: "top-[30%] left-1/2 h-14 w-24 -translate-x-1/2",
    middle: "top-[46%] left-1/2 h-20 w-28 -translate-x-1/2",
    bottom: "top-[65%] left-1/2 h-12 w-24 -translate-x-1/2",
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
      setSubmitMessage("Please upload an image file for the logo preview.");
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
    <section id="customizer" className="grid gap-12 lg:grid-cols-[1fr_0.85fr]">
      <div className="rounded-[3rem] border border-[#111111]/10 bg-white p-8 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4f3ef] rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 relative z-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#111111]/50 mb-4">
              Step 1: Configuration
            </p>
            <h2 className="text-4xl font-semibold text-[#111111] tracking-tighter-plus">
              Select product & upload
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#111111]/70 font-medium">
            Upload your artwork to instantly verify placement and scale before requesting production.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-12 relative z-10">
          {products.map((item) => {
            const isSelected = item.id === product.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleProductChange(item.id)}
                className={`group relative rounded-2xl border px-6 py-6 text-left transition-all duration-500 overflow-hidden ${
                  isSelected
                    ? "border-[#111111] bg-[#111111] text-white shadow-xl"
                    : "border-[#111111]/10 bg-[#f4f3ef]/50 text-[#111111] hover:border-[#111111]/30 hover:bg-white"
                }`}
              >
                {isSelected && (
                  <motion.div 
                    layoutId="active-product-bg"
                    className="absolute inset-0 bg-[#111111]"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative z-10">
                  <p className="text-base font-semibold tracking-tight">{item.name}</p>
                  <p className={`mt-2 text-xs leading-relaxed ${isSelected ? "text-white/70" : "text-[#111111]/60"}`}>
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] relative z-10">
          <div className="flex flex-col gap-6">
            <PackagingPreview kind={product.kind} accent={product.accent} placement={placement} logoPreview={logoPreview} />

            <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-[#111111]/10 bg-[#f4f3ef]/80 backdrop-blur-sm px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <UploadCloud className="w-5 h-5 text-[#111111]" />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#111111] tracking-tight">Upload your logo</p>
                  <p className="mt-1 text-xs text-[#111111]/60 font-medium">PNG, JPG, or SVG from your device.</p>
                </div>
              </div>
              <label className="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white border border-[#111111]/10 shadow-sm px-8 py-3 text-xs font-bold uppercase tracking-widest text-[#111111] transition hover:shadow-md">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Choose file</span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-[#111111] transition-all duration-300 ease-out group-hover:scale-100" />
                <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
              </label>
            </div>

            <p className="text-[10px] uppercase tracking-widest font-bold text-[#111111]/40 px-4">
              {logoName ? (
                <span className="flex items-center gap-2 text-[#d9534f]">
                  <CheckCircle2 className="w-3 h-3" /> Current file: {logoName}
                </span>
              ) : "No artwork uploaded yet. A text placeholder is shown."}
            </p>
          </div>

          <div className="rounded-3xl border border-[#111111]/10 bg-white p-8 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#111111]/50 mb-4">Spec Sheet</p>
              <h3 className="text-2xl font-semibold text-[#111111] tracking-tighter-plus mb-3">{product.name}</h3>
              <p className="text-sm leading-relaxed text-[#111111]/70 mb-10 font-medium">{product.description}</p>
            </div>

            <dl className="grid gap-6 text-sm font-medium">
              <div className="flex items-center justify-between border-b border-[#111111]/10 pb-4">
                <dt className="text-[#111111]/60">Lead time</dt>
                <dd className="text-[#111111]">{product.leadTime}</dd>
              </div>
              <div className="flex items-center justify-between border-b border-[#111111]/10 pb-4">
                <dt className="text-[#111111]/60">Minimum order</dt>
                <dd className="text-[#111111]">{product.minOrder} units</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-[#111111]/60">Finish</dt>
                <dd className="text-[#111111]">{product.finish}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="rounded-[3rem] bg-[#111111] p-8 lg:p-12 text-white shadow-2xl flex flex-col relative overflow-hidden">
        {/* Subtle decorative background for dark section */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

        <div className="mb-12 relative z-10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4">Step 2: Quote & Order</p>
          <h2 className="text-4xl font-semibold tracking-tighter-plus">Turn the preview into production</h2>
        </div>

        <div className="space-y-10 flex-1 relative z-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Logo placement</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {placementOptions.map((option) => {
                const isSelected = option.value === placement;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setPlacement(option.value)}
                    className={`relative rounded-2xl border px-5 py-4 text-center transition-all duration-300 overflow-hidden ${
                      isSelected
                        ? "border-transparent text-[#111111]"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    {isSelected && (
                      <motion.div 
                        layoutId="active-placement-bg"
                        className="absolute inset-0 bg-[#f4f3ef]"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <div className="relative z-10">
                      <p className="text-sm font-semibold tracking-tight">{option.label}</p>
                      <p className={`mt-1 text-[10px] uppercase tracking-widest font-bold ${isSelected ? "text-[#111111]/50" : "text-white/40"}`}>
                        {option.fee === 0 ? "Included" : `+${currency.format(option.fee)} / 100`}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-[1fr_auto] items-end">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4 block">Quantity</span>
              <input
                type="number"
                min={product.minOrder}
                step={50}
                value={quantity}
                onChange={(event) => setQuantity(Math.max(product.minOrder, Number(event.target.value) || product.minOrder))}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white text-lg font-semibold outline-none transition focus:border-[#d9534f] focus:bg-white/10 focus:ring-1 focus:ring-[#d9534f]"
              />
            </label>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 flex items-center h-[62px]">
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                MOQ: {product.minOrder}
              </p>
            </div>
          </div>

          <label className="flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 cursor-pointer group hover:bg-white/10 hover:border-white/20 transition-all">
            <div className="pt-1">
              <input
                type="checkbox"
                checked={customDesign}
                onChange={(event) => setCustomDesign(event.target.checked)}
                className="h-5 w-5 rounded border-white/20 bg-transparent text-[#d9534f] focus:ring-[#d9534f] focus:ring-offset-[#111111]"
              />
            </div>
            <span className="text-sm leading-relaxed text-white/70 font-medium">
              Add a one-off custom design service for <strong className="text-white font-semibold">{currency.format(customDesignFee)}</strong>.
              We turn the uploaded logo into a fully branded pack concept before production.
            </span>
          </label>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d9534f] rounded-full blur-[80px] opacity-20 pointer-events-none" />
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">Approximate quote</p>
            <div className="space-y-4 text-sm text-white/70 font-medium">
              <div className="flex items-center justify-between">
                <span>Base rate per 100</span>
                <span>{currency.format(product.basePrice)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Placement uplift</span>
                <span>{placementMeta.fee === 0 ? "Included" : currency.format(placementMeta.fee)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Production subtotal</span>
                <span className="text-white">{currency.format(quote.subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Custom design</span>
                <span>{customDesign ? currency.format(customDesignFee) : "Not added"}</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-6 text-xl font-semibold text-white tracking-tighter-plus">
                <span>Total estimate</span>
                <span>{currency.format(quote.total)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-6">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">Shipping Details</p>
            <div className="grid gap-5">
              <FormInput
                label="Buyer name"
                value={orderForm.buyerName}
                onChange={(value) => handleInputChange("buyerName", value)}
                placeholder="Emma Shaw"
              />
              <FormInput
                label="Company"
                value={orderForm.company}
                onChange={(value) => handleInputChange("company", value)}
                placeholder="Harbour Catering"
              />
              <FormInput
                label="Email"
                type="email"
                value={orderForm.email}
                onChange={(value) => handleInputChange("email", value)}
                placeholder="procurement@company.com"
              />
              <FormTextArea
                label="Shipping name and address"
                value={orderForm.shippingAddress}
                onChange={(value) => handleInputChange("shippingAddress", value)}
                placeholder="Emma Shaw, 22 Seaforth Way, Liverpool, L3 8RF"
              />
              <FormTextArea
                label="Order notes"
                value={orderForm.notes}
                onChange={(value) => handleInputChange("notes", value)}
                placeholder="Event date, print colour, or any extra pack notes"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full relative group inline-flex h-16 items-center justify-center overflow-hidden rounded-2xl bg-[#d9534f] px-8 font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 mt-8"
          >
            <span className="relative z-10 text-sm uppercase tracking-widest font-bold">
              {isSubmitting ? "Processing..." : "Submit to Production Queue"}
            </span>
            {!isSubmitting && (
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl bg-white/20 transition-all duration-300 ease-out group-hover:scale-100" />
            )}
          </button>

          <AnimatePresence>
            {submitMessage && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xs font-bold uppercase tracking-widest text-center text-white/90 bg-white/10 py-4 rounded-xl border border-white/20 mt-6"
              >
                {submitMessage}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function PackagingPreview({
  kind,
  accent,
  placement,
  logoPreview,
}: {
  kind: ProductKind;
  accent: string;
  placement: LogoPlacement;
  logoPreview: string | null;
}) {
  return (
    <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[1.75rem] bg-[radial-gradient(circle_at_top,_#fff_0%,_#f5f0e9_48%,_#ece5db_100%)]">
      <div className="absolute inset-x-10 bottom-8 h-10 rounded-full bg-zinc-900/10 blur-2xl" />
      <PackagingShell kind={kind} accent={accent} />
      <div
        className={`absolute z-20 flex items-center justify-center overflow-hidden rounded-md border border-black/10 bg-white/75 px-2 text-center shadow-sm transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)] ${logoPositions[kind][placement]}`}
      >
        {logoPreview ? (
          <Image src={logoPreview} alt="Uploaded logo preview" fill unoptimized className="object-contain p-1" />
        ) : (
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-700">Your Logo</span>
        )}
      </div>
    </div>
  );
}

function PackagingShell({ kind, accent }: { kind: ProductKind; accent: string }) {
  if (kind === "cup") {
    return (
      <svg viewBox="0 0 360 420" className="relative z-10 h-[360px] w-[300px]">
        <ellipse cx="180" cy="372" rx="88" ry="18" fill="#00000010" />
        <ellipse cx="180" cy="96" rx="102" ry="26" fill="#e4d4c1" />
        <path d="M96 96h168l-28 248c-3 25-25 44-50 44h-12c-25 0-47-19-50-44L96 96Z" fill="#f8f5ef" />
        <path d="M96 96h168l-8 68H104l-8-68Z" fill={accent} opacity="0.2" />
        <ellipse cx="180" cy="96" rx="102" ry="24" fill="#f1e4d5" />
        <ellipse cx="180" cy="84" rx="110" ry="28" fill="#1d1a17" />
        <ellipse cx="180" cy="84" rx="96" ry="19" fill="#2b2621" />
      </svg>
    );
  }

  if (kind === "bowl") {
    return (
      <svg viewBox="0 0 420 340" className="relative z-10 h-[300px] w-[340px]">
        <ellipse cx="210" cy="286" rx="118" ry="20" fill="#00000010" />
        <ellipse cx="210" cy="118" rx="150" ry="36" fill="#efe4d8" />
        <path d="M78 118h264c-6 92-51 145-132 145S84 210 78 118Z" fill="#faf6f0" />
        <path d="M78 118h264c-2 22-6 40-11 54H89c-5-14-9-32-11-54Z" fill={accent} opacity="0.2" />
        <ellipse cx="210" cy="104" rx="160" ry="34" fill="#e0d1c0" />
        <ellipse cx="210" cy="94" rx="170" ry="38" fill="#2b2621" />
      </svg>
    );
  }

  if (kind === "box") {
    return (
      <svg viewBox="0 0 420 340" className="relative z-10 h-[300px] w-[340px]">
        <ellipse cx="210" cy="286" rx="128" ry="20" fill="#00000010" />
        <path d="M96 118 210 74l114 44-114 44-114-44Z" fill="#f4ebe2" />
        <path d="M96 118v98l114 52v-106L96 118Z" fill="#efe3d7" />
        <path d="M324 118v98l-114 52v-106l114-44Z" fill="#e6d8c9" />
        <path d="M125 130h170v102H125Z" fill="#faf6f0" />
        <path d="M125 130h170v28H125Z" fill={accent} opacity="0.2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 360 420" className="relative z-10 h-[360px] w-[300px]">
      <ellipse cx="180" cy="374" rx="98" ry="20" fill="#00000010" />
      <path d="M124 84c0-10 8-18 18-18h14c10 0 18 8 18 18v18h12V84c0-10 8-18 18-18h14c10 0 18 8 18 18v18h8c17 0 30 13 30 30v196c0 17-13 30-30 30H102c-17 0-30-13-30-30V132c0-17 13-30 30-30h22V84Z" fill="#faf6f0" />
      <path d="M72 132c0-17 13-30 30-30h156c17 0 30 13 30 30v44H72v-44Z" fill={accent} opacity="0.2" />
      <path d="M124 84c0-10 8-18 18-18h14c10 0 18 8 18 18v24h-18V88c0-2-2-4-4-4h-10c-2 0-4 2-4 4v20h-14V84Zm80 0c0-10 8-18 18-18h14c10 0 18 8 18 18v24h-14V88c0-2-2-4-4-4h-10c-2 0-4 2-4 4v20h-18V84Z" fill="#b6977f" />
    </svg>
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
      <span className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3 block">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white font-medium outline-none transition focus:border-[#d9534f] focus:bg-white/10 focus:ring-1 focus:ring-[#d9534f] placeholder:text-white/30"
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
      <span className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3 block">{label}</span>
      <textarea
        rows={4}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white font-medium outline-none transition focus:border-[#d9534f] focus:bg-white/10 focus:ring-1 focus:ring-[#d9534f] placeholder:text-white/30 resize-none"
      />
    </label>
  );
}
