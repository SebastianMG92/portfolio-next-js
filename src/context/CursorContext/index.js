"use client";
import React, { createContext, useState } from "react";

const CursorContext = createContext();
const SUPPORTED_CURSORS = [null, "scroll", "link", "white"];

function CursorProvider({ children }) {
  const [cursor, setCursor] = useState([]);

  const showCursor = (cursorType) => {
    if (
      !SUPPORTED_CURSORS.includes(cursorType) ||
      cursor.includes(cursorType) ||
      !cursorType
    )
      return null;

    setCursor((prev) => [...prev, cursorType]);
  };

  const removeCursor = (cursorType) => {
    setCursor((prev) => {
      const statesFiltered = prev.filter((state) => state !== cursorType);
      return statesFiltered;
    });
  };

  return (
    <CursorContext.Provider
      value={{
        cursor,
        showCursor,
        removeCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export { CursorProvider, CursorContext };
