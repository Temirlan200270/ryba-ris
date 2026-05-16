"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/lib/format";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CartDrawer() {
  const {
    items,
    isOpen,
    setOpen,
    address,
    comment,
    setAddress,
    setComment,
    updateQuantity,
    totalPrice,
  } = useCartStore();

  const total = totalPrice();

  const handleOrder = () => {
    if (!address.trim()) return;
    const url = buildWhatsAppUrl(items, address, comment);
    window.open(url, "_blank");
  };

  return (
    <Drawer open={isOpen} onOpenChange={setOpen}>
      <DrawerContent className="bg-surface border-white/5 rounded-t-[32px] max-h-[90dvh]">
        <DrawerHeader className="pb-0">
          <DrawerTitle className="text-[18px] font-700 text-left">
            Ваш заказ
          </DrawerTitle>
        </DrawerHeader>

        <div className="flex flex-col px-4 pb-6 overflow-y-auto">
          {/* Items list */}
          <div className="flex flex-col gap-2 mt-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3 items-center p-3 bg-background rounded-xl border border-white/5"
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-600 truncate">{item.product.name}</p>
                  <p className="text-[12px] text-muted mt-0.5">
                    {formatPrice(item.product.price)}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-full bg-surface-elevated border border-white/10 flex items-center justify-center cursor-pointer"
                  >
                    {item.quantity === 1 ? (
                      <Trash2 size={11} className="text-muted" />
                    ) : (
                      <Minus size={12} strokeWidth={2.5} />
                    )}
                  </motion.button>
                  <span className="text-[14px] font-700 w-4 text-center">{item.quantity}</span>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-7 h-7 rounded-full bg-brand-red flex items-center justify-center cursor-pointer"
                  >
                    <Plus size={12} strokeWidth={2.5} />
                  </motion.button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mt-4 py-3 border-t border-white/8">
            <span className="text-[14px] text-muted">Итого</span>
            <span className="text-[18px] font-700">{formatPrice(total)}</span>
          </div>

          {/* Address */}
          <div className="mt-2 flex flex-col gap-2">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Адрес доставки *"
              className="w-full px-4 py-3.5 bg-background border border-white/8 rounded-xl text-[14px] placeholder:text-muted-dim outline-none focus:border-brand-red/50 transition-colors"
            />
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Комментарий (необязательно)"
              className="w-full px-4 py-3.5 bg-background border border-white/8 rounded-xl text-[14px] placeholder:text-muted-dim outline-none focus:border-brand-red/50 transition-colors"
            />
          </div>

          {/* WhatsApp button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleOrder}
            disabled={!address.trim()}
            className="mt-4 w-full flex items-center justify-center gap-2.5 py-4 bg-brand-red rounded-full text-[16px] font-600 text-white glow-red cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
          >
            <MessageCircle size={20} />
            Оформить в WhatsApp
          </motion.button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
