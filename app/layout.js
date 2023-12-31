import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-gray-900`}
        suppressHydrationWarning
      >
        <NavBar />
        <div className="p-4 pt-20 bg-gray-200">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
