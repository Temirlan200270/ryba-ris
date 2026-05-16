"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { QUICK_ORDER_WHATSAPP_URL } from "@/lib/contact";

const navItems = [
  { href: "#menu-section", id: "menu-section", label: "Меню" },
  { href: "#hits-section", id: "hits-section", label: "Хиты" },
  { href: "#reviews-section", id: "reviews-section", label: "Отзывы" },
  { href: "#cta-section", id: "cta-section", label: "Контакты" },
];

export function DesktopNav() {
  const [activeId, setActiveId] = useState("menu-section");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        visibleEntries
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          .slice(0, 1)
          .forEach((entry) => setActiveId(entry.target.id));
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="hidden border-b border-white/4 glass lg:sticky lg:top-0 lg:z-50 lg:block">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-4 xl:px-10">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red text-[15px] font-800 glow-red-sm">
            Р
          </div>
          <span className="text-[15px] font-700 tracking-tight">Рыба Рис</span>
        </div>

        <nav className="flex items-center rounded-full border border-white/6 bg-white/[0.03] p-1">
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-[13px] font-500 text-muted transition-colors hover:text-white"
              >
                {isActive && (
                  <motion.span
                    layoutId="desktop-nav-pill"
                    className="absolute inset-0 rounded-full border border-white/8 bg-white/8"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? "text-white" : ""}`}>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <a
          href={QUICK_ORDER_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2.5 text-[13px] font-600 text-white glow-red-sm transition-transform hover:scale-[1.02]"
        >
          <MessageCircle size={15} />
          Заказать в WhatsApp
        </a>
      </div>
    </header>
  );
}
