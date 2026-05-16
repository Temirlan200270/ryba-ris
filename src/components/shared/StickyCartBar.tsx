"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/lib/format";

export function StickyCartBar() {
  const { setOpen, totalItems, totalPrice } = useCartStore();
  const count = totalItems();
  const total = totalPrice();

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pt-2 pb-6 lg:right-auto lg:bottom-6 lg:left-1/2 lg:max-w-sm lg:-translate-x-1/2 lg:px-0 lg:pb-0"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setOpen(true)}
            className="mx-auto flex w-full max-w-md cursor-pointer items-center justify-between rounded-2xl bg-brand-red px-5 py-4 glow-red"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingCart size={20} className="text-white" />
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] leading-none font-800 text-brand-red">
                  {count}
                </span>
              </div>
              <span className="text-[15px] font-600 text-white">Корзина</span>
            </div>
            <span className="text-[16px] font-700 text-white">{formatPrice(total)}</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
