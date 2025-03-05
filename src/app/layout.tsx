import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { app, analytics, trackEvent } from './firebase';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://digitalnomap.com'),
  title: {
    default: "Nomap - Connect with Nomads around you",
    template: "%s | Nomap"
  },
  description: "Discover and connect with digital nomads around you. Your global community, one tap away.",
  applicationName: "Nomap",
  keywords: ["digital nomads", "travel", "community", "networking"],
  authors: [{ name: "Nomap Team" }],
  creator: "Nomap Team",
  publisher: "Nomap",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalnomap.com",
    title: "Nomap - Connect with Nomads around you",
    description: "Discover and connect with digital nomads around you. Your global community, one tap away.",
    siteName: "Nomap",
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: "Nomap - Connect with Nomads"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nomap - Connect with Nomads around you",
    description: "Discover and connect with digital nomads around you. Your global community, one tap away.",
    images: ['/hero.png']
  },
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:type': 'website',
    'og:site_name': 'Nomap'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(app, analytics, trackEvent)
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem
          themes={["light", "dark"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
