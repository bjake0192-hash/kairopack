export type ProductKind = "cup" | "bowl" | "box" | "bag";

export type LogoPlacement = "top" | "middle" | "bottom";

export type ProductOption = {
  id: string;
  name: string;
  kind: ProductKind;
  description: string;
  basePrice: number;
  minOrder: number;
  leadTime: string;
  accent: string;
  finish: string;
};

export type PendingOrder = {
  id: string;
  customer: string;
  company: string;
  shippingAddress: string;
  productName: string;
  quantity: number;
  placement: LogoPlacement;
  customDesign: boolean;
  status: "pending" | "awaiting-info" | "approved";
  requestedAt: string;
  messagePreview: string;
};

export type ChatMessage = {
  id: string;
  sender: "vendor" | "buyer";
  body: string;
  sentAt: string;
};

export const products: ProductOption[] = [
  {
    id: "double-wall-cup",
    name: "Double Wall Coffee Cup",
    kind: "cup",
    description: "Insulated takeaway cups for hot drinks, event service, and branded coffee counters.",
    basePrice: 145,
    minOrder: 500,
    leadTime: "10-14 working days",
    accent: "#c96f43",
    finish: "Matte kraft finish",
  },
  {
    id: "salad-bowl",
    name: "Custom Salad Bowl",
    kind: "bowl",
    description: "Wide-format bowls for salads, poke, and premium grab-and-go catering.",
    basePrice: 168,
    minOrder: 300,
    leadTime: "12-16 working days",
    accent: "#6b8f71",
    finish: "Food-safe PE lining",
  },
  {
    id: "burger-box",
    name: "Burger & Meal Box",
    kind: "box",
    description: "Clamshell box for burgers, loaded fries, and branded meal kits.",
    basePrice: 182,
    minOrder: 250,
    leadTime: "10-12 working days",
    accent: "#5f5f8d",
    finish: "Grease-resistant board",
  },
  {
    id: "carrier-bag",
    name: "Luxury Carrier Bag",
    kind: "bag",
    description: "Premium takeaway bag for bakery orders, deli service, and event gifting.",
    basePrice: 128,
    minOrder: 400,
    leadTime: "7-10 working days",
    accent: "#835c3b",
    finish: "Twisted paper handles",
  },
];

export const placementOptions: { value: LogoPlacement; label: string; fee: number }[] = [
  { value: "top", label: "Top placement", fee: 0 },
  { value: "middle", label: "Middle placement", fee: 12 },
  { value: "bottom", label: "Bottom placement", fee: 18 },
];

export const customDesignFee = 50;

export const vendorOrders: PendingOrder[] = [
  {
    id: "ORD-2418",
    customer: "Emma Shaw",
    company: "Harbour Catering",
    shippingAddress: "22 Seaforth Way, Liverpool, L3 8RF",
    productName: "Double Wall Coffee Cup",
    quantity: 1500,
    placement: "middle",
    customDesign: true,
    status: "awaiting-info",
    requestedAt: "08 Aug, 09:12",
    messagePreview: "Can you confirm whether the uploaded logo should wrap fully around the cup?",
  },
  {
    id: "ORD-2412",
    customer: "Luke Maher",
    company: "North Studio Events",
    shippingAddress: "7 Riverside Park, Leeds, LS11 9YT",
    productName: "Burger & Meal Box",
    quantity: 750,
    placement: "top",
    customDesign: false,
    status: "pending",
    requestedAt: "08 Aug, 08:03",
    messagePreview: "Buyer uploaded a single-colour logo. No further information requested yet.",
  },
];

export const sampleConversation: ChatMessage[] = [
  {
    id: "msg-1",
    sender: "vendor",
    body: "Thanks for the order. Do you want the logo centred on the cup or wrapped as a panel?",
    sentAt: "09:17",
  },
  {
    id: "msg-2",
    sender: "buyer",
    body: "Centred please, with the logo sitting slightly above the midpoint.",
    sentAt: "09:24",
  },
  {
    id: "msg-3",
    sender: "vendor",
    body: "Perfect. We will keep the logo placement in the upper-middle area and send production confirmation once approved.",
    sentAt: "09:29",
  },
];
