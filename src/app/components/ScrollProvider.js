"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const [isNavbarbg, setNavbarBg] = useState(false);
  const [isFontColor, setFontColor] = useState(false);

  return (
    <ScrollContext.Provider
      value={{ isNavbarbg, setNavbarBg, isFontColor, setFontColor }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrolling() {
  return useContext(ScrollContext);
}
