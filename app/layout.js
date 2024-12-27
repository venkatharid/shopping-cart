import Header from "@/components/Header";
import "./globals.css";
import {Inter} from "next/font/google";
import Context from "@/context/Context";

const inter = Inter({ subsets: ["latin"]})
export const metadata = {
  title: "Shopping Cart",
  description: "Shopping cart to buy products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <div className=""></div>
      <Context>
      <Header />
      <main>{children}</main>
      </Context>
    </body>
    </html>
  );
}