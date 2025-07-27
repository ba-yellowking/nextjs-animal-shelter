import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Animal Shelter",
  description:
    "Animal Shelter for stray cats and dogs founded in Kazakhstan, Astana",
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
