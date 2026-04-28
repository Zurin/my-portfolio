import { RefObject, useEffect, useState } from "react";

export default function useCurSection(
  curSectionRef: RefObject<Element | null>,
  amount: number | "all" | "some" = "all",
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = curSectionRef.current;
    const root = document.getElementById("scroll");

    if (!section || !root) return;

    const activationRatio =
      amount === "all"
        ? 0.5
        : amount === "some"
          ? 0.35
          : Math.min(Math.max(amount, 0.15), 0.6);

    const updateActiveState = () => {
      const rootRect = root.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const activationY = rootRect.top + rootRect.height * activationRatio;
      const nextIsInView =
        sectionRect.top <= activationY && sectionRect.bottom >= activationY;

      setIsInView((prev) => (prev === nextIsInView ? prev : nextIsInView));
    };

    updateActiveState();
    root.addEventListener("scroll", updateActiveState, { passive: true });
    window.addEventListener("resize", updateActiveState);

    return () => {
      root.removeEventListener("scroll", updateActiveState);
      window.removeEventListener("resize", updateActiveState);
    };
  }, [amount, curSectionRef]);

  useEffect(() => {
    const sectionId = curSectionRef.current?.id;
    const nextHash = sectionId ? `#${sectionId}` : "";

    if (isInView && nextHash && window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }, [curSectionRef, isInView]);

  return isInView;
}
