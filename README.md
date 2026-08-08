## Kairo Pack

Custom ecommerce starter for branded catering packaging. The storefront lets buyers upload a logo from their device, preview it on packaging, choose logo placement, and submit a vendor-routed order. A vendor workspace shows how pending orders and realtime chat can be handled behind the scenes without exposing vendor details on the product page.

## Features

- Live upload-based packaging preview for cups, bowls, boxes, and bags
- Quote builder with placement pricing and optional `£50` custom design service
- Vendor-facing workspace route at `/vendor`
- API routes for orders and chat messages
- Supabase-ready schema in [`supabase/migrations/202608081415_initial_schema.sql`](./supabase/migrations/202608081415_initial_schema.sql)
- Resend notification helpers for buyer/vendor confirmations and chat alerts

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for the storefront and `http://localhost:3000/vendor` for the vendor workspace.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `DEFAULT_VENDOR_EMAIL`

Without Supabase or Resend configured, the UI still runs in demo mode and the API routes return success responses without persistence.

## Notes

- Orders store full buyer details server-side, but the vendor-facing UX is designed to show only the shipping contact and shipping address.
- Uploaded logos are previewed client-side in this starter. For production, store the original file in Supabase Storage during checkout.
- The chat notification endpoint is implemented at `/api/messages` and is intended to be called alongside a Supabase Realtime thread subscription.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Supabase (`@supabase/supabase-js`, `@supabase/ssr`)
- Resend
