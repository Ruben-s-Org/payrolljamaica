"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { FilloutPopupEmbed } from "@fillout/react";

interface FilloutContextValue {
  open: () => void;
  close: () => void;
}

const FilloutContext = createContext<FilloutContextValue | null>(null);

export default function FilloutProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <FilloutContext.Provider value={value}>
      {children}
      <FilloutPopupEmbed
        filloutId="9YAcx65V79us"
        isOpen={isOpen}
        onClose={close}
        width={"900px"}
        height={"80vh"}
      />
    </FilloutContext.Provider>
  );
}

export function useFillout() {
  const ctx = useContext(FilloutContext);
  if (!ctx) throw new Error("useFillout must be used within FilloutProvider");
  return ctx;
}
