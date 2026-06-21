import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://outagereadyhome.com";

export const metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Outage Ready Home | Backup Power Guides & Calculators",
    template: "%s | Outage Ready Home",
  },

  description:
    "Practical backup power guides, outage calculators, and emergency preparedness resources for homes, apartments, refrigerators, Wi-Fi, phones, and essential devices.",

  applicationName: "Outage Ready Home",

  keywords: [
    "power outage",
    "backup power",
    "portable power station",
    "home outage kit",
    "fridge backup battery",
    "power outage calculator",
    "Wi-Fi backup power",
    "power bank outage",
  ],

  authors: [{ name: "Outage Ready Home" }],
  creator: "Outage Ready Home",
  publisher: "Outage Ready Home",

  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Outage Ready Home",
    title: "Outage Ready Home | Backup Power Guides & Calculators",
    description:
      "Plan power outages calmly with practical backup power guides, calculators, and home preparedness resources.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Outage Ready Home",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Outage Ready Home | Backup Power Guides & Calculators",
    description:
      "Practical backup power guides, outage calculators, and emergency preparedness resources.",
    images: ["/twitter-image"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}