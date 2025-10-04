import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UM Finance Quiz - Descubre tu mentalidad financiera | Test de 2 minutos',
  description: 'Descubre tu mentalidad financiera con nuestro test interactivo de 15 preguntas. Identifica tu perfil financiero en solo 2 minutos.',
  keywords: 'test financiero, mentalidad financiera, cuestionario dinero, perfil financiero, trading, inversiones',
  authors: [{ name: 'UM Finance' }],
  robots: 'index, follow',
  openGraph: {
    title: 'UM Finance Quiz - Descubre tu mentalidad financiera',
    description: 'Descubre tu mentalidad financiera con nuestro test interactivo de 15 preguntas. Identifica tu perfil financiero en solo 2 minutos.',
    url: 'https://umfinance-quiz.com/',
    siteName: 'UM Finance Quiz',
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: 'https://umfinance-quiz.com/og-image.jpg',
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
    images: ['https://umfinance-quiz.com/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
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
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://umfinance-quiz.com/" />
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
              "url": "https://umfinance-quiz.com/",
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
      <body>{children}</body>
    </html>
  )
}
