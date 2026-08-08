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
    <div className="min-h-screen bg-[#f4f3ef] flex flex-col font-sans selection:bg-[#111111] selection:text-[#f4f3ef]">
      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-[#111111]/10 bg-white px-6 py-6 lg:px-12 relative z-20">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#111111]/50">Kairo Pack</p>
          <h1 className="text-xl font-semibold text-[#111111] tracking-tighter-plus">Vendor Command Center</h1>
        </div>
        <Link
          href="/"
          className="group inline-flex h-12 items-center justify-center rounded-full border-2 border-[#111111] bg-transparent px-8 text-xs font-bold uppercase tracking-widest text-[#111111] transition-all hover:bg-[#111111] hover:text-[#f4f3ef]"
        >
          <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Exit Portal
        </Link>
      </header>

      {/* Main Layout */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden max-w-[1800px] w-full mx-auto p-4 lg:p-8 gap-4 lg:gap-8">
        {/* Left Column: Order List */}
        <aside className="w-full lg:w-[450px] bg-white rounded-[2rem] flex flex-col overflow-hidden shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#111111]/5 relative">
          <div className="p-8 border-b border-[#111111]/10 relative z-10 bg-white">
            <h2 className="text-xl font-semibold text-[#111111] tracking-tighter-plus">Active Queue</h2>
            <p className="text-sm text-[#111111]/60 mt-1 font-medium">Select an order to view specifications.</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 relative z-10 bg-white">
            {displayOrders.map((order) => {
              const isSelected = order.id === selectedOrderId;
              return (
                <button
                  key={order.id}
                  onClick={() => setSelectedOrderId(order.id)}
                  className={`w-full text-left rounded-2xl p-5 transition-all duration-300 relative overflow-hidden group ${
                    isSelected 
                      ? "text-white" 
                      : "bg-[#f4f3ef]/50 text-[#111111] hover:bg-[#111111]/5"
                  }`}
                >
                  {isSelected && (
                    <motion.div 
                      layoutId="active-order-bg"
                      className="absolute inset-0 bg-[#111111]"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${isSelected ? "text-white/60" : "text-[#111111]/50"}`}>
                        {order.id}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                        order.status === "pending" 
                          ? (isSelected ? "bg-[#d9534f]/20 text-[#d9534f]" : "bg-[#d9534f]/10 text-[#d9534f]") 
                          : (isSelected ? "bg-white/20 text-white" : "bg-[#111111]/10 text-[#111111]/70")
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <h3 className={`text-base font-semibold tracking-tight truncate mb-1 ${isSelected ? "text-white" : "text-[#111111]"}`}>
                      {order.productName}
                    </h3>
                    <div className={`flex items-center justify-between mt-4 text-xs font-medium ${isSelected ? "text-white/70" : "text-[#111111]/60"}`}>
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
        <section className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#111111]/5 relative">
          <AnimatePresence mode="wait">
            {selectedOrder ? (
              <motion.div 
                key={selectedOrder.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col lg:flex-row w-full h-full"
              >
                {/* Order Spec Sheet */}
                <div className="flex-1 overflow-y-auto p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#111111]/10 relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#f4f3ef] rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="max-w-2xl relative z-10">
                    <div className="mb-12">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#111111]/50 mb-4">Production Brief</p>
                      <h2 className="text-4xl font-semibold text-[#111111] tracking-tighter-plus mb-4">
                        {selectedOrder.id}
                      </h2>
                      <p className="text-base text-[#111111]/70 leading-relaxed font-medium">
                        Strictly confidential production details. Buyer contact info is provided for final shipping purposes only.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-12">
                      <InfoCard label="Product" value={selectedOrder.productName} />
                      <InfoCard label="Quantity" value={`${selectedOrder.quantity} units`} />
                      <InfoCard label="Logo Placement" value={selectedOrder.placement} />
                      <InfoCard label="Custom Design" value={selectedOrder.customDesign ? "Requested (+£50)" : "Standard"} highlight={selectedOrder.customDesign} />
                    </div>

                    <div className="space-y-6 mb-12">
                      <h3 className="text-sm font-semibold text-[#111111] tracking-tight uppercase tracking-widest">Logistics</h3>
                      <div className="rounded-[1.5rem] border border-[#111111]/10 bg-[#f4f3ef]/50 p-8">
                        <div className="grid sm:grid-cols-2 gap-8">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#111111]/50 mb-2">Recipient</p>
                            <p className="text-base font-semibold text-[#111111]">{selectedOrder.customer}</p>
                            <p className="text-sm text-[#111111]/70 mt-1 font-medium">{selectedOrder.company}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#111111]/50 mb-2">Destination</p>
                            <p className="text-sm text-[#111111] font-medium leading-relaxed max-w-[200px]">{selectedOrder.shippingAddress}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-sm font-semibold text-[#111111] tracking-tight uppercase tracking-widest">Buyer Notes</h3>
                      <div className="rounded-[1.5rem] border border-[#111111]/10 bg-[#f4f3ef]/50 p-8">
                        <p className="text-base text-[#111111]/80 leading-relaxed font-medium italic">
                          "{selectedOrder.messagePreview}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Interface */}
                <div className="w-full lg:w-[450px] flex flex-col bg-[#111111] shrink-0 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="p-8 border-b border-white/10 relative z-10">
                    <h3 className="text-xl font-semibold text-white tracking-tighter-plus">Direct Comms</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mt-3">E2E Encrypted Thread</p>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-8 space-y-8 relative z-10">
                    {sampleConversation.map((message) => (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={message.id}
                        className={`flex flex-col ${message.sender === "vendor" ? "items-end" : "items-start"}`}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 px-1">
                          {message.sender === "vendor" ? "You" : "Buyer"}
                        </span>
                        <div
                          className={`max-w-[85%] rounded-2xl px-6 py-4 text-sm leading-relaxed font-medium ${
                            message.sender === "vendor"
                              ? "bg-[#d9534f] text-white rounded-tr-sm"
                              : "bg-white/10 text-white rounded-tl-sm border border-white/5"
                          }`}
                        >
                          {message.body}
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-white/30 mt-2 px-1">
                          {message.sentAt}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="p-6 border-t border-white/10 relative z-10 bg-[#111111]">
                    <div className="relative flex items-end bg-white/5 rounded-2xl border border-white/10 focus-within:border-white/30 focus-within:bg-white/10 transition-colors p-2">
                      <textarea
                        placeholder="Type a secure message..."
                        className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none resize-none min-h-[60px] max-h-[120px]"
                        rows={1}
                      />
                      <button className="h-12 w-12 shrink-0 rounded-xl bg-white text-[#111111] hover:bg-[#d9534f] hover:text-white flex items-center justify-center transition-colors">
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex-1 flex items-center justify-center flex-col text-[#111111]/40 h-full w-full">
                <div className="w-16 h-16 rounded-full border border-[#111111]/10 flex items-center justify-center mb-4 bg-[#f4f3ef]">
                  <ArrowLeft className="w-6 h-6" />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest">Select an order</p>
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
    <div className={`rounded-[1.5rem] border p-6 transition-colors ${highlight ? "bg-[#111111] border-[#111111] text-white" : "bg-white border-[#111111]/10 text-[#111111]"}`}>
      <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${highlight ? "text-white/60" : "text-[#111111]/50"}`}>{label}</p>
      <p className="text-base font-semibold">{value}</p>
    </div>
  );
}
