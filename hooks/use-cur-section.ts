import { useInView } from "framer-motion";
import { RefObject, useEffect } from "react";

export default function useCurSection(
  curSectionRef: RefObject<Element | null>,
  amount: number | "all" | "some" = "all",
) {
  const root =
    typeof document === "undefined"
      ? undefined
      : document.getElementById("scroll") || undefined;
  const isInView = useInView(curSectionRef, {
    amount,
    root,
  });

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
