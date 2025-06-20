import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumeet Haldar | Software Engineer",
  description: "Sumeet Haldar, a developer crafting software that moves fast and scales even faster.",
  openGraph: {
    title: "Sumeet Haldar | Software Engineer",
    description: "Sumeet Haldar, a developer crafting software that moves fast and scales even faster.",
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
    description: "Sumeet Haldar, a developer crafting software that moves fast and scales even faster.",
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
                  const availableThemes = {
                    orange: '#f66e0d',
                    blue: '#007acc',
                    green: '#79a617',
                    pink: '#f44c7f',
                    yellow: '#e2b714'
                  };
                  
                  const theme = localStorage.getItem('preferred-theme') || 'orange';
                  const color = availableThemes[theme] || availableThemes['orange'];

                  document.documentElement.style.setProperty('--main-color', color);
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
      <body className={`${roboto.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
