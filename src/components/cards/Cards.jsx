"use client";

import { Card } from "../card/Card";
import "./Cards.css";
import useAllCards from "@/hooks/useAllCards";

export const Cards = () => {
  const { cards } = useAllCards();

  // Función para agrupar las cartas por rareza
  const groupCardsByRarity = (cards) => {
    const grouped = {};
    cards?.data.forEach((card) => {
      const rarity = card.rarity || "Unknown";
      if (!grouped[rarity]) {
        grouped[rarity] = { rarity, cards: [] };
      }
      grouped[rarity].cards.push(card);
    });

    return Object.values(grouped);
  };

  // Agrupar las cartas por rareza
  const groupedCards = groupCardsByRarity(cards);

  return (
    <section className="flex items-center justify-center">
      <ul className="cards-list mt-5 w-full">
        {groupedCards.map((group) => (
          <li key={group.rarity} className={`${group.rarity}`}>
            <h2 className="text-center text-4xl font-bold text-white">
              {group.rarity}
            </h2>
            <hr className="w-full h-px bg-gray-200 " />
            <ul className="flex flex-row items-center justify-center gap-9 py-6  bg-gray-800/50 w-full">
              {group.cards.map((card) => (
                <Card card={card} key={card.name} rarity={card.rarity} />
              ))}
            </ul>
            <hr className="w-full h-px bg-gray-200 mb-9" />
          </li>
        ))}
      </ul>
    </section>
  );
};
