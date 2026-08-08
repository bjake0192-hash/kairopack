"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sampleConversation, vendorOrders } from "@/lib/site-data";
import { ArrowLeft, Send } from "lucide-react";

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
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-4 lg:px-8 relative z-20">
        <div>
          <h1 className="text-xl font-bold text-zinc-950">Vendor Dashboard</h1>
        </div>
        <Link
          href="/"
          className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Exit Portal
        </Link>
      </header>

      {/* Main Layout */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden w-full max-w-[1600px] mx-auto p-4 lg:p-6 gap-6">
        {/* Left Column: Order List */}
        <aside className="w-full lg:w-[380px] bg-white rounded-xl flex flex-col overflow-hidden shrink-0 shadow-sm border border-zinc-200 relative">
          <div className="p-6 border-b border-zinc-200 bg-zinc-50/50">
            <h2 className="text-lg font-semibold text-zinc-950">Active Queue</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {displayOrders.map((order) => {
              const isSelected = order.id === selectedOrderId;
              return (
                <button
                  key={order.id}
                  onClick={() => setSelectedOrderId(order.id)}
                  className={`w-full text-left rounded-lg p-4 transition-all relative overflow-hidden group ${
                    isSelected 
                      ? "bg-zinc-100 border border-zinc-200" 
                      : "bg-white border border-transparent hover:bg-zinc-50"
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-zinc-500">
                        {order.id}
                      </span>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        order.status === "pending" 
                          ? "bg-amber-100 text-amber-700" 
                          : "bg-zinc-100 text-zinc-700"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-zinc-900 truncate mb-1">
                      {order.productName}
                    </h3>
                    <div className="flex items-center justify-between mt-3 text-xs text-zinc-500">
                      <span>{order.quantity} units</span>
                      <span>{order.requestedAt}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Column: Order Details & Chat */}
        <section className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-white rounded-xl shadow-sm border border-zinc-200 relative">
          <AnimatePresence mode="wait">
            {selectedOrder ? (
              <motion.div 
                key={selectedOrder.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex flex-col lg:flex-row w-full h-full"
              >
                {/* Order Spec Sheet */}
                <div className="flex-1 overflow-y-auto p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-zinc-200 relative">
                  <div className="max-w-2xl relative z-10">
                    <div className="mb-10">
                      <p className="text-xs font-semibold text-zinc-500 mb-2">Production Brief</p>
                      <h2 className="text-3xl font-bold text-zinc-950 mb-3">
                        {selectedOrder.id}
                      </h2>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        Strictly confidential production details. Buyer contact info is provided for final shipping purposes only.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      <InfoCard label="Product" value={selectedOrder.productName} />
                      <InfoCard label="Quantity" value={`${selectedOrder.quantity} units`} />
                      <InfoCard label="Logo Placement" value={selectedOrder.placement} />
                      <InfoCard label="Custom Design" value={selectedOrder.customDesign ? "Requested (+£50)" : "Standard"} highlight={selectedOrder.customDesign} />
                    </div>

                    <div className="space-y-4 mb-10">
                      <h3 className="text-sm font-semibold text-zinc-900">Logistics</h3>
                      <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <p className="text-xs font-semibold text-zinc-500 mb-1">Recipient</p>
                            <p className="text-sm font-medium text-zinc-900">{selectedOrder.customer}</p>
                            <p className="text-sm text-zinc-600 mt-0.5">{selectedOrder.company}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-zinc-500 mb-1">Destination</p>
                            <p className="text-sm text-zinc-600 leading-relaxed max-w-[200px]">{selectedOrder.shippingAddress}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-sm font-semibold text-zinc-900">Buyer Notes</h3>
                      <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                        <p className="text-sm text-zinc-700 leading-relaxed italic">
                          "{selectedOrder.messagePreview}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Interface */}
                <div className="w-full lg:w-[400px] flex flex-col bg-zinc-50 shrink-0 relative overflow-hidden border-l border-zinc-200">
                  <div className="p-6 border-b border-zinc-200 bg-white">
                    <h3 className="text-lg font-semibold text-zinc-950">Direct Comms</h3>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {sampleConversation.map((message) => (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={message.id}
                        className={`flex flex-col ${message.sender === "vendor" ? "items-end" : "items-start"}`}
                      >
                        <span className="text-xs font-medium text-zinc-500 mb-1 px-1">
                          {message.sender === "vendor" ? "You" : "Buyer"}
                        </span>
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                            message.sender === "vendor"
                              ? "bg-zinc-900 text-zinc-50 rounded-tr-sm"
                              : "bg-white text-zinc-900 border border-zinc-200 shadow-sm rounded-tl-sm"
                          }`}
                        >
                          {message.body}
                        </div>
                        <span className="text-xs text-zinc-400 mt-1 px-1">
                          {message.sentAt}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="p-4 border-t border-zinc-200 bg-white">
                    <div className="relative flex items-end gap-2">
                      <textarea
                        placeholder="Type a message..."
                        className="flex-1 max-h-[120px] min-h-[44px] rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 resize-none"
                        rows={1}
                      />
                      <button className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-zinc-900 text-zinc-50 transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950">
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex-1 flex items-center justify-center flex-col text-zinc-400 h-full w-full">
                <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center mb-4 bg-zinc-50">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <p className="text-sm font-medium">Select an order</p>
              </div>
            )}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}

function InfoCard({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-lg border p-4 transition-colors ${highlight ? "bg-zinc-900 border-zinc-900 text-zinc-50" : "bg-white border-zinc-200 text-zinc-900"}`}>
      <p className={`text-xs font-semibold mb-1 ${highlight ? "text-zinc-400" : "text-zinc-500"}`}>{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}
