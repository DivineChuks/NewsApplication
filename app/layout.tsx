import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Providers from "@/redux/provider";

// I used Montserrat Font For The Entire Site.
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "News Application",
  description: "Your Favorite News App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
