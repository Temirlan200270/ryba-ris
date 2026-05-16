"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import type { Product } from "@/data/menu";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { items, addItem, updateQuantity } = useCartStore();
  const cartItem = items.find((i) => i.product.id === product.id);
  const qty = cartItem?.quantity ?? 0;

  return (
    <div className="desktop-card-hover flex gap-3 rounded-2xl border border-white/5 bg-surface p-3 lg:flex-col lg:gap-0 lg:overflow-hidden lg:p-0 lg:hover:border-brand-red/30 lg:hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
      <div className="relative h-[72px] w-[72px] flex-shrink-0 overflow-hidden rounded-xl lg:h-auto lg:w-full lg:rounded-none lg:aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 24vw, 72px"
        />
        {product.badge && (
          <div className="absolute top-1 left-1 rounded-md bg-brand-red px-1.5 py-0.5 text-[9px] leading-none font-bold text-white lg:top-3 lg:left-3 lg:rounded-full lg:px-2.5 lg:py-1">
            {product.badge}
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between lg:p-4">
        <div>
          <p className="truncate text-[13px] leading-tight font-600 lg:text-[15px]">
            {product.name}
          </p>
          <p className="mt-0.5 truncate text-[11px] text-muted-dim lg:text-[12px]">
            {product.description}
          </p>
        </div>

        <div className="mt-1 flex items-center justify-between lg:mt-4">
          <div>
            <span className="text-[15px] font-700 text-white lg:text-[18px]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="ml-1.5 text-[11px] text-muted-dim line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {qty === 0 ? (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => addItem(product)}
              className={cn(
                "flex cursor-pointer items-center gap-1 rounded-full bg-brand-red px-3 py-1.5 text-[12px] font-600 text-white",
                "glow-red-sm transition-shadow lg:h-8 lg:w-8 lg:justify-center lg:px-0 lg:py-0 lg:hover:scale-110"
              )}
            >
              <Plus size={12} strokeWidth={2.5} />
              <span className="lg:hidden">В корзину</span>
            </motion.button>
          ) : (
            <div className="flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => updateQuantity(product.id, qty - 1)}
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-surface-elevated"
              >
                <Minus size={12} strokeWidth={2.5} />
              </motion.button>
              <span className="w-4 text-center text-[14px] font-700">{qty}</span>
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => addItem(product)}
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-brand-red glow-red-sm lg:h-8 lg:w-8"
              >
                <Plus size={12} strokeWidth={2.5} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
