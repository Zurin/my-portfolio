import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Rino Ridlo | Software Engineer",
    template: "%s | Rino Ridlo",
  },
  description:
    "Senior Full Stack Developer specializing in Golang, Next.js and Laravel. Expert in building high-performance web applications with modern technologies.",
  keywords: [
    "Next.js Developer",
    "React Developer",
    "AI Integration",
    "Full Stack Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Software Engineer",
    "Web Applications",
    "Performance Optimization",
    "Rino Ridlo",
    "Golang",
  ],
  authors: [{ name: "Rino Ridlo" }],
  creator: "Rino Ridlo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rinoridlo.my.id",
    siteName: "Rino Ridlo Portfolio",
    title: "Rino Ridlo | Next.js & Golang Developer",
    description:
      "Senior Full Stack Developer specializing in Golang, Next.js and Laravel. Building high-performance web applications.",
    images: [
      {
        url: "/imgs/website.png",
        width: 1200,
        height: 630,
        alt: "Rino Ridlo - Next.js & Golang",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rinoridlo.my.id",
  },
  icons: {
    icon: "/imgs/logo.png",
    apple: "/imgs/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={firaCode.className}>
        {children}
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
