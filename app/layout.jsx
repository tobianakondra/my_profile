import { JetBrains_Mono as jetBrainsMono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Script from "next/script";

const jetBrainsMonoFont = jetBrainsMono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Richard Diatta — Développeur Fullstack React, Next.js & Node.js",
  description: "Richard Diatta, développeur Fullstack spécialisé React, Next.js, Node.js, Firebase, Supabase. Freelance & CDI — Architectures scalables, temps réel & CI/CD.",
  keywords: ["Développeur Fullstack", "React", "Next.js", "Node.js", "Firebase", "Supabase", "TypeScript", "Freelance", "France"],
  authors: [{ name: "Richard Diatta" }],
  openGraph: {
    title: "Richard Diatta — Développeur Fullstack",
    description: "Architectures scalables, temps réel & CI/CD",
    type: "website",
    locale: "fr_FR",
    siteName: "Richard Diatta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Diatta — Développeur Fullstack",
    description: "React, Next.js, Node.js, Firebase, Supabase",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7XFCGB069Y"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7XFCGB069Y');
        `}
      </Script>
      <body className={`${jetBrainsMonoFont.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}