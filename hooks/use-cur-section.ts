import { useInView } from "framer-motion";
import { RefObject, useEffect } from "react";

export default function useCurSection(
  curSectionRef: RefObject<Element | null>,
  amount: number | "all" | "some" = "all",
) {
  const isInView = useInView(curSectionRef, { amount });

  useEffect(() => {
    const timeout = setTimeout(() => {
      const sectionId = curSectionRef.current?.id;
      const nextHash = sectionId ? `#${sectionId}` : "";

      if (isInView && nextHash && window.location.hash !== nextHash) {
        window.history.replaceState(null, "", nextHash);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [curSectionRef, isInView]);

  return isInView;
}
