import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/shared/i18n/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'UM Finance Quiz - Descubre tu mentalidad financiera | Test de 2 minutos',
  description: 'Descubre tu mentalidad financiera con nuestro test interactivo de 15 preguntas. Identifica tu perfil financiero en solo 2 minutos.',
  keywords: 'test financiero, mentalidad financiera, cuestionario dinero, perfil financiero, trading, inversiones',
  authors: [{ name: 'UM Finance' }],
  robots: 'index, follow',
  openGraph: {
    title: 'UM Finance Quiz - Descubre tu mentalidad financiera',
    description: 'Descubre tu mentalidad financiera con nuestro test interactivo de 15 preguntas. Identifica tu perfil financiero en solo 2 minutos.',
    url: 'https://umfinance.pro/',
    siteName: 'UM Finance Quiz',
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: 'https://umfinance.pro/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UM Finance Quiz - Test de Mentalidad Financiera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UM Finance Quiz - Descubre tu mentalidad financiera',
    description: 'Descubre tu mentalidad financiera con nuestro test interactivo de 15 preguntas. Identifica tu perfil financiero en solo 2 minutos.',
    images: ['https://umfinance.pro/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="canonical" href="https://umfinance.pro/" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3D568F" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0KVV4NK9Z6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0KVV4NK9Z6');
            `
          }}
        />
        
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '812815251457870');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=812815251457870&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "UM Finance Quiz",
              "author": {
                "@type": "Organization",
                "name": "UM Finance"
              },
              "description": "Descubre tu mentalidad financiera con nuestro test interactivo de 15 preguntas",
              "url": "https://umfinance.pro/",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "¿Qué es el UM Finance Quiz?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Es un test interactivo de 15 preguntas diseñado para identificar tu mentalidad financiera y perfil de inversión."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Cuánto tiempo toma completar el quiz?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "El quiz está diseñado para completarse en aproximadamente 2 minutos."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Es gratuito el UM Finance Quiz?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sí, el quiz es completamente gratuito y no requiere registro previo."
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
