import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ignacio Roca",
  description: "Mi portafolio",
  icons: {
    icon: "/Images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-mont text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
