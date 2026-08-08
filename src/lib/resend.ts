import { Resend } from "resend";

export type OrderNotificationPayload = {
  orderId: string;
  productName: string;
  quantity: number;
  placement: string;
  customDesign: boolean;
  buyerName: string;
  buyerEmail: string;
  shippingAddress: string;
  vendorEmail?: string | null;
};

export type MessageNotificationPayload = {
  orderId: string;
  recipientEmail: string;
  senderLabel: string;
  messageBody: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const emailFrom = process.env.RESEND_FROM_EMAIL;

function getResendClient() {
  if (!resendApiKey || !emailFrom) {
    return null;
  }

  return {
    client: new Resend(resendApiKey),
    from: emailFrom,
  };
}

export async function sendOrderNotifications(payload: OrderNotificationPayload) {
  const resend = getResendClient();

  if (!resend) {
    return { delivered: false, reason: "Resend is not configured." };
  }

  const buyerSubject = `Order received: ${payload.orderId}`;
  const vendorSubject = `New pending order: ${payload.orderId}`;

  await resend.client.emails.send({
    from: resend.from,
    to: payload.buyerEmail,
    subject: buyerSubject,
    text: [
      `Thanks for your order ${payload.orderId}.`,
      `${payload.productName} x ${payload.quantity}`,
      `Logo placement: ${payload.placement}`,
      `Custom design: ${payload.customDesign ? "Yes" : "No"}`,
      "We will keep you updated through the order chat if any extra information is needed.",
    ].join("\n"),
  });

  if (payload.vendorEmail) {
    await resend.client.emails.send({
      from: resend.from,
      to: payload.vendorEmail,
      subject: vendorSubject,
      text: [
        `New branded packaging order ${payload.orderId}.`,
        `${payload.productName} x ${payload.quantity}`,
        `Logo placement: ${payload.placement}`,
        `Custom design: ${payload.customDesign ? "Yes" : "No"}`,
        `Ship to: ${payload.buyerName}, ${payload.shippingAddress}`,
      ].join("\n"),
    });
  }

  return { delivered: true };
}

export async function sendMessageNotification(payload: MessageNotificationPayload) {
  const resend = getResendClient();

  if (!resend) {
    return { delivered: false, reason: "Resend is not configured." };
  }

  await resend.client.emails.send({
    from: resend.from,
    to: payload.recipientEmail,
    subject: `New order chat message for ${payload.orderId}`,
    text: [`${payload.senderLabel} sent a new message:`, payload.messageBody].join("\n\n"),
  });

  return { delivered: true };
}
