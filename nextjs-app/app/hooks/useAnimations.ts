"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const triggerAnimations = () => {
  // ✅ Wait for the page to fully render before applying animations
  requestAnimationFrame(() => {
    // ✅ Remove pre-hide styling immediately before animation starts
    gsap.set(".anim", { visibility: "visible" });

    // ✅ Apply a smooth fade-in animation
    gsap.utils.toArray<HTMLElement>(".anim").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 }, // Ensure element starts fully hidden
        {
          opacity: 1,
          y: 0,
          duration: 1.2, // Slightly longer for smooth effect
          ease: "power2.out",
          stagger: 0.15, // Delayed effect for a clean transition
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Reveal at the right time
            toggleActions: "play none none none",
            once: true, // ✅ Runs only once per page load
          },
        }
      );
    });

    // ✅ Ensure GSAP refreshes animations after everything loads
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 700);
  });
};
