import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "AristoCrafters - Excellence in Education | Best Tuition Center",
  description:
    "Transform your child's academic future with AristoCrafters. Personalized tutoring, expert teachers, and proven results. Book your free demo session today!",
  keywords:
    "tuition center, online tutoring, academic excellence, personalized learning, mathematics, science, english, exam preparation",
  author: "AristoCrafters Education",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="_YCM4v9hV7nClVfuJ971i2lDZPEGfzoMYlnTGyveYMM"
        />

        {/* ✅ Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T4WMN7GL');`,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${nunito.variable}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* ✅ NoScript iframe version */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4WMN7GL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
