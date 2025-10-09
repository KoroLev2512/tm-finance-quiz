'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CloseIcon, LogoIcon, ArrowBackIcon, BurgerIcon } from "../../shared/icons";

export default function CookiesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <Link href="/" className="logo">
            <LogoIcon />
          </Link>
          <button className="menu-button" onClick={toggleMenu}>
            <BurgerIcon />
          </button>
        </div>
      </header>

      {/* Dropdown Menu */}
      <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-overlay" onClick={closeMenu}></div>
        <div className="menu-panel">
          <button className="close-button" onClick={closeMenu}>
            <CloseIcon/>
          </button>
          <nav className="menu-nav">
            <Link href="/privacy" className="menu-item">Política de Privacidad</Link>
            <Link href="/cookies" className="menu-item">Política de Cookies</Link>
            <a href="#" className="menu-item">Contacta con Nosotros</a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="policy-section">
          <div className="policy-container">
            <div className="policy-content">
              <div className="back-button-container">
                <Link href="/" className="back-button">
                  <ArrowBackIcon />
                  <span>Volver</span>
                </Link>
              </div>
              
              <h1 className="policy-title">Política de Cookies</h1>
              
              <div className="policy-content-wrapper">
                <div className="policy-section-item">
                  <p className="policy-text">
                    <strong>Última actualización: 01/10/2025</strong>
                  </p>
                  <p className="policy-text">
                    En cumplimiento con la Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI) y el Reglamento General de Protección de Datos (GDPR), esta Política de Cookies explica qué son las Cookies, cómo las utilizamos en el sitio web https://umfinance.pro y cómo usted puede gestionarlas.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">1. ¿Qué son las Cookies?</h2>
                  <p className="policy-text">
                    Las Cookies son pequeños archivos de texto que los sitios web visitados por el usuario envían a su dispositivo (ordenador, tablet, smartphone, etc.), donde se almacenan para ser luego retransmitidos al mismo sitio en la siguiente visita. Las Cookies son utilizadas por UMF Global Services Ltd. (en adelante, &quot;nosotros&quot; o &quot;el sitio&quot;) para hacer que el sitio funcione o mejore su eficiencia, así como para proporcionar información a los propietarios del sitio.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">2. Tipos de Cookies que utilizamos</h2>
                  <p className="policy-text">
                    Este sitio web utiliza los siguientes tipos de Cookies:
                  </p>
                  <p className="policy-text">
                    • Cookies técnicas y funcionales (esenciales): Son necesarias para el funcionamiento básico del sitio web y le permiten navegar y utilizar sus funciones fundamentales, como el acceso a áreas seguras. Sin estas Cookies, el sitio no puede funcionar correctamente.
                  </p>
                  <p className="policy-text">
                    • Cookies de preferencias: Permiten al sitio web recordar información que cambia la forma en que el sitio se comporta o se ve, como su idioma preferido o la región en la que se encuentra.
                  </p>
                  <p className="policy-text">
                    • Cookies de análisis y rendimiento: Nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y las menos populares y ver cómo los visitantes navegan por el sitio. Toda la información que recogen estas Cookies es agregada y, por lo tanto, anónima.
                  </p>
                  <p className="policy-text">
                    • Cookies de marketing y targeting: Son establecidas por nuestros socios publicitarios a través de nuestro sitio. Pueden ser utilizadas por esas empresas para crear un perfil de sus intereses y mostrarle anuncios relevantes en otros sitios. No almacenan directamente información personal, sino que se basan en la identificación única de su navegador y dispositivo de internet.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">3. Finalidades del uso de Cookies</h2>
                  <p className="policy-text">
                    Utilizamos Cookies por las siguientes razones:
                  </p>
                  <p className="policy-text">
                    • Para garantizar el correcto funcionamiento técnico del sitio web.
                  </p>
                  <p className="policy-text">
                    • Recordar sus preferencias y configuraciones (como el idioma).
                  </p>
                  <p className="policy-text">
                    • Analizar cómo los usuarios interactúan con nuestro sitio para mejorar nuestros servicios y la experiencia del usuario.
                  </p>
                  <p className="policy-text">
                    • (Opcional) Para mostrarle publicidad personalizada dentro y fuera de nuestro sitio.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">4. Gestión de sus preferencias de Cookies</h2>
                  <p className="policy-text">
                    Al acceder por primera vez a nuestro sitio, verá un banner informativo donde puede aceptar o rechazar el uso de Cookies no esenciales (es decir, de análisis y marketing). Puede cambiar su elección en cualquier momento.
                  </p>
                  <p className="policy-text">
                    <strong>Gestionar las Cookies desde su navegador:</strong>
                  </p>
                  <p className="policy-text">
                    Usted puede configurar su navegador para que bloquee las Cookies o le alerte sobre ellas. Dado que este proceso es ligeramente diferente para cada navegador, puede consultar las instrucciones en el menú de &quot;Ayuda&quot; de su navegador.
                  </p>
                  <p className="policy-text">
                    A continuación, le proporcionamos enlaces a las instrucciones de los navegadores más populares:
                  </p>
                  <p className="policy-text">
                    • Google Chrome
                  </p>
                  <p className="policy-text">
                    • Mozilla Firefox
                  </p>
                  <p className="policy-text">
                    • Safari
                  </p>
                  <p className="policy-text">
                    • Microsoft Edge
                  </p>
                  <p className="policy-text">
                    Tenga en cuenta que la desactivación total de las Cookies puede afectar la funcionalidad de este y otros sitios web que visite.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">5. Transferencia internacional de datos</h2>
                  <p className="policy-text">
                    Algunas de nuestras Cookies, especialmente las de análisis y marketing, pueden ser gestionadas por proveedores ubicados fuera del Espacio Económico Europeo (EEE). En tales casos, nos aseguraremos de que dichas transferencias se realicen con las garantías adecuadas exigidas por la legislación, como las Cláusulas Contractuales Estándar de la UE.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">6. Sus derechos</h2>
                  <p className="policy-text">
                    Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de sus datos personales, según se describe en detalle en nuestra Política de Privacidad. Para cualquier solicitud relacionada con sus datos personales, puede contactarnos en privacy@umfinance.com.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">7. Cambios en esta Política de Cookies</h2>
                  <p className="policy-text">
                    Nos reservamos el derecho de modificar esta Política de Cookies para adaptarla a novedades legislativas o cambios en nuestra actividad. Cualquier cambio será debidamente comunicado en esta página, por lo que le recomendamos que la consulte periódicamente.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">8. Contacto</h2>
                  <p className="policy-text">
                    Si tiene alguna pregunta sobre el uso de Cookies en nuestro sitio, no dude en ponerse en contacto con nosotros:
                  </p>
                  <p className="policy-text">
                    • Email: privacy@umfinance.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
