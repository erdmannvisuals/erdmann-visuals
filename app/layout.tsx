import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erdmann Visuals",
  description: "Cinematic visual storytelling — designed for visual impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}