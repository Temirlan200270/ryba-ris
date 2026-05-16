"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { QUICK_ORDER_WHATSAPP_URL } from "@/lib/contact";

const textTransition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

export function HeroBlock() {
  const scrollToMenu = () => {
    document.getElementById("menu-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden px-5 pt-14 pb-8 lg:grid lg:min-h-[calc(100dvh-73px)] lg:grid-cols-[minmax(0,1fr)_minmax(460px,46vw)] lg:items-center lg:gap-8 lg:px-0 lg:pt-0 lg:pb-0">
      <div className="pointer-events-none absolute top-[-80px] right-[-80px] h-[280px] w-[280px] bg-[radial-gradient(circle,rgba(255,45,45,0.35)_0%,transparent_70%)] lg:top-[-120px] lg:right-[18%] lg:h-[420px] lg:w-[420px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-40px] h-[200px] w-[200px] bg-[radial-gradient(circle,rgba(217,4,41,0.18)_0%,transparent_70%)] lg:bottom-[-50px] lg:left-[6%] lg:h-[260px] lg:w-[260px]" />

      <div className="relative mb-12 flex items-center justify-between lg:hidden">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-red text-[14px] font-800 glow-red-sm">
            Р
          </div>
          <span className="text-[15px] font-600 tracking-tight">Рыба Рис</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00C853] shadow-[0_0_6px_#00C853]" />
          <span className="font-600 text-[#00C853]">Открыто</span>
          <span className="text-muted">· 40 мин</span>
        </div>
      </div>

      <div className="relative z-10 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={textTransition}
          className="lg:max-w-[560px]"
        >
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-brand-red/25 bg-brand-red/10 px-3 py-1.5 text-[11px] font-500 uppercase tracking-wide text-brand-red/80">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red shadow-[0_0_6px_#ff2d2d]" />
            Доставка · 40 минут
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 0.08 }}
            className="mb-4 text-[52px] font-800 leading-[0.95] tracking-[-0.05em] lg:text-[94px] lg:leading-[0.88]"
            style={{
              background: "linear-gradient(180deg, #fff 0%, #818181 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            РЫБА
            <br />
            РИС.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 0.14 }}
            className="mb-2 text-[18px] font-500 tracking-tight text-white lg:text-[20px]"
          >
            Суши · Пицца · Сеты
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 0.18 }}
            className="mb-8 max-w-[340px] text-[14px] leading-relaxed text-muted lg:max-w-[360px] lg:text-[15px]"
          >
            Свежие роллы и горячая пицца с доставкой по городу. Вкус, который приезжает быстро и выглядит как повод собраться.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 0.24 }}
            className="flex flex-col gap-3 lg:flex-row lg:gap-3"
          >
            <motion.a
              href={QUICK_ORDER_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              whileHover={{ y: -1 }}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-red py-[18px] text-[16px] font-600 text-white glow-red lg:w-auto lg:px-7"
            >
              <MessageCircle size={20} />
              Заказать в WhatsApp
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ y: -1 }}
              onClick={scrollToMenu}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/8 bg-white/4 py-4 text-[15px] font-500 text-white backdrop-blur-xl lg:w-auto lg:px-6"
            >
              Смотреть меню
              <ChevronDown size={16} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 0.32 }}
            className="hidden lg:flex lg:items-center lg:gap-6 lg:pt-10"
          >
            <div className="text-center">
              <p className="text-[24px] font-700 leading-none">
                40<span className="ml-1 text-[13px] font-500 text-muted">мин</span>
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-muted-dim">Доставка</p>
            </div>
            <div className="h-10 w-px bg-white/8" />
            <div className="text-center">
              <p className="text-[24px] font-700 leading-none">
                4.9<span className="ml-1 text-[13px] font-500 text-brand-red">★</span>
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-muted-dim">Рейтинг</p>
            </div>
            <div className="h-10 w-px bg-white/8" />
            <div className="text-center">
              <p className="text-[24px] font-700 leading-none">12k+</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-muted-dim">Клиентов</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 28, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-10 hidden lg:block lg:h-full lg:pr-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:py-8"
      >
        <div className="relative h-full min-h-[620px] overflow-hidden rounded-[34px] shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(255,45,45,0.15)]">
          <Image
            src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?fm=jpg&q=80&w=1200&auto=format&fit=crop"
            alt="Сет и роллы"
            fill
            priority
            className="object-cover"
            sizes="46vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.05)_0%,rgba(5,5,5,0.12)_30%,rgba(5,5,5,0.72)_100%)]" />
        </div>

        <div className="absolute top-12 right-0 flex items-center gap-2 rounded-full border border-white/8 bg-black/72 px-4 py-2.5 text-[11px] font-500 uppercase tracking-[0.06em] shadow-[0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-[#00C853] shadow-[0_0_8px_#00C853]" />
          Свежий улов
        </div>

        <div className="absolute right-8 bottom-8 left-8 max-w-[290px] rounded-2xl border border-white/6 bg-black/58 p-5 backdrop-blur-2xl">
          <div className="mb-1 text-[11px] font-600 uppercase tracking-[0.08em] text-brand-red/80">
            Спецпредложение
          </div>
          <div className="text-[16px] font-600 leading-[1.25]">Сет «Премиум» −20%</div>
        </div>
      </motion.div>
    </section>
  );
}
