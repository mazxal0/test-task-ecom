import {Item} from "../types";

export function GetAllItems(): Item[] {

  const items: Item[] = [
    {
      id: 1,
      title: "Смарт‑часы X100",
      price: 7490,
      category: "Гаджеты",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4XX1VOBRmOOktqJmi1t0NivshKylBF4pWQ&s",
      description: "Водонепроницаемые, GPS, 7‑дневный аккумулятор",
    }
  ]

  return items
}
