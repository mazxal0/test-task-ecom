import {Item} from "../types";

export function GetAllItems(): Item[] {

  const items: Item[] = [
    {
      id: 1,
      title: "Смарт‑часы X100",
      price: 7490,
      category: "аджеты",
      image: "https://example.com/img/1.jpg",
      description: "Водонепроницаемые, GPS, 7‑дневный аккумулятор",
    }
  ]

  return items
}
