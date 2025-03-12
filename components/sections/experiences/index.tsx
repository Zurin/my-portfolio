"use client";
import Image from "next/image";
import React, { useRef } from "react";
import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";
import JobAnimation from "@/components/sections/experiences/experience-animation";

export default function Experiences() {
  const ref = useRef(null);
  useCurSection(ref, 0.1);
  return (
    <div ref={ref} id="experiences">
      <h1 className="text-center text-2xl md:text-4xl mt-20 mb-12">
        <span className="text-gradient-primary">{"{ "}</span>
        Experiences
        <span className="text-gradient-primary">{" }"}</span>
      </h1>
      <div className="w-full gap-12 p-12 flex justify-between text-center flex-col items-center xl:flex-row xl:items-stretch my-18 text-sm md:text-base container overflow-hidden">
        <div>
          <div className="sticky top-8 text-center md:text-left">
            {/* grid image behind */}
            <Image
              className="absolute -top-2 -left-5 -z-10 text-transparent opacity-30 w-full h-1/2 object-cover"
              src="/svgs/grid.svg"
              alt="grid image"
              width={0}
              height={0}
            />
            <JobAnimation className="w-[400px] scale-y-100 mx-auto md:mx-0" />
            <p className="w-[400px] text-muted-foreground">
              Joining forces with cross-functional teams to deliver high-quality
              products.
            </p>
          </div>
        </div>
        <div className="space-y-8 md:space-y-12">
          <div className="-full max-w-screen-md mx-auto rounded-2xl bg-muted border top-8 overflow-hidden">
            <div className="px-12 py-12 w-full">
              <ul role="list" className="-mb-8">
                {data.experiences.map((experience, index) => (
                  <li key={experience.id}>
                    <div className="relative pb-8">
                      {index !== data.experiences.length - 1 && (
                        <span
                          className="absolute left-5 top-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                      )}
                      <div className="relative flex space-x-6">
                        <div>
                          <span className="h-10 w-10 rounded-full bg-white flex items-center justify-center ring-8 ring-white">
                            <Image
                              src={experience.img}
                              alt="Linkbot"
                              width={20}
                              height={20}
                              className="h-8 w-8 text-white"
                            />
                          </span>
                        </div>
                        <div className="flex min-w-0 flex-1 justify-between pt-2.5">
                          <div>
                            <p className="text-sm text-gray-400">
                              {experience.position}
                              <span className="text-gray-300"> at </span>
                              <a
                                href={experience.website}
                                target="_blank"
                                className="font-medium text-primary hover:underline"
                              >
                                {experience.company}
                              </a>
                            </p>
                          </div>
                          <div className="whitespace-nowrap ml-5 sm:ml-12 md:ml-24 text-right text-sm text-gray-500">
                            <p>{experience.period}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
