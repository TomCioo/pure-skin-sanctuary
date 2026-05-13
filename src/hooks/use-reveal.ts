import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
