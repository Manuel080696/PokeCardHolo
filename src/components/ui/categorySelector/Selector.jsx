/* "use client";
import { CardContext } from "@/context/CardContext";
import useAllCards from "@/hooks/useAllCards";
import { GetAllCards } from "../../../services";
import { useContext } from "react";

export const Selector = () => {
  const { setCards } = useContext(CardContext);
  const { currentPage, setCurrentPage } = useAllCards();

  const handleCategoryChange = async (category) => {
    try {
      const categoryQuery =
        category === "All" ? "q=rarity:" : `q=rarity:${category}`;

      // Primero, actualiza las categorías de forma asíncrona
      await setCategories(categoryQuery);

      // Luego, obtén las cartas después de que las categorías se hayan actualizado
      const data = await GetAllCards(currentPage, categoryQuery);

      // Finalmente, actualiza las cartas
      setCards(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="flex-col items-center justify-center">
      <select
        className="select select-bordered w-full max-w-xs mb-5"
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <option value="*">All</option>
        <option value="Common">Common</option>
        <option value="Rare*Holo">Rare Holo</option>
        <option value="Rare*Holo*GX">Rare Holo GX</option>
      </select>
      <div className="join flex-row w-full items-center justify-center mb-5">
        <button
          className="join-item btn"
          onClick={() =>
            setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)
          }
        >
          «
        </button>
        <button className="join-item btn">{currentPage}</button>
        <button
          className="join-item btn"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          »
        </button>
      </div>
    </section>
  );
};
 */
