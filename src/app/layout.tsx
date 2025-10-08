import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Salami FC | Official Site",
  description: "Salami Football Club - Official Website",
   icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
