import { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DickinBaus Food Truck",
  description: "Delicious food truck favorites delivered to your mouth",
  metadataBase: new URL("https://dickinbaus-food-truck.vercel.app"),
  openGraph: {
    title: "DickinBaus Food Truck",
    description: "Delicious food truck favorites delivered to your mouth",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DickinBaus Food Truck Menu",
      },
    ],
    siteName: "DickinBaus Food Truck",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DickinBaus Food Truck",
    description: "Delicious food truck favorites delivered to your mouth",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
