import "./globals.css";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

export const metadata = {
  title: "Animal Shelter",
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
