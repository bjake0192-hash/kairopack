"use client";

import { useState } from "react";
import { ProductOption, products as initialProducts, ProductKind } from "@/lib/site-data";
import { Plus, Edit2, Trash2, Package, Search, X } from "lucide-react";
import Image from "next/image";

export function AdminDashboard() {
  const [products, setProducts] = useState<ProductOption[]>(initialProducts);
  const [search, setSearch] = useState("");
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductOption | null>(null);

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  const handleOpenModal = (product?: ProductOption) => {
    if (product) {
      setEditingProduct(product);
    } else {
      setEditingProduct({
        id: `new-${Date.now()}`,
        name: "",
        kind: "box",
        description: "",
        basePrice: 100,
        minOrder: 500,
        leadTime: "10-14 working days",
        accent: "#000000",
        finish: "Standard finish"
      });
    }
    setIsModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    
    setProducts(prev => {
      const exists = prev.find(p => p.id === editingProduct.id);
      if (exists) {
        return prev.map(p => p.id === editingProduct.id ? editingProduct : p);
      }
      return [...prev, editingProduct];
    });
    
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="max-w-[1400px] mx-auto p-6 lg:p-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0B0B0B] mb-2">Products</h1>
          <p className="text-[#71717A]">Manage your packaging catalog and pricing.</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="inline-flex items-center justify-center bg-[#0B0B0B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#151515] rounded-lg"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-[#E7E7E7] overflow-hidden shadow-sm">
        <div className="p-4 border-b border-[#E7E7E7] flex items-center gap-4 bg-[#F7F5F1]/50">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A1A1AA]" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-[#E7E7E7] rounded-lg focus:outline-none focus:border-[#C49A62] focus:ring-1 focus:ring-[#C49A62]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#F7F5F1] text-[#71717A] text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Product</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Base Price</th>
                <th className="px-6 py-4 font-semibold">MOQ</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7E7E7]">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-[#F7F5F1]/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-[#E9E0D4] flex items-center justify-center text-[#C49A62]">
                        <Package className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-[#0B0B0B]">{product.name}</div>
                        <div className="text-xs text-[#71717A] truncate max-w-[200px]">{product.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#71717A] capitalize">{product.kind}</td>
                  <td className="px-6 py-4 font-medium">£{product.basePrice} <span className="text-xs text-[#71717A] font-normal">/ 100</span></td>
                  <td className="px-6 py-4 text-[#71717A]">{product.minOrder} units</td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => handleOpenModal(product)}
                      className="p-2 text-[#71717A] hover:text-[#C49A62] transition-colors" 
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(product.id)}
                      className="p-2 text-[#71717A] hover:text-red-500 transition-colors" 
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-[#71717A]">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0B]/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl border border-[#E7E7E7]">
            <div className="flex items-center justify-between p-6 border-b border-[#E7E7E7] sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-[#0B0B0B]">
                {editingProduct.id.startsWith("new-") ? "Add Product" : "Edit Product"}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-[#71717A] hover:text-[#0B0B0B] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSaveProduct} className="p-6 grid gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">Product Name</label>
                  <input 
                    required
                    type="text" 
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                    className="w-full p-3 text-sm border border-[#E7E7E7] rounded-lg focus:outline-none focus:border-[#C49A62]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">Category (Kind)</label>
                  <select 
                    value={editingProduct.kind}
                    onChange={(e) => setEditingProduct({...editingProduct, kind: e.target.value as ProductKind})}
                    className="w-full p-3 text-sm border border-[#E7E7E7] rounded-lg focus:outline-none focus:border-[#C49A62]"
                  >
                    <option value="cup">Cup</option>
                    <option value="bowl">Bowl</option>
                    <option value="box">Box</option>
                    <option value="bag">Bag</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">Description</label>
                <textarea 
                  required
                  rows={2}
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                  className="w-full p-3 text-sm border border-[#E7E7E7] rounded-lg focus:outline-none focus:border-[#C49A62]"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">Base Price (per 100)</label>
                  <input 
                    required
                    type="number" 
                    min="1"
                    value={editingProduct.basePrice}
                    onChange={(e) => setEditingProduct({...editingProduct, basePrice: Number(e.target.value)})}
                    className="w-full p-3 text-sm border border-[#E7E7E7] rounded-lg focus:outline-none focus:border-[#C49A62]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">Minimum Order Quantity</label>
                  <input 
                    required
                    type="number" 
                    min="1"
                    value={editingProduct.minOrder}
                    onChange={(e) => setEditingProduct({...editingProduct, minOrder: Number(e.target.value)})}
                    className="w-full p-3 text-sm border border-[#E7E7E7] rounded-lg focus:outline-none focus:border-[#C49A62]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">Lead Time</label>
                  <input 
                    required
                    type="text" 
                    value={editingProduct.leadTime}
                    onChange={(e) => setEditingProduct({...editingProduct, leadTime: e.target.value})}
                    className="w-full p-3 text-sm border border-[#E7E7E7] rounded-lg focus:outline-none focus:border-[#C49A62]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">Finish</label>
                  <input 
                    required
                    type="text" 
                    value={editingProduct.finish}
                    onChange={(e) => setEditingProduct({...editingProduct, finish: e.target.value})}
                    className="w-full p-3 text-sm border border-[#E7E7E7] rounded-lg focus:outline-none focus:border-[#C49A62]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 text-sm font-semibold text-[#0B0B0B] bg-white border border-[#E7E7E7] rounded-lg hover:bg-[#F7F5F1] transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#0B0B0B] rounded-lg hover:bg-[#151515] transition-colors"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}