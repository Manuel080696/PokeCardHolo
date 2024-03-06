import { CardContext } from "@/context/CardContext";
import { useContext, useEffect, useState } from "react";
import { GetAllCards } from "../services";

const useAllCards = () => {
  const { cards, setCards } = useContext(CardContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAllProduts = async () => {
      try {
        setLoading(true);
        const data = await GetAllCards();
        setCards(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadAllProduts();
  }, [setCards]);

  return { cards, setCards, loading, error };
};

export default useAllCards;
