"use client";

import { useState, createContext } from "react";

export const CardContext = createContext();

export const CardProviderComponent = ({ children }) => {
  const [cards, setCards] = useState();

  return (
    <CardContext.Provider
      value={{
        cards,
        setCards,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
