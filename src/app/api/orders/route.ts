import { NextResponse } from "next/server";
import { sendOrderNotifications } from "@/lib/resend";
import { createSupabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";

type OrderRequest = {
  productId?: string;
  productName?: string;
  quantity?: number;
  placement?: string;
  customDesign?: boolean;
  quoteTotal?: number;
  logoName?: string;
  buyerName?: string;
  company?: string;
  email?: string;
  shippingAddress?: string;
  notes?: string;
};

function buildOrderId() {
  return `KP-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export async function POST(request: Request) {
  const body = (await request.json()) as OrderRequest;

  if (
    !body.productId ||
    !body.productName ||
    !body.quantity ||
    !body.placement ||
    !body.logoName ||
    !body.buyerName ||
    !body.email ||
    !body.shippingAddress
  ) {
    return NextResponse.json(
      {
        message: "Please complete the product selection, upload a logo, and add buyer details before submitting.",
      },
      { status: 400 },
    );
  }

  const orderId = buildOrderId();
  const vendorEmail = process.env.DEFAULT_VENDOR_EMAIL ?? null;
  const canPersist = isSupabaseConfigured() && Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);

  let internalOrderId = orderId;

  if (canPersist) {
    const supabase = createSupabaseAdmin();
    const { data, error } = await supabase.from("kairo_orders").insert({
      order_number: orderId,
      product_id: body.productId,
      product_name: body.productName,
      quantity: body.quantity,
      placement: body.placement,
      custom_design: Boolean(body.customDesign),
      quote_total: body.quoteTotal ?? null,
      logo_name: body.logoName,
      buyer_name: body.buyerName,
      buyer_company: body.company ?? null,
      buyer_email: body.email,
      shipping_address: body.shippingAddress,
      buyer_notes: body.notes ?? null,
      status: "pending",
    }).select("id").single();

    if (error) {
      return NextResponse.json(
        {
          message: `Supabase could not save the order: ${error.message}`,
        },
        { status: 500 },
      );
    }
    
    // Use the UUID for internal relationships
    internalOrderId = data.id;
  }

  await sendOrderNotifications({
    orderId,
    productName: body.productName,
    quantity: body.quantity,
    placement: body.placement,
    customDesign: Boolean(body.customDesign),
    buyerName: body.buyerName,
    buyerEmail: body.email,
    shippingAddress: body.shippingAddress,
    vendorEmail,
  });

  return NextResponse.json({
    orderId: internalOrderId,
    orderNumber: orderId,
    message: canPersist
      ? `Order ${orderId} submitted and routed to the vendor queue.`
      : `Order ${orderId} captured in demo mode. Add Supabase keys to persist it.`,
  });
}
