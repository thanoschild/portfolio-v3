import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Spotlight from "@/components/core/Spotlight";
import { GoogleAnalytics } from '@next/third-parties/google'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hsumeet.site"),
  title: "Sumeet Haldar | Software Engineer",
  description:
    "Sumeet Haldar, a developer crafting software that moves fast and scales even faster.",
  openGraph: {
    title: "Sumeet Haldar | Software Engineer",
    description:
      "Sumeet Haldar, a developer crafting software that moves fast and scales even faster.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sumeet Haldar Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumeet Haldar | Software Engineer",
    description:
      "Sumeet Haldar, a developer crafting software that moves fast and scales even faster.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
          <GoogleAnalytics gaId="G-NM9ZLEBZ9M" />
        </ThemeProvider>
      </body>
    </html>
  );
}
