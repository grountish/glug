"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { triggerAnimations } from "../hooks/useAnimations";

const GlobalAnimations = () => {
  const pathname = usePathname();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHydrated(true);
    }, 50);
  }, []);

  useEffect(() => {
    if (hydrated) {
      triggerAnimations();
    }
  }, [pathname, hydrated]);

  return null;
};

export default GlobalAnimations;
