"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const triggerAnimations = () => {
  // ✅ Ensure all elements are visible before animating
  gsap.set(".anim", { visibility: "visible", opacity: 1 });

  // ✅ Scroll-triggered animations with a sophisticated fade-in + slight upward movement
  gsap.utils.toArray(".anim").forEach((el: any) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 20, // Slight upward motion for elegance
      },
      {
        opacity: 1,
        y: 0,
        duration: 1, // Smooth timing
        ease: "power2.out", // Sophisticated, natural motion
        stagger: 0.15, // Delayed effect for a clean transition
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // Animates when it's almost in view
          toggleActions: "play none none none",
          once: true, // Runs only once per page load
        },
      }
    );
  });

  // ✅ Refresh ScrollTrigger after rendering
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
};
