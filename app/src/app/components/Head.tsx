"use client";
import { Metadata } from "next";

import { default as NextHead } from "next/head";
import { useEffect } from "react";

export const Head = ({ title = "Artifact L!ft Off" }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
    </NextHead>
  );
};

export const metadata: Metadata = {
  title: "AiDo Task Organizer",
  description:
    "Streamline your daily task management with AiDo, a responsive and intuitive task organizer.",
  openGraph: {
    title: "AiDo Task Organizer",
    description:
      "Streamline your daily task management with AiDo, a responsive and intuitive task organizer.",
    url: "https://aido-task-organizer.vercel.app",
    siteName: "AiDo Task Organizer",
    images: [
      {
        url: "/og-image.png", // Ensure this image is added to your public folder
        width: 1200,
        height: 630,
        alt: "AiDo Task Organizer",
      },
    ],
    locale: "en_US",
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
