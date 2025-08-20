import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Spotlight from "@/components/core/Spotlight";
import { GoogleAnalytics } from "@next/third-parties/google";
import { metadata } from "@/lib/metadata";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <link rel="icon" href="/logo.ico" sizes="any" />

        {/* Preload selected theme variables synchronously */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('preferred-theme') || 'green';
                  const xhr = new XMLHttpRequest();
                  xhr.open('GET', 'themes/' + theme + '.json', false); 
                  xhr.send(null);
                  if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    const root = document.documentElement;
                    for (const key in data) {
                      if (data.hasOwnProperty(key)) {
                        root.style.setProperty(key, data[key]);
                      }
                    }
                  }
                } catch (e) {
                  console.error('Theme preload error:', e);
                }
              })();
            `,
          }}
        />
        {/* Fallback theme for no-JS browsers */}
        <noscript>
          <style>{`
            :root {
              --bg-color: #191a1b;
              --main-color: #79a617;
              --sub-color: #48494b;
              --sub-alt-color: #141516;
              --text-color: #e7eae0;
              --text-color-sub: #a5a5b0;
            }
          `}</style>
        </noscript>
      </head>
      <body
        className={`${roboto.variable} antialiased`}
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <ThemeProvider>
          <Spotlight />
          {children}
          {/* <FeedbackSection/> */}
          <GoogleAnalytics gaId="G-NM9ZLEBZ9M" />
        </ThemeProvider>
      </body>
    </html>
  );
}
