"use client";
import useCurSection from "@/hooks/use-cur-section";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import rinoridlo from "@/public/imgs/rinoridlo_mini.jpg";

export default function AboutSection() {
  const ref = useRef(null);
  useCurSection(ref, 0.1);
  return (
    <div
      ref={ref}
      id="about"
      className="w-full py-12 my-32 bg-muted text-sm md:text-base"
    >
      <h1 className="text-center text-3xl md:text-5xl mb-12">
        <span className="text-gradient-primary">{"{ "}</span>
        About Me
        <span className="text-gradient-primary">{" }"}</span>
      </h1>

      <div className="flex gap-9 items-center flex-col  w-10/12 mx-auto p-5 rounded-lg container">
        <div className="relative flex-shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary opacity-50 size-[120px] rounded-full blur-3xl"
          />
          <motion.div
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-full size-[200px] bg-gradient-primary p-0.5"
          >
            <Image
              className="size-full rounded-full grayscale hover:grayscale-0 transition-all object-cover"
              width={600}
              height={600}
              alt="about profile image"
              src={rinoridlo}
            />
          </motion.div>
        </div>

        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-xl md:text-3xl font-bold">
            <span className="text-secondary">{"< "}</span>

            <span className="text-gradient-secondary">Who am I</span>
            <span className="text-secondary">{" />"}</span>
          </h2>
          <motion.p
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, ease: "easeIn", duration: 0.5 }}
            className="text-muted-foreground text-justify"
          >
            Hey, I’m Rino Ridlo, a fullstack developer who helps businesses fix,
            optimize, scale, and build high-performance web applications. If
            your app is slow, buggy, struggling to scale, or need integrations
            to 3rd party apps—I can help.
            <br />
            <br />
            <span className="font-semibold">📌 Areas of Expertise:</span>
            <br />
            ✅ Bug Fixing – Quickly identifying and resolving bugs and UI
            glitches that affect user experience.
            <br />
            ✅ Performance Optimization – Enhancing application speed, improving
            code quality, and ensuring a seamless user experience.
            <br />
            ✅ Application Development – Designing and building fast, scalable,
            and future-proof applications.
            <br />
            ✅ Apps Integration – Seamlessly integrating external services and
            APIs to enhance functionality and improve overall application
            performance.
            <br />
            <br />
            <span className="font-semibold">📌 Why Collaborate with Me?</span>
            <br />
            🔹 Results-Oriented Approach – I prioritize tangible outcomes over
            mere code. Your web application should perform efficiently, manage
            traffic effectively, and scale seamlessly—I ensure it does.
            <br />
            🔹 Efficiency and Speed – I deliver solutions promptly, minimizing
            unnecessary delays and avoiding endless back-and-forth
            communication.
            <br />
            🔹 Proactive Problem Prevention – I don&apos;t just fix issues, I
            implement strategies to prevent them. Whether optimizing an
            application or enhancing its architecture, I focus on long-term
            stability and performance.
            <br />
            🔹 Versatile Collaboration – I excel in both individual and team
            settings, ensuring effective collaboration to achieve project goals.
            <br />
            <br />
            <span className="font-semibold">📌 Let&apos;s Connect</span>
            <br />
            If your application requires fixing, optimization, scaling, or
            development, I would love to discuss how we can work together.
            <br />
            <a href="#contact" className="text-primary hover:underline">
              ✅ Get in Touch
            </a>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
