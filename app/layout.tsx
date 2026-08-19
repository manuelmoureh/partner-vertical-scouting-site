import type { Metadata } from "next";
import "./globals.css";
import { satoshi, jetbrainsMono } from "./fonts";
import { ThemeScript } from "./components/ThemeScript";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://vuria.online"),
  title: "Vuria | Investing in validated AI products",
  description:
    "We invest in validated AI products and help them scale, with capital, engineers, and access to investors and clients.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${satoshi.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-[14.5px] focus:font-medium focus:text-accent-on"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
