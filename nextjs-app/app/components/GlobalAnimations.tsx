"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { triggerAnimations } from "../hooks/useAnimations";

const GlobalAnimations = () => {
  const pathname = usePathname();
  const [hydrated, setHydrated] = useState(false);

  // ✅ Wait for Next.js to finish hydration before running animations
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHydrated(true);
    }, 100); // Small delay to ensure hydration completes

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (hydrated) {
      triggerAnimations();
    }
  }, [pathname, hydrated]); // ✅ Runs only after hydration is complete

  return null;
};

export default GlobalAnimations;
