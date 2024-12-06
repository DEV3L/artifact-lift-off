import { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AiDo Task Organizer",
  description:
    "Streamline your daily task management with AiDo, a responsive and intuitive task organizer.",
  metadataBase: new URL("https://aido-lift-off.vercel.app"),
  openGraph: {
    title: "AiDo Task Organizer",
    description:
      "Streamline your daily task management with AiDo, a responsive and intuitive task organizer.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AiDo Task Organizer",
      },
    ],
    siteName: "AiDo Task Organizer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiDo Task Organizer",
    description:
      "Streamline your daily task management with AiDo, a responsive and intuitive task organizer.",
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
