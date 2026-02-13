import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mohammad Zen Al Abdeen | Fullstack Developer & Embedded Systems Engineer',
  description: 'Portfolio of Mohammad Yasen Zen Al Abdeen - Full-Stack Developer specializing in React, Next.js, Laravel, and Embedded Systems',
  keywords: ['Fullstack Developer', 'Embedded Systems', 'React', 'Next.js', 'Laravel', 'Arduino', 'IoT'],
  authors: [{ name: 'Mohammad Yasen Zen Al Abdeen' }],
  creator: 'Mohammad Yasen Zen Al Abdeen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    title: 'Mohammad Zen Al Abdeen | Fullstack Developer',
    description: 'Portfolio of Mohammad Yasen Zen Al Abdeen - Full-Stack Developer',
    siteName: 'Mohammad Zen Al Abdeen Portfolio'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
