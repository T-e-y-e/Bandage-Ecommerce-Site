import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from '@/redux/Provider';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bandage",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <ToastContainer />
        <Providers>
         <Header />
          <main>
            {children}
           </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
