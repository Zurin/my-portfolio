"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useHash() {
  const [hash, setHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const syncHash = () => {
      setHash(window.location.hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
    };
  }, [pathname]);

  return { hash };
}
