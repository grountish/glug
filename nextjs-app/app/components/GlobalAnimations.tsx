"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { triggerAnimations } from "../hooks/useAnimations";

const GlobalAnimations = () => {
  const pathname = usePathname();
  const [hydrated, setHydrated] = useState(false);

  // ✅ Wait until Next.js has fully hydrated to avoid flashing
  useEffect(() => {
    setTimeout(() => {
      setHydrated(true);
    }, 50); // Small delay to allow content to fully load
  }, []);

  useEffect(() => {
    if (hydrated) {
      triggerAnimations(); // ✅ Start animations only after hydration
    }
  }, [pathname, hydrated]); // ✅ Runs only after hydration is complete

  return null;
};

export default GlobalAnimations;
