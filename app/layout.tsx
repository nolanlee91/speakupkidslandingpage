import type { Metadata, Viewport } from "next";
import { Nunito, Quicksand } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});
const quicksand = Quicksand({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [
    "tiếng Anh cho trẻ em",
    "học tiếng Anh 9-12 tuổi",
    "app học tiếng Anh trẻ em",
    "SpeakUp Kids",
    "tiếng Anh tiểu học",
  ],
  authors: [{ name: "SpeakUp Kids" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: `${site.url}/assets/images/vancouver-hero-maple-girl-v3.webp`, width: 1200, height: 630, alt: "Maple — SpeakUp Kids" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FEFAF1",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  description: site.description,
  audience: { "@type": "EducationalAudience", educationalRole: "student" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "VND" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${nunito.variable} ${quicksand.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
