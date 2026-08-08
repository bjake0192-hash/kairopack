create extension if not exists "pgcrypto";

create table if not exists kairo_vendors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact_email text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists kairo_products (
  id text primary key,
  vendor_id uuid not null references kairo_vendors(id) on delete cascade,
  name text not null,
  kind text not null,
  base_price numeric(10, 2) not null,
  min_order integer not null,
  lead_time text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists kairo_orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique,
  product_id text not null,
  product_name text not null,
  quantity integer not null,
  placement text not null check (placement in ('top', 'middle', 'bottom')),
  custom_design boolean not null default false,
  quote_total numeric(10, 2),
  logo_name text not null,
  buyer_name text not null,
  buyer_company text,
  buyer_email text not null,
  shipping_address text not null,
  buyer_notes text,
  status text not null default 'pending' check (status in ('pending', 'awaiting-info', 'approved', 'in-production', 'shipped')),
  created_at timestamptz not null default now()
);

create table if not exists kairo_order_messages (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references kairo_orders(id) on delete cascade,
  sender_role text not null check (sender_role in ('buyer', 'vendor')),
  body text not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_kairo_orders_status on kairo_orders(status);
create index if not exists idx_kairo_orders_created_at on kairo_orders(created_at desc);
create index if not exists idx_kairo_messages_order_id on kairo_order_messages(order_id, created_at);

alter table kairo_vendors enable row level security;
alter table kairo_products enable row level security;
alter table kairo_orders enable row level security;
alter table kairo_order_messages enable row level security;

drop policy if exists "Public can read active products" on kairo_products;
create policy "Public can read active products"
  on kairo_products
  for select
  using (active = true);

drop policy if exists "Service role manages vendors" on kairo_vendors;
create policy "Service role manages vendors"
  on kairo_vendors
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "Service role manages orders" on kairo_orders;
create policy "Service role manages orders"
  on kairo_orders
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "Service role manages messages" on kairo_order_messages;
create policy "Service role manages messages"
  on kairo_order_messages
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
