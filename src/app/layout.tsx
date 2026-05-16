import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Рыба Рис — Суши · Пицца · Сеты",
  description:
    "Доставка свежих суши, роллов и горячей пиццы по городу. Рейтинг 4.9 ★. Доставка за 40 минут.",
  openGraph: {
    title: "Рыба Рис — Суши · Пицца · Сеты",
    description: "Доставка свежих суши и пиццы. Рейтинг 4.9 ★.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
