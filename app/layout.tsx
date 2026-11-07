import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Husayn Ali | Data Intelligence & Technology",
  description:
    "Personal brand and digital knowledge hub for Husayn Ali — a BI analyst, developer, and technology enthusiast exploring data, systems, and intelligent technologies.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--bg)] text-[var(--text)]">{children}</body>
    </html>
  );
}
