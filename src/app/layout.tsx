import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nomap - Connect with Nomads around you",
  description: "Discover and connect with digital nomads around you. Your global community, one tap away.",
  openGraph: {
    title: "Nomap - Connect with Nomads Worldwide",
    description: "Discover and connect with digital nomads around you. Your global community, one tap away.",
    images: ['/hero.png'],
    type: 'website',
    url: 'https://digitalnomap.com'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nomap - Connect with Nomads around you",
    description: "Discover and connect with digital nomads around you. Your global community, one tap away.",
    images: ['/hero.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
