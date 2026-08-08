import { NextResponse } from "next/server";
import { sendMessageNotification } from "@/lib/resend";
import { createSupabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";

export const runtime = 'edge';

type MessageRequest = {
  orderId?: string;
  senderRole?: "buyer" | "vendor";
  messageBody?: string;
  recipientEmail?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as MessageRequest;
  const canPersist = isSupabaseConfigured() && Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);

  if (!body.orderId || !body.senderRole || !body.messageBody || !body.recipientEmail) {
    return NextResponse.json(
      {
        message: "Missing order id, sender role, message body, or recipient email.",
      },
      { status: 400 },
    );
  }

  if (canPersist) {
    const supabase = createSupabaseAdmin();
    const { error } = await supabase.from("kairo_order_messages").insert({
      order_id: body.orderId,
      sender_role: body.senderRole,
      body: body.messageBody,
    });

    if (error) {
      return NextResponse.json(
        {
          message: `Supabase could not save the chat message: ${error.message}`,
        },
        { status: 500 },
      );
    }
  }

  await sendMessageNotification({
    orderId: body.orderId,
    recipientEmail: body.recipientEmail,
    senderLabel: body.senderRole === "buyer" ? "Buyer" : "Vendor",
    messageBody: body.messageBody,
  });

  return NextResponse.json({
    message: canPersist
      ? "Message saved and notification sent."
      : "Message processed in demo mode. Add Supabase keys to persist chat history.",
  });
}
