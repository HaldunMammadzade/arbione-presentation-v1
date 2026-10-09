import type { Metadata, Viewport } from "next";
import "./globals.css";
import { DeckProvider } from "@/components/deck/primitives";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6fa" },
    { media: "(prefers-color-scheme: dark)", color: "#171926" },
  ],
};

export const metadata: Metadata = {
  title: "Arbione — Şirkətin idarəetmə sistemi",
  description: "Arbione şirkətin insanını, işini, pulunu və əməliyyatını bir yerdə idarə edən sistemdir.",
};

const themeInit = `try{if(localStorage.getItem('arb-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Tight:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <DeckProvider>{children}</DeckProvider>
      </body>
    </html>
  );
}
