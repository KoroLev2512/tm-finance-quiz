interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  locale?: string;
}

export const updateSEO = (config: SEOConfig) => {
  // Update title
  document.title = config.title;
  
  // Update meta tags
  updateMetaTag('title', config.title);
  updateMetaTag('description', config.description);
  updateMetaTag('keywords', config.keywords || 'mentalidad financiera, test financiero, perfil de inversor, tolerancia al riesgo, decisiones financieras, quiz financiero, educación financiera, finanzas personales');
  
  // Update Open Graph tags
  updateMetaTag('og:title', config.title);
  updateMetaTag('og:description', config.description);
  updateMetaTag('og:url', config.url || 'https://umfinance-quiz.com/');
  updateMetaTag('og:type', config.type || 'website');
  updateMetaTag('og:locale', config.locale || 'es_ES');
  
  if (config.image) {
    updateMetaTag('og:image', config.image);
  }
  
  // Update Twitter tags
  updateMetaTag('twitter:title', config.title);
  updateMetaTag('twitter:description', config.description);
  updateMetaTag('twitter:url', config.url || 'https://umfinance-quiz.com/');
  
  if (config.image) {
    updateMetaTag('twitter:image', config.image);
  }
  
  // Update canonical URL
  updateCanonicalURL(config.url || 'https://umfinance-quiz.com/');
};

const updateMetaTag = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.querySelector(`meta[property="${name}"]`) as HTMLMetaElement;
  }
  
  if (meta) {
    meta.setAttribute('content', content);
  } else {
    // Create new meta tag
    meta = document.createElement('meta');
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      meta.setAttribute('property', name);
    } else {
      meta.setAttribute('name', name);
    }
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  }
};

const updateCanonicalURL = (url: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (canonical) {
    canonical.setAttribute('href', url);
  } else {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', url);
    document.head.appendChild(canonical);
  }
};

// SEO configurations for different pages
export const SEO_CONFIGS = {
  home: {
    title: 'UM Finance Quiz - Descubre tu mentalidad financiera | Test de 2 minutos',
    description: 'Descubre tu mentalidad financiera con nuestro test interactivo de 15 preguntas. Conoce tu perfil de inversor, tolerancia al riesgo y estilo de toma de decisiones financieras en solo 2 minutos.',
    keywords: 'mentalidad financiera, test financiero, perfil de inversor, tolerancia al riesgo, decisiones financieras, quiz financiero, educación financiera, finanzas personales',
    url: 'https://umfinance-quiz.com/',
    image: 'https://umfinance-quiz.com/og-image.jpg'
  },
  quiz: {
    title: 'Test de Mentalidad Financiera - UM Finance Quiz',
    description: 'Completa nuestro test de 15 preguntas para descubrir tu perfil financiero. Analiza tu tolerancia al riesgo, estilo de toma de decisiones y mentalidad de inversión.',
    keywords: 'test mentalidad financiera, perfil inversor, tolerancia riesgo, decisiones financieras, quiz finanzas',
    url: 'https://umfinance-quiz.com/quiz',
    image: 'https://umfinance-quiz.com/quiz-og-image.jpg'
  },
  results: {
    title: 'Resultados del Test - Tu Perfil Financiero | UM Finance Quiz',
    description: 'Descubre los resultados de tu test de mentalidad financiera. Conoce tu perfil de inversor y recibe recomendaciones personalizadas para mejorar tus decisiones financieras.',
    keywords: 'resultados test financiero, perfil inversor, recomendaciones financieras, análisis mentalidad financiera',
    url: 'https://umfinance-quiz.com/results',
    image: 'https://umfinance-quiz.com/results-og-image.jpg'
  },
  contact: {
    title: 'Contacto - Recibe tu Reporte Detallado | UM Finance Quiz',
    description: 'Proporciona tu email para recibir un reporte detallado de tu perfil financiero con recomendaciones personalizadas y análisis completo de tu mentalidad financiera.',
    keywords: 'reporte financiero, análisis perfil inversor, recomendaciones personalizadas, email financiero',
    url: 'https://umfinance-quiz.com/contact',
    image: 'https://umfinance-quiz.com/contact-og-image.jpg'
  },
  success: {
    title: '¡Quiz Completado! - UM Finance Quiz',
    description: '¡Felicidades! Has completado el test de mentalidad financiera. Revisa tu email para recibir tu reporte detallado con análisis y recomendaciones personalizadas.',
    keywords: 'quiz completado, reporte financiero, email confirmación, análisis mentalidad financiera',
    url: 'https://umfinance-quiz.com/success',
    image: 'https://umfinance-quiz.com/success-og-image.jpg'
  }
};

// Hook for React components
export const useSEO = (config: SEOConfig) => {
  React.useEffect(() => {
    updateSEO(config);
  }, [config]);
};
