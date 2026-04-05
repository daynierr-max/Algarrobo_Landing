import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const headlineFont = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-headline",
});

export const metadata: Metadata = {
  title: "Algarrobo Adult Day Care | Homestead, Florida",
  description:
    "Centro de cuidado diurno para adultos en Homestead, Florida, con transporte, actividades diarias, acompañamiento familiar y contacto directo para solicitar información.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className={`${bodyFont.variable} ${headlineFont.variable} font-body antialiased`}>
        <div id="google_translate_element" style={{ display: "none" }}></div>

        {children}
        <Toaster />

        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        <Script id="google-translate" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              if (typeof google !== 'undefined' && google.translate) {
                new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'en,fr', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}
