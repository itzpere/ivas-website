import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { Climate_Crisis } from "next/font/google";

const climateCrisis = Climate_Crisis({ 
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={climateCrisis.className}>
      <head></head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}