"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { categories, products, type CategoryId } from "@/data/menu";
import { ProductCard } from "@/components/shared/ProductCard";
import { cn } from "@/lib/utils";

const totalProducts = products.length;

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("hits");
  const sectionRefs = useRef<Record<CategoryId, HTMLElement | null>>({
    hits: null,
    sushi: null,
    pizza: null,
    sets: null,
  });

  const scrollToCategory = (id: CategoryId) => {
    setActiveCategory(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const category = entry.target.getAttribute("data-category") as CategoryId | null;
            if (category) setActiveCategory(category);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      id="menu-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mt-8 lg:mx-auto lg:mt-0 lg:max-w-[1280px] lg:px-8 lg:pb-8 xl:px-10"
    >
      <div className="mb-6 px-5 lg:mb-8 lg:flex lg:items-end lg:justify-between lg:px-0">
        <div>
          <p className="mb-2 text-[11px] font-600 uppercase tracking-[0.15em] text-brand-red">
            — Меню
          </p>
          <h2 className="text-[32px] leading-tight font-800 tracking-tight lg:max-w-[380px] lg:text-[56px] lg:leading-[0.95]">
            Выбери своё.
          </h2>
        </div>
        <p className="hidden max-w-[260px] text-[13px] leading-relaxed text-muted lg:block">
          {totalProducts} позиций, разбитых по категориям. Начни с хитов или сразу перейди к нужному разделу.
        </p>
      </div>

      <div className="sticky top-0 z-20 mb-4 glass px-5 py-3 lg:top-[73px] lg:mb-8 lg:rounded-full lg:border lg:border-white/6 lg:px-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={cn(
                "flex-shrink-0 cursor-pointer rounded-full px-4 py-2 text-[12px] font-600 transition-all",
                activeCategory === cat.id
                  ? "bg-brand-red text-white glow-red-sm"
                  : "border border-white/8 bg-white/5 text-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8 px-4 pb-4 lg:gap-12 lg:px-0">
        {categories.map((cat, categoryIndex) => {
          const catProducts = products.filter((p) => p.category === cat.id);

          return (
            <motion.div
              key={cat.id}
              id={cat.id === "hits" ? "hits-section" : cat.id}
              data-category={cat.id}
              ref={(el) => {
                sectionRefs.current[cat.id] = el;
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mb-3 flex items-end justify-between lg:mb-4">
                <h3 className="text-[18px] font-700 tracking-tight lg:text-[24px]">{cat.label}</h3>
                <span className="hidden text-[11px] uppercase tracking-[0.12em] text-muted-dim lg:block">
                  {catProducts.length} позиций
                </span>
              </div>
              <div className="flex flex-col gap-2.5 lg:grid lg:grid-cols-3 lg:gap-4">
                {catProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
