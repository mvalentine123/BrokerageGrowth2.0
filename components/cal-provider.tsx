"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export const CalProvider = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "zoom" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#204156" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return null;
};
