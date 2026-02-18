
import type { Metadata } from "next";

const TITLE = "dev.jeet – Portfolio of Jeet Mandal";
const DESCRIPTION =
  "Jeet Mandal's portfolio – Showcasing AI, Web, and Hackathon projects. Explore my work in Next.js, React, TypeScript, and more.";
const AUTHOR = "Jeet Mandal";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

export const siteConfig: Metadata = {
  title: {
    default: TITLE,
    template: "%s | dev.jeet",
  },
  description: DESCRIPTION,
  icons: {
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  category: "Portfolio",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "dev.jeet",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "dev.jeet – Portfolio of Jeet Mandal",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@jeetdevx",
    site: "@jeetdevx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: AUTHOR }],
  creator: AUTHOR,
  publisher: AUTHOR,
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(BASE_URL!),
};

// JSON-LD structured data for SEO
export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jeet Mandal",
  "url": BASE_URL,
  "image": `${BASE_URL}/logo.png`,
  "sameAs": [
    "https://github.com/jeet-dot-dev",
    "https://www.linkedin.com/in/jeet-mandal",
    "https://x.com/jeetdevx"
  ],
  "jobTitle": "Full Stack Developer | AI Enthusiast",
  "worksFor": {
    "@type": "Organization",
    "name": "dev.jeet"
  },
  "description": DESCRIPTION,
  "alumniOf": "NSHM Knowledge Campus",
  "knowsAbout": [
    "Next.js", "React", "TypeScript", "AI", "Web Development", "Hackathons"
  ],
  "email": "jeet999dev@gmail.com"
};

