"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Flame } from "lucide-react";

type CardProps = {
  title: string;
  subtitle: string;
  badge: string;
  image?: string;
  targetId: string;
  className: string;
  titleClassName: string;
};

function scrollToSection(targetId: string) {
  document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ShowcaseImageCard({
  title,
  subtitle,
  badge,
  image,
  targetId,
  className,
  titleClassName,
}: CardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => scrollToSection(targetId)}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`desktop-card-hover group relative w-full overflow-hidden rounded-3xl border border-white/8 text-left ${className}`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(5,5,5,0.95)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,45,45,0.22)_0%,transparent_52%)]" />
        </>
      )}

      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-full border border-white/12 bg-black/30 px-3 py-1 text-[10px] font-600 uppercase tracking-[0.12em] text-white/75 backdrop-blur-xl">
            {badge}
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 backdrop-blur-xl transition-colors group-hover:border-brand-red/40">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div>
          <h3 className={`${titleClassName} leading-none font-800 tracking-[-0.03em]`}>{title}</h3>
          <p className="mt-2 text-[13px] text-muted">{subtitle}</p>
        </div>
      </div>
    </motion.button>
  );
}

export function MenuCategoryShowcase() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:mx-auto lg:block lg:max-w-[1280px] lg:px-8 lg:py-16 xl:px-10"
    >
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 text-[11px] font-600 uppercase tracking-[0.15em] text-brand-red">
            — Выбор по настроению
          </p>
          <h2 className="text-[36px] font-800 leading-[0.95] tracking-[-0.035em]">
            Сначала категория.
            <br />
            Потом конкретный вкус.
          </h2>
        </div>
        <p className="max-w-[260px] text-right text-[13px] leading-relaxed text-muted">
          Крупные входы в меню помогают быстро перейти к суши, пицце или сетам без лишнего скролла.
        </p>
      </div>

      <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-4">
        <ShowcaseImageCard
          title="Суши"
          subtitle="от 1 200 ₸"
          badge="12 видов"
          image="https://images.unsplash.com/photo-1617196034183-421b4040ed20?fm=jpg&q=80&w=600&auto=format&fit=crop"
          targetId="sushi"
          className="aspect-[3/4]"
          titleClassName="text-[40px]"
        />

        <div className="flex flex-col gap-4">
          <ShowcaseImageCard
            title="Пицца"
            subtitle="от 2 400 ₸"
            badge="8 видов"
            image="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?fm=jpg&q=80&w=600&auto=format&fit=crop"
            targetId="pizza"
            className="aspect-[4/3]"
            titleClassName="text-[28px]"
          />

          <motion.button
            type="button"
            onClick={() => scrollToSection("hits-section")}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="desktop-card-hover relative aspect-[4/3] overflow-hidden rounded-3xl border border-brand-red/20 bg-[linear-gradient(135deg,#1a0505_0%,#050505_100%)] p-5 text-left"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,45,45,0.3)_0%,transparent_60%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <Flame size={24} className="text-brand-red" />
                <div className="mt-3 text-[11px] font-600 uppercase tracking-[0.1em] text-brand-red/80">
                  Что взять?
                </div>
              </div>
              <div>
                <h3 className="text-[20px] leading-[1.1] font-700 tracking-[-0.02em]">
                  Подобрать набор
                </h3>
                <p className="mt-1 text-[11px] text-muted">Для одного · пары · компании</p>
                <div className="mt-4 inline-flex items-center gap-2 text-[12px] font-600 text-white">
                  Смотреть хиты
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </motion.button>
        </div>

        <ShowcaseImageCard
          title="Сеты"
          subtitle="от 4 900 ₸"
          badge="6 сетов"
          image="https://images.unsplash.com/photo-1611143669185-af224c5e3252?fm=jpg&q=80&w=600&auto=format&fit=crop"
          targetId="sets"
          className="aspect-[3/4]"
          titleClassName="text-[40px]"
        />
      </div>
    </motion.section>
  );
}
