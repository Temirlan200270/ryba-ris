import { HeroBlock } from "@/components/blocks/HeroBlock";
import { StatsBar } from "@/components/blocks/StatsBar";
import { MenuSection } from "@/components/blocks/MenuSection";
import { ReviewsBlock } from "@/components/blocks/ReviewsBlock";
import { CtaFooter } from "@/components/blocks/CtaFooter";
import { DesktopNav } from "@/components/blocks/DesktopNav";
import { MenuCategoryShowcase } from "@/components/blocks/MenuCategoryShowcase";
import { StickyCartBar } from "@/components/shared/StickyCartBar";
import { CartDrawer } from "@/components/shared/CartDrawer";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <DesktopNav />
      <HeroBlock />
      <StatsBar />
      <MenuCategoryShowcase />
      <MenuSection />
      <ReviewsBlock />
      <CtaFooter />

      <div className="h-24 lg:h-0" />

      <StickyCartBar />
      <CartDrawer />
    </main>
  );
}
