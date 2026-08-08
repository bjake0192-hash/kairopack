"use client";

import Link from "next/link";
import { useState } from "react";
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

  const [selectedOrderId, setSelectedOrderId] = useState<string>(displayOrders[0]?.id || "");
  const selectedOrder = displayOrders.find(o => o.id === selectedOrderId) || displayOrders[0];

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-sans selection:bg-white selection:text-zinc-950">
      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-6 py-4 lg:px-8">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Kairo Pack</p>
          <h1 className="text-lg font-semibold text-white tracking-tight">Vendor Workspace</h1>
        </div>
        <Link
          href="/"
          className="inline-flex h-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 px-4 text-xs font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-white hover:bg-zinc-800 active:scale-[0.98]"
        >
          Back to Storefront
        </Link>
      </header>

      {/* Main Layout */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Column: Order List */}
        <aside className="w-full lg:w-[400px] border-r border-zinc-800 bg-zinc-950/50 flex flex-col overflow-hidden shrink-0">
          <div className="p-5 border-b border-zinc-800">
            <h2 className="text-sm font-semibold text-white tracking-tight">Order Queue</h2>
            <p className="text-xs text-zinc-500 mt-1">Select an order to view details and chat.</p>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {displayOrders.map((order) => {
              const isSelected = order.id === selectedOrderId;
              return (
                <button
                  key={order.id}
                  onClick={() => setSelectedOrderId(order.id)}
                  className={`w-full text-left rounded-xl p-4 transition-all duration-200 border ${
                    isSelected 
                      ? "bg-zinc-900 border-zinc-700 shadow-sm" 
                      : "bg-transparent border-transparent hover:bg-zinc-900/50 hover:border-zinc-800"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{order.id}</span>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      order.status === "pending" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" : 
                      "bg-zinc-800 text-zinc-400 border border-zinc-700"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <h3 className={`text-sm font-medium tracking-tight truncate ${isSelected ? "text-white" : "text-zinc-300"}`}>
                    {order.productName}
                  </h3>
                  <div className="flex items-center justify-between mt-3 text-xs text-zinc-500">
                    <span>{order.quantity} units</span>
                    <span>{order.requestedAt}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Column: Order Details & Chat */}
        <section className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-[#0a0a0a]">
          {selectedOrder ? (
            <>
              {/* Order Spec Sheet */}
              <div className="flex-1 overflow-y-auto p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-zinc-800">
                <div className="max-w-2xl">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-white tracking-tight mb-2">
                      Order Specifications
                    </h2>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Production details for {selectedOrder.id}. Buyer contact info is provided for shipping purposes only.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <InfoCard label="Product" value={selectedOrder.productName} />
                    <InfoCard label="Quantity" value={`${selectedOrder.quantity} units`} />
                    <InfoCard label="Logo Placement" value={selectedOrder.placement} />
                    <InfoCard label="Custom Design" value={selectedOrder.customDesign ? "Yes (+£50)" : "No"} />
                  </div>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-sm font-semibold text-white tracking-tight">Shipping & Contact</h3>
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-medium text-zinc-500 mb-1">Buyer</p>
                          <p className="text-sm text-zinc-300">{selectedOrder.customer}</p>
                          <p className="text-sm text-zinc-500">{selectedOrder.company}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-zinc-500 mb-1">Destination</p>
                          <p className="text-sm text-zinc-300">{selectedOrder.shippingAddress}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-white tracking-tight">Buyer Notes</h3>
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {selectedOrder.messagePreview}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Interface */}
              <div className="w-full lg:w-[450px] flex flex-col bg-zinc-950 shrink-0">
                <div className="p-5 border-b border-zinc-800 bg-zinc-950">
                  <h3 className="text-sm font-semibold text-white tracking-tight">Production Chat</h3>
                  <p className="text-xs text-zinc-500 mt-1">Secure realtime thread with buyer</p>
                </div>
                
                <div className="flex-1 overflow-y-auto p-5 space-y-6">
                  {sampleConversation.map((message) => (
                    <div
                      key={message.id}
                      className={`flex flex-col ${message.sender === "vendor" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                          message.sender === "vendor"
                            ? "bg-zinc-800 text-white rounded-br-sm"
                            : "bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-bl-sm"
                        }`}
                      >
                        {message.body}
                      </div>
                      <span className="text-[10px] font-medium text-zinc-600 mt-2 px-1">
                        {message.sender === "vendor" ? "You" : "Buyer"} · {message.sentAt}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-zinc-800 bg-zinc-950">
                  <div className="relative">
                    <textarea
                      placeholder="Type a message..."
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 pr-12 text-sm text-white placeholder:text-zinc-600 focus:border-zinc-600 focus:bg-zinc-900 focus:outline-none resize-none"
                      rows={2}
                    />
                    <button className="absolute right-3 bottom-3 p-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2 11 13"/>
                        <path d="M22 2 15 22 11 13 2 9 22 2z"/>
                      </svg>
                    </button>
                  </div>
                  <p className="text-[10px] text-zinc-600 mt-3 text-center">
                    Messages are routed securely via Supabase Realtime.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-zinc-500 text-sm">
              No order selected
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4">
      <p className="text-xs font-medium text-zinc-500 mb-1">{label}</p>
      <p className="text-sm font-medium text-zinc-200">{value}</p>
    </div>
  );
}
