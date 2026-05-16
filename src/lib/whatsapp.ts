import type { CartItem } from "@/store/useCartStore";
import { formatPrice } from "./format";
import { WHATSAPP_NUMBER } from "./contact";

export function buildWhatsAppUrl(
  items: CartItem[],
  address: string,
  comment?: string
): string {
  const lines: string[] = ["🍣 *Новый заказ — Рыба Рис*", ""];

  items.forEach((item) => {
    lines.push(
      `• ${item.product.name} × ${item.quantity} — ${formatPrice(item.product.price * item.quantity)}`
    );
  });

  const total = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );
  lines.push("");
  lines.push(`*Итого: ${formatPrice(total)}*`);
  lines.push("");
  lines.push(`📍 Адрес: ${address}`);

  if (comment?.trim()) {
    lines.push(`💬 Комментарий: ${comment.trim()}`);
  }

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
