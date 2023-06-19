"use client";
import React, { createContext, useState } from "react";

const LoaderContext = createContext();

function LoaderProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LoaderContext.Provider
      value={{
        isLoaded,
        setIsLoaded,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}

export { LoaderProvider, LoaderContext };
