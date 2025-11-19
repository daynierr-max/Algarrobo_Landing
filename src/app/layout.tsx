import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Algarrobo Landing',
  description: 'A caring and welcoming adult day care center.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      </head>
      <body className="antialiased">
        <div id="google_translate_element" style={{display: 'none'}}></div>
        <script type="text/javascript">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'es,fr', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
            }

            function triggerSpanishTranslation() {
              var iframe = document.getElementsByClassName('goog-te-menu-frame')[0];
              if (!iframe) return;
              
              var links = iframe.contentWindow.document.getElementsByTagName('a');
              for(var i=0; i < links.length; i++){
                if(links[i].innerText.includes('Spanish') || links[i].innerText.includes('Español')){
                  links[i].click();
                  return;
                }
              }
            }
          `}
        </script>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
