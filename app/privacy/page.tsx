'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CloseIcon, LogoIcon, ArrowBackIcon, BurgerIcon } from "../../shared/icons";

export default function PrivacyPage() {
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
              
              <h1 className="policy-title">Política respecto al tratamiento de datos personales</h1>
              
              <div className="policy-content-wrapper">
                <div className="policy-section-item">
                  <h2 className="policy-section-title">Preámbulo</h2>
                  <p className="policy-text">
                    La presente política de tratamiento de datos personales se ha redactado de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (GDPR) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD). Define el procedimiento de tratamiento de datos personales y las medidas para garantizar su seguridad, implementadas por UMF Global Services Ltd. (en adelante, el Operador).
                  </p>
                  <p className="policy-text">
                    1.1. El Operador tiene como objetivo y condición más importante de sus actividades el respeto de los derechos y libertades del ser humano y del ciudadano en el tratamiento de sus datos personales, incluida la protección de los derechos a la privacidad personal y familiar.
                  </p>
                  <p className="policy-text">
                    1.2. La presente política del Operador respecto al tratamiento de datos personales (en adelante, la Política) se aplica a toda la información que el Operador pueda recibir sobre los visitantes del sitio web https://umfinance.pro.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">2. Conceptos básicos utilizados en la Política</h2>
                  <p className="policy-text">
                    2.1. Tratamiento automatizado de datos personales: tratamiento de datos personales mediante equipos informáticos.
                  </p>
                  <p className="policy-text">
                    2.2. Bloqueo de datos personales: interrupción temporal del tratamiento de datos personales (excepto cuando sea necesario para actualizar los datos).
                  </p>
                  <p className="policy-text">
                    2.3. Sitio web: conjunto de materiales gráficos e informativos, así como programas informáticos y bases de datos que garantizan su disponibilidad en Internet en la dirección de red https://umfinance.pro.
                  </p>
                  <p className="policy-text">
                    2.4. Sistema de información de datos personales: conjunto de datos personales contenidos en bases de datos y las tecnologías de la información y medios técnicos que garantizan su tratamiento.
                  </p>
                  <p className="policy-text">
                    2.5. Anonimización de datos personales: acciones que hacen imposible determinar, sin información adicional, la pertenencia de los datos personales a un Usuario u otro sujeto de datos específico.
                  </p>
                  <p className="policy-text">
                    2.6. Tratamiento de datos personales: cualquier operación o conjunto de operaciones realizadas con datos personales, ya sea por medios automatizados o no, incluidos la recogida, registro, organización, estructuración, conservación, adaptación o modificación, extracción, consulta, uso, comunicación por transmisión, difusión o cualquier otra forma de habilitación de acceso, cotejo o interconexión, limitación, supresión o destrucción.
                  </p>
                  <p className="policy-text">
                    2.7. Operador: el organismo estatal, municipal, la persona jurídica o física que, solo o conjuntamente con otras, organice y/o realice el tratamiento de datos personales, así como determine los fines y el contenido del tratamiento de datos personales.
                  </p>
                  <p className="policy-text">
                    2.8. Datos personales: cualquier información relativa directa o indirectamente a un Usuario del sitio web https://umfinance.pro, identificado o identificable.
                  </p>
                  <p className="policy-text">
                    2.9. Datos personales autorizados para su divulgación: datos personales a los que el titular ha dado acceso a un círculo ilimitado de personas mediante el consentimiento para su tratamiento de conformidad con la ley (en adelante, datos personales autorizados para su divulgación).
                  </p>
                  <p className="policy-text">
                    2.10. Usuario: cualquier visitante del sitio web https://umfinance.pro.
                  </p>
                  <p className="policy-text">
                    2.11. Comunicación de datos personales: acciones dirigidas a revelar datos personales a una persona o círculo determinado de personas.
                  </p>
                  <p className="policy-text">
                    2.12. Divulgación de datos personales: cualquier acción dirigida a revelar datos personales a un círculo indeterminado de personas o a dar acceso a ellos a un círculo ilimitado de personas.
                  </p>
                  <p className="policy-text">
                    2.13. Transferencia internacional de datos personales: transferencia de datos personales a un país extranjero, a una autoridad extranjera, persona física o jurídica extranjera.
                  </p>
                  <p className="policy-text">
                    2.14. Destrucción de datos personales: cualquier acción como resultado de la cual los datos personales se destruyen de forma irreversible, con imposibilidad de restaurar su contenido en el sistema de información de datos personales y/o se destruyen los soportes materiales de los datos personales.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">3. Derechos y obligaciones básicos del Operador</h2>
                  <p className="policy-text">
                    3.1. El Operador tiene derecho a:
                  </p>
                  <p className="policy-text">
                    — Recibir del titular información y/o documentos veraces que contengan datos personales;
                  </p>
                  <p className="policy-text">
                    — Continuar el tratamiento de datos personales sin el consentimiento del titular en los casos previstos por el GDPR;
                  </p>
                  <p className="policy-text">
                    — Determinar de forma independiente la composición y lista de medidas necesarias y suficientes para garantizar el cumplimiento de las obligaciones establecidas por el GDPR y la normativa aplicable.
                  </p>
                  <p className="policy-text">
                    3.2. El Operador está obligado a:
                  </p>
                  <p className="policy-text">
                    — Proporcionar al titular, a su solicitud, información relativa al tratamiento de sus datos personales;
                  </p>
                  <p className="policy-text">
                    — Organizar el tratamiento de datos personales conforme a la legislación vigente;
                  </p>
                  <p className="policy-text">
                    — Responder a las solicitudes y peticiones de los titulares de datos personales y sus representantes legales de conformidad con los requisitos del GDPR;
                  </p>
                  <p className="policy-text">
                    — Publicar o garantizar de otro modo el acceso ilimitado a la presente Política de tratamiento de datos personales;
                  </p>
                  <p className="policy-text">
                    — Adoptar medidas legales, organizativas y técnicas para proteger los datos personales del acceso ilegal o accidental, destrucción, modificación, bloqueo, copia, divulgación o distribución, así como de otras acciones ilícitas;
                  </p>
                  <p className="policy-text">
                    — Cesar la transferencia, el tratamiento y destruir los datos personales en la forma y los casos previstos por el GDPR;
                  </p>
                  <p className="policy-text">
                    — Cumplir con otras obligaciones establecidas por el GDPR.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">4. Derechos y obligaciones básicos de los titulares de datos personales</h2>
                  <p className="policy-text">
                    4.1. Los titulares de datos personales tienen derecho a:
                  </p>
                  <p className="policy-text">
                    — Obtener información relativa al tratamiento de sus datos personales, excepto en los casos previstos por la ley. La información se facilita al titular por el Operador de forma accesible;
                  </p>
                  <p className="policy-text">
                    — Exigir al Operador que actualice, bloquee o destruya sus datos personales si son incompletos, obsoletos, inexactos, obtenidos ilegalmente o no son necesarios para el fin declarado del tratamiento, así como a tomar medidas legales para proteger sus derechos;
                  </p>
                  <p className="policy-text">
                    — Plantear la condición de consentimiento previo para el tratamiento de datos personales con fines de mercadotecnia;
                  </p>
                  <p className="policy-text">
                    — Revocar su consentimiento para el tratamiento de datos personales, así como a presentar una solicitud para cesar el tratamiento de datos personales;
                  </p>
                  <p className="policy-text">
                    — Reclamar ante la autoridad de control competente (Agencia Española de Protección de Datos) o vía judicial las acciones u omisiones ilegales del Operador en el tratamiento de sus datos personales;
                  </p>
                  <p className="policy-text">
                    — Ejercer otros derechos previstos por la legislación.
                  </p>
                  <p className="policy-text">
                    4.2. Los titulares de datos personales están obligados a:
                  </p>
                  <p className="policy-text">
                    — Facilitar al Operador datos veraces sobre sí mismos;
                  </p>
                  <p className="policy-text">
                    — Informar al Operador sobre la actualización de sus datos personales.
                  </p>
                  <p className="policy-text">
                    4.3. Las personas que hayan facilitado al Operador información falsa sobre sí mismas, o información sobre otro titular de datos personales sin el consentimiento de este último, serán responsables conforme a la legislación.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">5. Principios del tratamiento de datos personales</h2>
                  <p className="policy-text">
                    5.1. El tratamiento de datos personales se realiza de forma lícita y leal.
                  </p>
                  <p className="policy-text">
                    5.2. El tratamiento de datos personales se limita al cumplimiento de fines específicos, predeterminados y legítimos. No se permite el tratamiento de datos personales incompatible con dichos fines.
                  </p>
                  <p className="policy-text">
                    5.3. No se permite la combinación de bases de datos que contengan datos personales cuyo tratamiento se realiza con fines incompatibles entre sí.
                  </p>
                  <p className="policy-text">
                    5.4. Solo serán objeto de tratamiento los datos personales que cumplan con los fines de su tratamiento.
                  </p>
                  <p className="policy-text">
                    5.5. El contenido y volumen de los datos personales tratados se corresponden con los fines declarados del tratamiento. No se permite el exceso de datos personales tratados en relación con los fines declarados.
                  </p>
                  <p className="policy-text">
                    5.6. En el tratamiento de datos personales se garantiza su exactitud y, en los casos necesarios, su actualidad con respecto a los fines del tratamiento. El Operador toma las medidas necesarias para eliminar o rectificar los datos incompletos o inexactos.
                  </p>
                  <p className="policy-text">
                    5.7. El almacenamiento de datos personales se realiza en una forma que permita identificar al titular, no más tiempo del necesario para los fines de su tratamiento, a menos que el plazo esté establecido por ley o contrato.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">6. Fines del tratamiento de datos personales</h2>
                  <p className="policy-text">
                    Finalidad del tratamiento: Informar al Usuario mediante el envío de correos electrónicos
                  </p>
                  <p className="policy-text">
                    Datos personales: Dirección de correo electrónico, Apellidos y nombre
                  </p>
                  <p className="policy-text">
                    Base legal: GDPR y el consentimiento del Usuario.
                  </p>
                  <p className="policy-text">
                    Tipos de tratamiento: Envío de boletines informativos a la dirección de correo electrónico.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">7. Condiciones del tratamiento de datos personales</h2>
                  <p className="policy-text">
                    7.1. El tratamiento de datos personales se realiza con el consentimiento del titular para el tratamiento de sus datos personales.
                  </p>
                  <p className="policy-text">
                    7.2. El tratamiento es necesario para el cumplimiento de una obligación legal aplicable al Operador.
                  </p>
                  <p className="policy-text">
                    7.3. El tratamiento es necesario para la ejecución de un contrato en el que el titular es parte o para la aplicación de medidas precontractuales a petición de este.
                  </p>
                  <p className="policy-text">
                    7.4. El tratamiento es necesario para la satisfacción de intereses legítimos perseguidos por el Operador o por un tercero, siempre que no prevalezcan sobre dichos intereses los derechos e intereses fundamentales del titular.
                  </p>
                  <p className="policy-text">
                    7.5. Se trata de datos personales que el titular ha hecho manifiestamente públicos.
                  </p>
                  <p className="policy-text">
                    7.6. El tratamiento es necesario para la formulación, ejercicio o defensa de reclamaciones.
                  </p>
                  <p className="policy-text">
                    7.7. Se trata de datos personales cuyo tratamiento es necesario por razones de interés público.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">8. Procedimiento de recogida, almacenamiento, transferencia y otros tipos de tratamiento de datos personales</h2>
                  <p className="policy-text">
                    La seguridad de los datos personales tratados por el Operador está garantizada mediante la implementación de medidas legales, organizativas y técnicas necesarias para cumplir con la normativa vigente en materia de protección de datos.
                  </p>
                  <p className="policy-text">
                    8.1. El Operador garantiza la confidencialidad de los datos personales y toma todas las medidas posibles para excluir el acceso a los datos personales por parte de personas no autorizadas.
                  </p>
                  <p className="policy-text">
                    8.2. Los datos personales del Usuario nunca, bajo ninguna circunstancia, serán transferidos a terceros, excepto en los casos relacionados con el cumplimiento de la legislación vigente o si el titular ha dado su consentimiento al Operador para transferir los datos a un tercero para el cumplimiento de obligaciones de un contrato civil.
                  </p>
                  <p className="policy-text">
                    8.3. En caso de detectar inexactitudes en los datos personales, el Usuario puede actualizarlos de forma independiente, enviando una notificación al Operador al correo electrónico privacy@umfinance.com con la mención &quot;Actualización de datos personales&quot;.
                  </p>
                  <p className="policy-text">
                    8.4. El plazo de tratamiento de datos personales se determina por la consecución de los fines para los que se recogieron, a menos que un plazo diferente esté establecido por contrato o por la legislación vigente.
                  </p>
                  <p className="policy-text">
                    El Usuario puede en cualquier momento revocar su consentimiento para el tratamiento de datos personales, enviando una notificación al Operador por correo electrónico a privacy@umfinance.com con la mención &quot;Revocación del consentimiento para el tratamiento de datos personales&quot;.
                  </p>
                  <p className="policy-text">
                    8.5. Toda la información recogida por servicios de terceros, incluidos sistemas de pago, servicios de comunicación y otros proveedores, se almacena y trata por dichas personas (Operadores) de acuerdo con sus Acuerdos de Usuario y Políticas de Privacidad. El Operador no es responsable de las acciones de terceros, incluidos los proveedores de servicios mencionados en este punto.
                  </p>
                  <p className="policy-text">
                    8.6. El Operador en el tratamiento de datos personales garantiza su confidencialidad.
                  </p>
                  <p className="policy-text">
                    8.7. El Operador almacena los datos personales de forma que permita identificar al titular, no más tiempo del necesario para los fines de su tratamiento.
                  </p>
                  <p className="policy-text">
                    8.8. La condición para cesar el tratamiento de datos personales puede ser la consecución de los fines del tratamiento, la expiración del consentimiento del titular, la revocación del consentimiento o la solicitud de cese del tratamiento, así como la detección de un tratamiento ilícito de datos personales.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">9. Lista de acciones realizadas por el Operador con los datos personales obtenidos</h2>
                  <p className="policy-text">
                    9.1. El Operador realiza la recogida, registro, organización, estructuración, almacenamiento, actualización, modificación, extracción, consulta, uso, transferencia, difusión, anonimización, bloqueo, supresión y destrucción de datos personales.
                  </p>
                  <p className="policy-text">
                    9.2. El Operador realiza el tratamiento automatizado de datos personales con la recepción y/o transferencia de la información obtenida a través de redes de telecomunicaciones o sin ella.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">10. Transferencia internacional de datos personales</h2>
                  <p className="policy-text">
                    10.1. El Operador, antes de iniciar la actividad de transferencia internacional de datos personales, debe asegurarse de que el país extranjero al que se transferirán garantiza un nivel adecuado de protección de conformidad con el GDPR.
                  </p>
                  <p className="policy-text">
                    10.2. La transferencia internacional de datos personales en el territorio de países extranjeros que no proporcionan una protección adecuada puede realizarse en los casos previstos expresamente por el GDPR.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">11. Confidencialidad de los datos personales</h2>
                  <p className="policy-text">
                    El Operador y otras personas que hayan obtenido acceso a los datos personales están obligados a no revelarlos a terceros ni divulgarlos sin el consentimiento del titular, a menos que la ley disponga otra cosa.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">12. Disposiciones finales</h2>
                  <p className="policy-text">
                    12.1. El Usuario puede obtener cualquier aclaración sobre cuestiones de interés relacionadas con el tratamiento de sus datos personales, contactando al Operador por correo electrónico a privacy@umfinance.com.
                  </p>
                  <p className="policy-text">
                    12.2. En este documento se reflejarán cualquier cambio en la política de tratamiento de datos personales por parte del Operador. La Política es válida por tiempo indefinido hasta que sea reemplazada por una nueva versión.
                  </p>
                  <p className="policy-text">
                    12.3. La versión actual de la Política está disponible libremente en Internet en https://umfinance.pro/privacy/.
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
