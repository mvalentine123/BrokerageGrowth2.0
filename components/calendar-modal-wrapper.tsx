"use client";

import { CalendarModal } from "./calendar-modal";
import { useCalendar } from "@/context/calendar-context";

export const CalendarModalWrapper = () => {
  const { isOpen, closeCalendar } = useCalendar();
  return <CalendarModal isOpen={isOpen} onClose={closeCalendar} />;
};
