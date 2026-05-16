"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/data/menu";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={12} className="fill-brand-red text-brand-red" />
      ))}
    </div>
  );
}

export function ReviewsBlock() {
  return (
    <motion.section
      id="reviews-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative mt-10 px-5 lg:mx-auto lg:mt-24 lg:max-w-[1280px] lg:px-8 xl:px-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-12 hidden h-40 bg-[radial-gradient(circle,rgba(255,45,45,0.12)_0%,transparent_68%)] lg:block" />

      <p className="relative mb-2 text-[11px] font-600 uppercase tracking-[0.15em] text-brand-red">
        — Отзывы
      </p>
      <h2 className="relative mb-2 text-[28px] font-800 tracking-tight lg:mb-3 lg:text-center lg:text-[56px] lg:leading-[0.95]">
        Нас любят.
      </h2>
      <p className="relative hidden text-center text-[14px] text-muted lg:block lg:mb-10">
        4.9 на основе 12 000+ заказов
      </p>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none lg:hidden">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="w-[260px] flex-shrink-0 rounded-2xl border border-white/5 bg-surface p-4"
          >
            <div className="mb-2 flex items-center justify-between">
              <StarRating rating={review.rating} />
              <span className="text-[10px] text-muted-dim">{review.date}</span>
            </div>
            <p className="mb-3 text-[13px] leading-relaxed text-white/90">{review.text}</p>
            <p className="text-[12px] font-600 text-muted">{review.name}</p>
          </div>
        ))}
      </div>

      <div className="hidden grid-cols-3 gap-4 lg:grid">
        {reviews.slice(0, 3).map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="desktop-card-hover rounded-[24px] border border-white/6 bg-white/[0.04] p-6 backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <StarRating rating={review.rating} />
              <span className="text-[10px] text-muted-dim">{review.date}</span>
            </div>
            <p className="mb-6 text-[14px] leading-relaxed text-white/90">{review.text}</p>
            <p className="text-[13px] font-600 text-muted">{review.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
