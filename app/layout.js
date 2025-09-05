import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { initDb } from "@/lib/initDb";

initDb();

export const metadata = {
  title: "Animal Shelter",
  description: "Animal Shelter for stray cats and dogs",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
