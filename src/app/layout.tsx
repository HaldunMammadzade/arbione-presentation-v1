import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";

export const metadata: Metadata = {
  title: "Arbione — Digital Brilliance",
  description: "A technological ecosystem that unifies all management processes into a single, intelligent platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
