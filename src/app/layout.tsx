import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Serapeum — AI-Powered Knowledge Library",
  description:
    "Serapeum is a hybrid AI client that combines a local-first personal library with AI-powered discovery. Search books, movies, TV shows, and video games through natural language.",
  keywords: ["AI", "library", "books", "movies", "games", "Flutter", "Genkit"],
  openGraph: {
    title: "Serapeum — AI-Powered Knowledge Library",
    description:
      "A hybrid AI client with local-first library management and cloud-powered discovery.",
    url: "https://serapeum.app",
    siteName: "Serapeum",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>{children}</body>
    </html>
  );
}
