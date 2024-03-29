import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./providers";

export const metadata = {
  title: "Express Test Server",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <div>
        <Providers>
          <body className={inter.className}>{children}</body>
        </Providers>
      </div>
      <Footer />
    </html>
  );
}
