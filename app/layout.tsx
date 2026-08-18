import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Vuria | Backing validated AI products",
  description:
    "We're a venture builder backing validated AI products. We provide access to investors, engineers, and clients to help you scale what you've already built.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="light" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
