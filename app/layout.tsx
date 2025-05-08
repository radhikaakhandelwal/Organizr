import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css"; //base style for entire application

const poppins = Poppins({
  subsets: ["latin"], // use the Latin character set
  weight: ["400", "500", "600", "700"], // font weights to use
  variable: "--font-poppins,", // CSS variable name to reference this font
});

// Metadata (for SEO and browser tab info)
export const metadata: Metadata = {
  title: "Organizr",
  description: "Platform for event management.",
  icons: {
    icon: "/assets/images/Capture.PNG",
  },
};

// React component that wraps every page
// "Expect one prop: children" -> function RootLayout({children})
// "It must be valid React content" -> children: React.ReactNode;
// "It’s read-only and can’t be changed" -> Readonly<{}>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
