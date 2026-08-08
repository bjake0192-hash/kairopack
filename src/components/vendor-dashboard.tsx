import Link from "next/link";
import { sampleConversation, vendorOrders } from "@/lib/site-data";

export function VendorDashboard({ orders = [] }: { orders?: any[] }) {
  const displayOrders = orders.length > 0 
    ? orders.map(o => ({
        id: o.order_number,
        customer: o.buyer_name,
        company: o.buyer_company || "No company",
        shippingAddress: o.shipping_address,
        productName: o.product_name,
        quantity: o.quantity,
        placement: o.placement,
        customDesign: o.custom_design,
        status: o.status,
        requestedAt: new Date(o.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
        messagePreview: o.buyer_notes || "No extra notes provided by buyer.",
      }))
    : vendorOrders;

  return (
    <div className="min-h-screen bg-stone-950 px-6 py-10 text-white sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">Vendor Workspace</p>
            <h1 className="mt-2 text-4xl font-semibold">Pending branded packaging orders</h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-stone-700 px-5 py-3 text-sm font-medium text-stone-300 transition hover:border-stone-500 hover:text-white"
          >
            Back to storefront
          </Link>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-[2rem] border border-stone-800 bg-stone-900 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-300">Order queue</p>
                <p className="mt-1 text-sm text-stone-500">
                  Vendor-facing records intentionally show the product brief plus shipping contact only.
                </p>
              </div>
              <span className="rounded-full border border-emerald-700/60 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Supabase ready
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {displayOrders.map((order) => (
                <article key={order.id} className="rounded-[1.5rem] border border-stone-800 bg-[#141210] p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">{order.id}</p>
                      <h2 className="mt-2 text-xl font-semibold text-white">{order.productName}</h2>
                    </div>
                    <span className="rounded-full border border-stone-700 px-3 py-1 text-xs font-medium capitalize text-stone-300">
                      {order.status.replace("-", " ")}
                    </span>
                  </div>

                  <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                    <InfoRow label="Buyer" value={`${order.customer} · ${order.company}`} />
                    <InfoRow label="Requested" value={order.requestedAt} />
                    <InfoRow label="Quantity" value={`${order.quantity} units`} />
                    <InfoRow label="Logo placement" value={order.placement} />
                    <InfoRow label="Shipping" value={order.shippingAddress} />
                    <InfoRow label="Custom design" value={order.customDesign ? "Yes (+£50)" : "No"} />
                  </dl>

                  <div className="mt-5 rounded-3xl border border-stone-800 bg-stone-950 px-4 py-4 text-sm leading-6 text-stone-300">
                    {order.messagePreview}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="space-y-8">
            <section className="rounded-[2rem] border border-stone-800 bg-stone-900 p-5">
              <p className="text-sm font-medium text-stone-300">Realtime chat example</p>
              <div className="mt-5 space-y-4">
                {sampleConversation.map((message) => (
                  <div
                    key={message.id}
                    className={`max-w-[90%] rounded-[1.5rem] px-4 py-3 text-sm leading-6 ${
                      message.sender === "vendor"
                        ? "bg-white text-stone-950"
                        : "ml-auto bg-stone-800 text-stone-100"
                    }`}
                  >
                    <p>{message.body}</p>
                    <p
                      className={`mt-2 text-xs font-medium ${
                        message.sender === "vendor" ? "text-stone-500" : "text-stone-400"
                      }`}
                    >
                      {message.sender} · {message.sentAt}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-stone-800 bg-stone-900 p-5">
              <p className="text-sm font-medium text-stone-300">Notification flow</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-400">
                <li>Buyer receives an order confirmation email through Resend.</li>
                <li>Vendor receives a new pending-order email with the pack spec and shipping details.</li>
                <li>Each new chat message can trigger a Resend notification if the recipient is offline.</li>
                <li>Realtime threads are scoped per order so buyer and vendor only see their own messages.</li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-stone-800 bg-stone-950 px-4 py-4">
      <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">{label}</dt>
      <dd className="mt-2 text-sm leading-6 text-stone-200">{value}</dd>
    </div>
  );
}
