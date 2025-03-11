"use client";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animation from "@/public/lottie/job.json";

export default function JobAnimation({ className }: { className?: string }) {
  return <Lottie className={className} animationData={animation} loop={true} />;
}
