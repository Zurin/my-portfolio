"use client";
import useHash from "@/hooks/use-hash";
import { cn } from "@/lib/utils";
import {
  GalleryVerticalEnd,
  Home,
  LucideSend,
  User,
  BriefcaseBusiness,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const navItems = [
  {
    id: "navItem1",
    name: "Home.tsx",
    path: "#home",
    icon: Home,
  },
  {
    id: "navItem2",
    name: "About.tsx",
    path: "#about",
    icon: User,
  },
  {
    id: "navItem3",
    name: "Projects.tsx",
    path: "#projects",
    icon: GalleryVerticalEnd,
  },
  {
    id: "navItem4",
    name: "Experiences.tsx",
    path: "#experiences",
    icon: BriefcaseBusiness,
  },
  {
    id: "navItem5",
    name: "Contact-Me.tsx",
    path: "#contact",
    icon: LucideSend,
    isRight: false,
  },
];

export default function Header() {
  const { hash } = useHash();

  return (
    <div className="w-full h-12 border-b bg-muted flex items-center">
      <div className="w-14 flex items-center justify-center flex-shrink-0 font-bold">
        <Image
          src="/imgs/logo.png" // Update this path to match your logo's location in the public folder
          alt="RR Logo"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <div className="flex items-center size-full">
        {navItems.map((item) => {
          const isActive =
            item.path === hash || (item.path === "#home" && hash === "");
          return (
            <Link
              key={item.id}
              href={item.path}
              scroll
              className={cn(
                "relative h-full w-fit lg:min-w-40 border-x flex items-center justify-start gap-2 text-muted-foreground hover:bg-background px-4",
                isActive && "text-foreground bg-background hover:bg-background",
                item.isRight && "ml-auto",
              )}
            >
              <item.icon size={14} className="text-primary-foreground" />
              <span className="hidden md:inline text-xs lg:text-base">
                {item.name}
              </span>{" "}
              {isActive && <BorderActive />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const BorderActive = () => (
  <>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
    <div className="absolute -bottom-0.5 left-0 w-full h-1 bg-background" />
  </>
);
