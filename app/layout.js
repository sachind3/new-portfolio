import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import Locomotive from "@/components/Locomotive";

export const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Bebas_Neue",
  weight: ["400"],
});

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Manrope",
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Sachin Desai • Freelance Designer & Developer",
  description:
    "Helping brands thrive in the digital world. Located in The Mumbai. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Sachin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas_Neue.variable} ${manrope.variable}`}>
        <Locomotive>
          <Header />
          {children}
          <Footer />
        </Locomotive>
      </body>
    </html>
  );
}
