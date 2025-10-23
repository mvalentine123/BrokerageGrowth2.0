"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CalendarContextType {
  isOpen: boolean;
  openCalendar: () => void;
  closeCalendar: () => void;
}

const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined,
);

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
};

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendar = () => setIsOpen(true);
  const closeCalendar = () => setIsOpen(false);

  return (
    <CalendarContext.Provider value={{ isOpen, openCalendar, closeCalendar }}>
      {children}
    </CalendarContext.Provider>
  );
};
