import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.salamirangersfc.com"),

  title: {
    default: "Salami FC | Official Site",
    template: "%s | Salami FC",
  },

  description:
    "Salami Football Club - Official Website. Latest news, fixtures, results, and more.",

  keywords: ["Salami FC", "Football", "Soccer", "News", "Salami Rangers"],

  authors: [{ name: "Salami FC" }],

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.salamirangersfc.com",
    siteName: "Salami FC | Official Site",
    title: "Salami FC | Official Site",
    description: "Salami Football Club - Official Website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Salami FC Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@SalamiFC",
    creator: "@SalamiFC",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <Navbar />
        <main className="pt-[100px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
