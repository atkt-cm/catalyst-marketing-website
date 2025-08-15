import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


// Optimize font loading with multiple weights
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Catalyst - Your Exclusive Marketing Agency",
  description: "Private marketing agency delivering exceptional growth through AI-driven strategies, content marketing, and brand development for ambitious SMEs.",
  keywords: ["marketing agency", "digital marketing", "private marketing", "exclusive agency", "AI marketing", "content strategy"],
  authors: [{ name: "Catalyst Agency" }],
  creator: "Catalyst Agency",
  publisher: "Catalyst Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://catalyst-agency.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Catalyst - Your Exclusive Marketing Agency",
    description: "Private marketing agency delivering exceptional growth through AI-driven strategies, content marketing, and brand development for ambitious SMEs.",
    url: "https://catalyst-agency.com",
    siteName: "Catalyst Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalyst - Your Exclusive Marketing Agency",
    description: "Private marketing agency delivering exceptional growth through AI-driven strategies, content marketing, and brand development for ambitious SMEs.",
    creator: "@catalystagency",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Performance hints */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//ext.same-assets.com" />

        {/* Preload critical CSS */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Icons and PWA */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Viewport and theme */}
        <meta name="theme-color" content="#babc6b" />
        <meta name="color-scheme" content="light" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Catalyst" />

        {/* Performance optimization */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />

        {/* Preload critical resources */}
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}

        {/* Performance monitoring and service worker registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Service worker registration
              if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                      console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }

              // Web Vitals tracking
              if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                  // Initialize performance monitoring
                  if ('PerformanceObserver' in window) {
                    try {
                      const observer = new PerformanceObserver((list) => {
                        for (const entry of list.getEntries()) {
                          if (entry.entryType === 'largest-contentful-paint') {
                            console.log('LCP:', entry.startTime);
                          }
                          if (entry.entryType === 'first-input') {
                            console.log('FID:', entry.processingStart - entry.startTime);
                          }
                        }
                      });
                      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
                    } catch (e) {
                      // Silent fail
                    }
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
