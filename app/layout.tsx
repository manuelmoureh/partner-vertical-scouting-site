import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trance Ventures | Backing validated AI products out of Kenya",
  description:
    "We're a venture builder backing validated AI products out of Kenya. We provide access to investors, engineers, and clients to help you scale what you've already built.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
