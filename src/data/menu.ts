export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: CategoryId;
  badge?: string;
}

export type CategoryId = "hits" | "sushi" | "pizza" | "sets";

export interface Category {
  id: CategoryId;
  label: string;
}

export const categories: Category[] = [
  { id: "hits", label: "Хиты" },
  { id: "sushi", label: "Суши" },
  { id: "pizza", label: "Пицца" },
  { id: "sets", label: "Сеты" },
];

export const products: Product[] = [
  // Хиты
  {
    id: "philadelphia",
    name: "Филадельфия",
    description: "Лосось · сыр · 8 шт",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1759646828324-c215a83828ae?fm=jpg&q=80&w=400&auto=format&fit=crop",
    category: "hits",
  },
  {
    id: "pepperoni",
    name: "Пепперони",
    description: "Острая · 32 см",
    price: 4800,
    image:
      "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?fm=jpg&q=80&w=400&auto=format&fit=crop",
    category: "hits",
  },
  {
    id: "set-premium",
    name: "Сет «Премиум»",
    description: "32 шт · лосось, тунец, угорь",
    price: 7120,
    originalPrice: 8900,
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?fm=jpg&q=80&w=400&auto=format&fit=crop",
    category: "hits",
    badge: "-20%",
  },
  // Суши
  {
    id: "california",
    name: "Калифорния",
    description: "Краб · авокадо · 8 шт",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1617196034183-421b4040ed20?fm=jpg&q=80&w=400&auto=format&fit=crop",
    category: "sushi",
  },
  {
    id: "dragon",
    name: "Дракон",
    description: "Угорь · авокадо · 8 шт",
    price: 3600,
    image:
      "https://images.unsplash.com/photo-1562802378-063ec186a863?fm=jpg&q=80&w=400&auto=format&fit=crop",
    category: "sushi",
  },
  {
    id: "spicy-tuna",
    name: "Спайси Тунец",
    description: "Тунец · огурец · острый соус · 8 шт",
    price: 3100,
    image:
      "https://images.unsplash.com/photo-1599788425564-c98dc2f70781?fm=jpg&q=80&w=400&auto=format&fit=crop",
    category: "sushi",
  },
  {
    id: "unagi",
    name: "Унаги",
    description: "Копчёный угорь · сыр · 8 шт",
    price: 3800,
    image:
      "https://images.unsplash.com/photo-1607301405390-d831c242f59b?fm=jpg&q=80&w=400&auto=format&fit=crop",
    category: "sushi",
  },
  // Пицца
  {
    id: "margarita",
    name: "Маргарита",
    description: "Томат · моцарелла · базилик · 32 см",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?fm=jpg&q=80&w=400&auto=format&fit=crop",
    category: "pizza",
  },
  {
    id: "four-cheese",
    name: "Четыре сыра",
    description: "Моцарелла · чеддер · пармезан · горгонзола · 32 см",
    price: 5200,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=80&w=400&auto=format&fit=crop",
    category: "pizza",
  },
  {
    id: "bbq-chicken",
    name: "BBQ Курица",
    description: "Курица · перец · лук · соус BBQ · 32 см",
    price: 4600,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?fm=jpg&q=80&w=400&auto=format&fit=crop",
    category: "pizza",
  },
  // Сеты
  {
    id: "set-classic",
    name: "Сет «Классик»",
    description: "16 шт · Филадельфия + Калифорния",
    price: 4900,
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?fm=jpg&q=80&w=400&auto=format&fit=crop",
    category: "sets",
  },
  {
    id: "set-family",
    name: "Сет «Семейный»",
    description: "48 шт · ассорти роллов + 2 пиццы",
    price: 14900,
    image:
      "https://images.unsplash.com/photo-1617196034096-2c1b26ec481a?fm=jpg&q=80&w=400&auto=format&fit=crop",
    category: "sets",
  },
  {
    id: "set-premium-full",
    name: "Сет «Премиум»",
    description: "32 шт · лосось, тунец, угорь",
    price: 7120,
    originalPrice: 8900,
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?fm=jpg&q=80&w=400&auto=format&fit=crop",
    category: "sets",
    badge: "-20%",
  },
];

export const reviews = [
  {
    id: "1",
    name: "Айгерим К.",
    rating: 5,
    text: "Заказываю уже третий раз! Роллы всегда свежие, доставка быстрая. Филадельфия — просто обожаю!",
    date: "2 дня назад",
  },
  {
    id: "2",
    name: "Данияр М.",
    rating: 5,
    text: "Лучшие суши в городе, без преувеличений. Сет Премиум — огонь. Доставили за 35 минут.",
    date: "5 дней назад",
  },
  {
    id: "3",
    name: "Наргиза Б.",
    rating: 5,
    text: "Пицца Пепперони — хрустящая, сырная, острая в меру. Взяла комбо с роллами, объедение!",
    date: "1 неделю назад",
  },
  {
    id: "4",
    name: "Аслан Т.",
    rating: 5,
    text: "Удобный заказ через WhatsApp, оператор ответил мгновенно. Качество на высоте, буду заказывать ещё.",
    date: "2 недели назад",
  },
];
