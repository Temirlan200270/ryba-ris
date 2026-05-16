"use client";

import { motion } from "framer-motion";
import { Clock3, MapPinned, MessageCircle, Phone } from "lucide-react";
import { PHONE_URL, QUICK_ORDER_WHATSAPP_URL } from "@/lib/contact";

export function CtaFooter() {
  return (
    <>
      <motion.section
        id="cta-section"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-12 mx-4 mb-4 overflow-hidden rounded-3xl border border-white/5 bg-surface p-6 lg:mx-auto lg:mb-8 lg:grid lg:max-w-[1280px] lg:grid-cols-[1.3fr_1fr] lg:gap-8 lg:rounded-[32px] lg:border-brand-red/20 lg:bg-gradient-to-br lg:from-[#1a0505] lg:to-[#0a0202] lg:px-12 lg:py-14 xl:px-14"
      >
        <div className="pointer-events-none absolute top-0 right-0 h-[180px] w-[180px] bg-[radial-gradient(circle,rgba(255,45,45,0.2)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute bottom-[-80px] left-[-40px] hidden h-[220px] w-[220px] bg-[radial-gradient(circle,rgba(255,45,45,0.16)_0%,transparent_70%)] lg:block" />

        <div className="relative">
          <p className="mb-2 text-[11px] font-600 uppercase tracking-[0.15em] text-brand-red">
            — Готовы заказать?
          </p>
          <h2 className="mb-2 text-[32px] leading-tight font-800 tracking-tight lg:text-[56px] lg:leading-[0.95]">
            Голоден?
          </h2>
          <p className="mb-6 max-w-[420px] text-[14px] text-muted">
            Оформите заказ в WhatsApp за 30 секунд. Быстрый ответ, понятный состав и доставка по городу без лишних шагов.
          </p>

          <div className="flex flex-col gap-2.5 lg:flex-row lg:gap-3">
            <motion.a
              href={QUICK_ORDER_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              whileHover={{ y: -1 }}
              className="flex items-center justify-center gap-2.5 rounded-full bg-brand-red py-4 text-[15px] font-600 text-white glow-red lg:px-7"
            >
              <MessageCircle size={18} />
              Заказать в WhatsApp
            </motion.a>

            <motion.a
              href={PHONE_URL}
              whileTap={{ scale: 0.97 }}
              whileHover={{ y: -1 }}
              className="flex items-center justify-center gap-2 rounded-full border border-white/8 bg-white/4 py-3.5 text-[15px] font-500 text-white lg:px-6"
            >
              <Phone size={16} />
              Позвонить
            </motion.a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="desktop-card-hover flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.04] p-4 backdrop-blur-xl"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red/12 text-brand-red">
              <Clock3 size={18} />
            </div>
            <div>
              <div className="text-[15px] font-600">10:00 — 23:00</div>
              <div className="text-[12px] text-muted">Каждый день</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="desktop-card-hover flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.04] p-4 backdrop-blur-xl"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red/12 text-brand-red">
              <MapPinned size={18} />
            </div>
            <div>
              <div className="text-[15px] font-600">Бесплатно от 5 000 ₸</div>
              <div className="text-[12px] text-muted">По городу · 40 мин</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <footer className="px-5 pb-8 pt-2 text-center lg:mx-auto lg:flex lg:max-w-[1280px] lg:items-center lg:justify-between lg:px-16 lg:text-left">
        <div className="mb-3 flex items-center justify-center gap-2 lg:mb-0 lg:justify-start">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-red text-[12px] font-800">
            Р
          </div>
          <div>
            <span className="text-[14px] font-600">Рыба Рис</span>
            <p className="hidden text-[11px] text-muted-dim lg:mt-1 lg:block">© 2025</p>
          </div>
        </div>
        <p className="text-[12px] text-muted-dim lg:hidden">Суши · Пицца · Сеты</p>
        <p className="mt-2 text-[11px] text-muted-dim/60 lg:hidden">© 2025 Рыба Рис</p>
        <div className="hidden items-center gap-6 text-[13px] text-muted lg:flex">
          <span>Instagram</span>
          <span>Telegram</span>
          <span>2GIS</span>
        </div>
      </footer>
    </>
  );
}
