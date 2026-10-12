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

const title = "Arbione — Biznes idarəetmə sistemi";
const description = "İnsan, iş, pul və əməliyyat — bir sistemdə.";

export const metadata: Metadata = {
  metadataBase: new URL("https://presentation.arbione.az"),
  title,
  description,
  applicationName: "Arbione",
  openGraph: {
    title,
    description,
    url: "https://presentation.arbione.az",
    siteName: "Arbione",
    locale: "az_AZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
