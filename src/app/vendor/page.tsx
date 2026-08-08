import { VendorDashboard } from "@/components/vendor-dashboard";
import { createSupabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";

export const revalidate = 0; // Disable caching for the dashboard

export default async function VendorPage() {
  let orders: any[] = [];
  
  if (isSupabaseConfigured()) {
    const supabase = createSupabaseAdmin();
    const { data, error } = await supabase
      .from("kairo_orders")
      .select("*")
      .order("created_at", { ascending: false });
      
    if (!error && data) {
      orders = data;
    }
  }

  return <VendorDashboard orders={orders} />;
}
