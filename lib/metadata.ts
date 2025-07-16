import type { Metadata } from "next";

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