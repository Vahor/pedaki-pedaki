import type { Metadata } from "next";

const seoConfig = {
  title: {
    template: "%s - Pedaki",
    default: "Pedaki",
  },
  description: "todo",
  themeColor: "#ffffff",
  openGraph: {
    images: "/og-image.png",
    url: "https://pedaki.fr",
  },
  robots: "index, follow",
  colorScheme: "light",
  manifest: "/site.webmanifest",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "mask-icon", url: "/favicon.ico" },
    { rel: "image/x-icon", url: "/favicon.ico" },
  ],
} satisfies Metadata;

export default seoConfig;
