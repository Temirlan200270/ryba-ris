export function StatsBar() {
  return (
    <div className="flex items-center gap-4 overflow-x-auto px-5 py-4 scrollbar-none lg:hidden">
      <div className="flex-shrink-0 text-center">
        <p className="text-[22px] leading-none font-700">
          40<span className="ml-0.5 text-[14px] text-muted">мин</span>
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-dim">Доставка</p>
      </div>

      <div className="h-8 w-px flex-shrink-0 bg-white/8" />

      <div className="flex-shrink-0 text-center">
        <p className="text-[22px] leading-none font-700">
          4.9<span className="ml-0.5 text-[14px] text-brand-red">★</span>
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-dim">Рейтинг</p>
      </div>

      <div className="h-8 w-px flex-shrink-0 bg-white/8" />

      <div className="flex-shrink-0 text-center">
        <p className="text-[22px] leading-none font-700">12k+</p>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-dim">Клиентов</p>
      </div>
    </div>
  );
}
