"use client";

import Image from "next/image";
import { ChangeEvent, useMemo, useState } from "react";
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
    <section id="customizer" className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-[0_28px_80px_rgba(19,17,14,0.08)] sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              Live Packaging Preview
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-stone-950">
              Upload a logo and place it directly on the pack
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-stone-600">
            Buyers upload artwork from their device, choose logo placement, and instantly see the branded
            pack before they request production.
          </p>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {products.map((item) => {
            const isSelected = item.id === product.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleProductChange(item.id)}
                className={`rounded-3xl border px-4 py-4 text-left transition ${
                  isSelected
                    ? "border-stone-950 bg-stone-950 text-white"
                    : "border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400"
                }`}
              >
                <p className="text-sm font-semibold">{item.name}</p>
                <p className={`mt-2 text-xs leading-5 ${isSelected ? "text-stone-300" : "text-stone-500"}`}>
                  {item.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.52fr]">
          <div className="rounded-[1.75rem] bg-stone-100 p-4 sm:p-6">
            <PackagingPreview kind={product.kind} accent={product.accent} placement={placement} logoPreview={logoPreview} />

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-stone-200 bg-white px-4 py-4">
              <div>
                <p className="text-sm font-semibold text-stone-900">Upload your logo</p>
                <p className="mt-1 text-sm text-stone-500">PNG, JPG, or SVG from your device.</p>
              </div>
              <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white">
                Choose file
                <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
              </label>
            </div>

            <p className="mt-3 text-sm text-stone-500">
              {logoName ? `Current upload: ${logoName}` : "No artwork uploaded yet. A text placeholder is shown until you add a logo."}
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">Product Spec</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-950">{product.name}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">{product.description}</p>

            <dl className="mt-5 grid gap-4 text-sm">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <dt className="text-stone-500">Lead time</dt>
                <dd className="font-medium text-stone-950">{product.leadTime}</dd>
              </div>
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <dt className="text-stone-500">Minimum order</dt>
                <dd className="font-medium text-stone-950">{product.minOrder} units</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-stone-500">Finish</dt>
                <dd className="font-medium text-stone-950">{product.finish}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-stone-200 bg-[#151311] p-6 text-white shadow-[0_28px_80px_rgba(19,17,14,0.2)]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">Quote Builder</p>
        <h2 className="mt-2 text-2xl font-semibold">Turn the preview into a vendor-ready order</h2>

        <div className="mt-6 space-y-6">
          <div>
            <p className="text-sm font-medium text-stone-300">Logo placement</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {placementOptions.map((option) => {
                const isSelected = option.value === placement;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setPlacement(option.value)}
                    className={`rounded-2xl border px-4 py-4 text-left transition ${
                      isSelected
                        ? "border-white bg-white text-stone-950"
                        : "border-stone-700 bg-stone-900 text-stone-200 hover:border-stone-500"
                    }`}
                  >
                    <p className="text-sm font-semibold">{option.label}</p>
                    <p className={`mt-1 text-xs ${isSelected ? "text-stone-500" : "text-stone-400"}`}>
                      {option.fee === 0 ? "Included" : `+${currency.format(option.fee)} / 100`}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <label className="block">
              <span className="text-sm font-medium text-stone-300">Quantity</span>
              <input
                type="number"
                min={product.minOrder}
                step={50}
                value={quantity}
                onChange={(event) => setQuantity(Math.max(product.minOrder, Number(event.target.value) || product.minOrder))}
                className="mt-2 w-full rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-white outline-none ring-0 transition focus:border-stone-400"
              />
            </label>
            <p className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-sm text-stone-300">
              MOQ: {product.minOrder}
            </p>
          </div>

          <label className="flex items-start gap-3 rounded-3xl border border-stone-700 bg-stone-900/80 p-4">
            <input
              type="checkbox"
              checked={customDesign}
              onChange={(event) => setCustomDesign(event.target.checked)}
              className="mt-1 h-4 w-4 rounded border-stone-600 bg-stone-950"
            />
            <span className="text-sm leading-6 text-stone-300">
              Add a one-off custom design service for <strong className="text-white">{currency.format(customDesignFee)}</strong>.
              We turn the uploaded logo into a more complete branded cup or pack concept.
            </span>
          </label>

          <div className="rounded-[1.5rem] border border-stone-700 bg-stone-900 p-5">
            <p className="text-sm font-medium text-stone-300">Approximate quote</p>
            <div className="mt-4 space-y-3 text-sm text-stone-300">
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
                <span>{currency.format(quote.subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Custom design</span>
                <span>{customDesign ? currency.format(customDesignFee) : "Not added"}</span>
              </div>
              <div className="flex items-center justify-between border-t border-stone-700 pt-3 text-base font-semibold text-white">
                <span>Total estimate</span>
                <span>{currency.format(quote.total)}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
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

          <div className="rounded-3xl border border-stone-700 bg-stone-900 px-4 py-4 text-sm leading-6 text-stone-300">
            Vendors receive the product spec, shipping name, and shipping address. Buyer email stays on the platform
            for confirmations and chat alerts rather than being exposed on the vendor view.
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full rounded-full bg-white px-5 py-4 text-sm font-semibold text-stone-950 transition hover:bg-stone-200 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting order..." : "Submit order to vendor queue"}
          </button>

          {submitMessage ? <p className="text-sm leading-6 text-stone-300">{submitMessage}</p> : null}
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
      <div className="absolute inset-x-10 bottom-8 h-10 rounded-full bg-stone-900/10 blur-2xl" />
      <PackagingShell kind={kind} accent={accent} />
      <div
        className={`absolute z-20 flex items-center justify-center overflow-hidden rounded-md border border-black/10 bg-white/75 px-2 text-center shadow-sm ${logoPositions[kind][placement]} relative`}
      >
        {logoPreview ? (
          <Image src={logoPreview} alt="Uploaded logo preview" fill unoptimized className="object-contain p-1" />
        ) : (
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-700">Your Logo</span>
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
      <span className="text-sm font-medium text-stone-300">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-sm text-white outline-none transition focus:border-stone-400"
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
      <span className="text-sm font-medium text-stone-300">{label}</span>
      <textarea
        rows={4}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-sm text-white outline-none transition focus:border-stone-400"
      />
    </label>
  );
}
