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
  title: "Sumeet Haldar | Developer & Engineer",
  description: "Portfolio of Sumeet Haldar featuring scalable backend systems, real-time applications, and full-stack development with React, Next.js, and GCP.",
  icons: {
    icon: [
      { url: "/logo-white.png", type: "image/png" },
      { url: "/logo-white.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo-white.png", type: "image/png" }
    ],
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
