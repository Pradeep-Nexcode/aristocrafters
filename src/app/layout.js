import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata = {
  title: "AristoCrafters - Excellence in Education | Best Tuition Center",
  description: "Transform your child's academic future with AristoCrafters. Personalized tutoring, expert teachers, and proven results. Book your free demo session today!",
  keywords: "tuition center, online tutoring, academic excellence, personalized learning, mathematics, science, english, exam preparation",
  author: "AristoCrafters Education",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
      </head>
      <body
        className={`${poppins.variable} ${nunito.variable}`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
