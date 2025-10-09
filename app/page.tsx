'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CloseIcon, LogoIcon, ArrowIcon, ArrowBackIcon, SecureIcon, BurgerIcon } from "../shared/icons";
import { updateSEO, SEO_CONFIGS } from '../utils/seo';
import { submitQuizToGoogleForms, getCurrentTimestamp, getUserAgent } from '../utils/googleForms';
import type { QuizAnswer, QuizSubmission } from '../utils/googleForms';
import CookieBanner from '../shared/components/CookieBanner';

export default function Home() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState<'gender' | 'quiz' | 'results' | 'contact' | 'success'>('gender')
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([])
  const [userEmail, setUserEmail] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState<string>('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setUserEmail(email)
    
    // Clear error when user starts typing
    if (emailError) {
      setEmailError('')
    }
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender)
    setCurrentStep('quiz')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const goBack = () => {
    if (currentStep === 'quiz') {
      setCurrentStep('gender')
      setCurrentQuestion(1)
      setSelectedAnswer(null)
      setQuizAnswers([])
    }
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleContinue = () => {
    if (selectedAnswer) {
      // Save the answer
      const currentQuizQuestion = quizQuestions[currentQuestion as keyof typeof quizQuestions]
      const answerType = currentQuizQuestion?.type === 'card' ? 'card' : 'text'
      
      // For card questions, find the full description
      let answerToSave = selectedAnswer;
      if (currentQuizQuestion?.type === 'card') {
        const cardQuestion = currentQuizQuestion as CardQuestion;
        const selectedOption = cardQuestion.options.find(option => option.name === selectedAnswer);
        if (selectedOption) {
          if (selectedOption.description) {
            answerToSave = `${selectedOption.name} – ${selectedOption.description}`;
          } else {
            answerToSave = selectedOption.name;
          }
        }
      }
      
      const newAnswer: QuizAnswer = {
        questionNumber: currentQuestion,
        question: currentQuizQuestion?.question || '',
        answer: answerToSave,
        answerType: answerType
      }
      
      setQuizAnswers(prev => [...prev, newAnswer])
      console.log(`Question ${currentQuestion}: ${answerToSave}`)
      
      if (currentQuestion === 15) {
        // Move to results screen after question 15
        setCurrentStep('results')
      } else {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      }
    }
  }

  const handleResultsContinue = () => {
    setCurrentStep('contact');
  };

  const handleContactContinue = async () => {
    if (!userEmail.trim()) {
      setEmailError('Por favor, introduzca su correo electrónico')
      return
    }
    
    if (!validateEmail(userEmail)) {
      setEmailError('Por favor, introduzca un correo electrónico válido')
      return
    }

    setIsSubmitting(true);
    
    try {
      // Prepare submission data
      const submission: QuizSubmission = {
        gender: selectedGender || '',
        email: userEmail,
        answers: quizAnswers,
        timestamp: getCurrentTimestamp(),
        userAgent: getUserAgent()
      };

      // Submit to Google Forms
      const success = await submitQuizToGoogleForms(submission);
      
      if (success) {
        setCurrentStep('success');
      } else {
        alert('Hubo un error al enviar los datos. Por favor, intente nuevamente.');
      }
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('Hubo un error al enviar los datos. Por favor, intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset to first screen
  const handleResetQuiz = () => {
    setCurrentStep('gender');
    setCurrentQuestion(1);
    setSelectedAnswer(null);
    setQuizAnswers([]);
    setUserEmail('');
    setSelectedGender(null);
  };

  // Update SEO based on current step
  useEffect(() => {
    switch (currentStep) {
      case 'gender':
        updateSEO(SEO_CONFIGS.home);
        break;
      case 'quiz':
        updateSEO(SEO_CONFIGS.quiz);
        break;
      case 'results':
        updateSEO(SEO_CONFIGS.results);
        break;
      case 'contact':
        updateSEO(SEO_CONFIGS.contact);
        break;
      case 'success':
        updateSEO(SEO_CONFIGS.success);
        break;
      default:
        updateSEO(SEO_CONFIGS.home);
    }
  }, [currentStep]);

  type TextQuestion = {
    question: string;
    type: "text";
    options: string[];
  };

  type CardQuestion = {
    question: string;
    type: "card";
    options: {
      name: string;
      description: string;
      image: string;
    }[];
  };

  type QuizQuestion = TextQuestion | CardQuestion;

  const quizQuestions: Record<number, QuizQuestion> = {
    1: {
      question: "Lunes por la mañana. ¿Cómo empiezas el día?",
      type: "text",
      options: [
        "Tomo café y planifico el día con calma.",
        "Voy directo a la acción: tareas, llamadas, energía.",
        "Dejo que pase el tiempo y ya veré qué ocurre."
      ]
    },
    2: {
      question: "¿Qué película sientes más cercana a tu espíritu?",
      type: "text",
      options: [
        "\"El Lobo de Wall Street\" – dinamismo, riesgo, adrenalina.",
        "\"Una mente brillante\" – análisis y mente fría.",
        "\"Atrápame si puedes\" – flexibilidad y creatividad."
      ]
    },
    3: {
      question: "Tienes 100$ en la mano. ¿Qué harías?",
      type: "text",
      options: [
        "Compraría algo para darme un gusto.",
        "Intentaría multiplicarlos.",
        "Los guardaría, que se queden ahí."
      ]
    },
    4: {
      question: "¿Cómo te relacionas con el riesgo?",
      type: "text",
      options: [
        "Me encanta, el riesgo me da adrenalina.",
        "Lo acepto, si hay lógica y cálculo.",
        "Lo evito, aunque a veces me atrevo."
      ]
    },
    5: {
      question: "Debes tomar una decisión importante. ¿Qué valoras más?",
      type: "text",
      options: [
        "La intuición.",
        "El análisis y los cálculos.",
        "El consejo de alguien en quien confío."
      ]
    },
    6: {
      question: "¿Con qué animal te identificas en el tema del dinero?",
      type: "card",
      options: [
        {
          name: "Tigre",
          description: "ataque rápido, resultado inmediato.",
          image: "/images/tiger.png"
        },
        {
          name: "Búho",
          description: "observo, analizo y actúo.",
          image: "/images/owl.png"
        },
        {
          name: "Tortuga",
          description: "despacio pero seguro.",
          image: "/images/tortoise.png"
        }
      ]
    },
    7: {
      question: "Imagina que el gráfico del precio sube. ¿Qué piensas?",
      type: "text",
      options: [
        "Entrar de inmediato!",
        "Espero confirmación.",
        "Y si de repente baja?"
      ]
    },
    8: {
      question: "¿Qué significa el dinero para ti?",
      type: "text",
      options: [
        "Libertad.",
        "Protección.",
        "Oportunidad de crecimiento."
      ]
    },
    9: {
      question: "Estás con amigos. ¿Qué rol tomas con más frecuencia?",
      type: "card",
      options: [
        {
          name: "Líder",
          description: "marco la dirección.",
          image: "/images/star.png"
        },
        {
          name: "Analista",
          description: "propongo las mejores opciones.",
          image: "/images/friends-analyst.png"
        },
        {
          name: "Equilibrador",
          description: "suavizo los conflictos.",
          image: "/images/friends-balancer.png"
        }
      ]
    },
    10: {
      question: "¿Qué te motiva más?",
      type: "text",
      options: [
        "Resultado rápido.",
        "Crecimiento estable.",
        "Balance: tanto resultado como crecimiento."
      ]
    },
    11: {
      question: "Si pierdes en un juego, ¿cuál es tu reacción?",
      type: "text",
      options: [
        "¡Revancha! Quiero recuperar lo mío.",
        "Analizo dónde me equivoqué.",
        "No pasa nada, lo intentaré otra vez."
      ]
    },
    12: {
      question: "¿Qué elemento sientes más cercano?",
      type: "card",
      options: [
        {
          name: "Fuego",
          description: "energía e impulso.",
          image: "/images/element-fire.png"
        },
        {
          name: "Agua",
          description: "flexibilidad y movimiento.",
          image: "/images/element-water.png"
        },
        {
          name: "Tierra",
          description: "estabilidad y solidez.",
          image: "/images/element-earth.png"
        }
      ]
    },
    13: {
      question: "¿Qué valoras más?",
      type: "card",
      options: [
        {
          name: "El tiempo.",
          description: "",
          image: "/images/value-time.png"
        },
        {
          name: "El dinero.",
          description: "",
          image: "/images/value-money.png"
        },
        {
          name: "Las oportunidades.",
          description: "",
          image: "/images/value-opportunities.png"
        }
      ]
    },
    14: {
      question: "Imagina que tienes un superpoder. ¿Cuál elegirías?",
      type: "text",
      options: [
        "Ver el futuro.",
        "Controlar las emociones.",
        "Atraer la suerte."
      ]
    },
    15: {
      question: "Si tuvieras la oportunidad de cambiar tu vida financiera mañana, ¿qué escogerías?",
      type: "text",
      options: [
        "Un camino rápido con riesgo, pero con posibilidad de gran éxito.",
        "Estabilidad y tranquilidad.",
        "Una combinación – algo de estabilidad y algo de dinamismo."
      ]
    }
  }

  const currentQuizQuestion = quizQuestions[currentQuestion as keyof typeof quizQuestions]

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          {currentStep === 'quiz' ? (
            <>
              <button className="header-back" onClick={goBack} aria-label="Volver">
                <ArrowBackIcon />
              </button>
              <Link href="/" className="header-logo-center"><LogoIcon/></Link>
              <button className="menu-button" onClick={toggleMenu}>
                <BurgerIcon/>
              </button>
            </>
          ) : (
            <>
              <Link href="/">
                <LogoIcon/>
              </Link>
              <button className="menu-button" onClick={toggleMenu}>
                <BurgerIcon/>
              </button>
            </>
          )}
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
            <Link href="/politica" className="menu-item">Política de Privacidad</Link>
            <Link href="/cookies" className="menu-item">Política de Cookies</Link>
            <a href="#" className="menu-item">Contacta con Nosotros</a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {currentStep === 'gender' ? (
          <div className="hero-section">
            <h1 className="main-title">
              CUESTIONARIO:<br />
              TU MENTALIDAD FINANCIERA
            </h1>
            
            <p className="subtitle">PRUEBA DE 2 MINUTOS</p>
            
            <div className="cards-container">
              <div 
                className={`card ${selectedGender === 'Hombre' ? 'selected' : ''}`}
                onClick={() => handleGenderSelect('Hombre')}
              >
                <div className="card-image">
                  <Image src="/images/man-card.png" alt="Hombre" width={200} height={200} />
                </div>
                <div className="card-button">
                  <span>Hombre</span>
                  <ArrowIcon/>
                </div>
              </div>

              <div 
                className={`card ${selectedGender === 'Mujer' ? 'selected' : ''}`}
                onClick={() => handleGenderSelect('Mujer')}
              >
                <div className="card-image">
                  <Image src="/images/woman-card.png" alt="Mujer" width={200} height={200} />
                </div>
                <div className="card-button">
                  <span>Mujer</span>
                  <ArrowIcon/>
                </div>
              </div>
            </div>

            <p className="terms-text">
              Al hacer clic en &quot;Hombre&quot; o &quot;Mujer&quot;, acepta la Política de Privacidad y la Política de Cookies
            </p>
          </div>
        ) : currentStep === 'quiz' ? (
          <div className="quiz-section">
            {/* Progress Indicator */}
            <div className="progress-indicator">
              <span className="progress-text">{currentQuestion}/15</span>
            </div>

            {/* Back Button moved to header */}

            {/* Question */}
            <h2 className="question-text">{currentQuizQuestion?.question}</h2>

            {/* Answer Options */}
            {currentQuizQuestion?.type === 'card' ? (
              <div className="animal-cards">
                {(currentQuizQuestion as CardQuestion).options.map((option, index) => (
                  <div 
                    key={index}
                    className={`animal-card ${selectedAnswer === option.name ? 'selected' : ''}`}
                    onClick={() => handleAnswerSelect(option.name)}
                  >
                    <div className="animal-description">
                      {option.description}
                    </div>
                    <div className="animal-image">
                      <Image src={option.image} alt={option.name} width={200} height={200} />
                    </div>
                    <div className="animal-button">
                      <span>{option.name}</span>
                      <ArrowIcon/>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="answer-options">
                {currentQuizQuestion?.options.map((option: string, index: number) => (
                  <div 
                    key={index}
                    className={`answer-option ${selectedAnswer === option ? 'selected' : ''}`}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    <span className="option-text">{option}</span>
                    {selectedAnswer === option && (
                      <div className="option-check">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="10" fill="#3D568F"/>
                          <path d="M6.5 10L8.5 12L13.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Continue Button */}
            <button 
              className={`continue-button ${selectedAnswer ? 'active' : ''}`}
              onClick={handleContinue}
              disabled={!selectedAnswer}
            >
              Continuar
            </button>
          </div>
        ) : currentStep === 'results' ? (
          <div className="results-section">
            {/* Results Image */}
            <div className="results-image">
              <Image src="/images/result-image.png" alt="Resultados del quiz" width={227} height={227} />
            </div>

            {/* Results Percentage */}
            <div className="results-percentage">
              <p className="results-percentage-label">Probabilidad de su crecimiento financiero:</p>
              <p className="results-percentage-value">97%</p>
            </div>

            {/* Results Description */}
            <div className="results-description">
              <p>
                Tus respuestas muestran que tienes cualidades que son perfectas
                para el crecimiento financiero. Usted es capaz de equilibrar el
                riesgo y la lógica — esto es lo que se necesita para el comercio y
                las opciones binarias.
              </p>
            </div>

            {/* Results Question */}
            <h2 className="results-question">
              ¿Quieres ver cómo es tu estilo trabaja en el mercado?
            </h2>

            {/* Continue Button */}
            <button className="results-continue-button" onClick={handleResultsContinue}>
              Continuar
            </button>
          </div>
        ) : currentStep === 'contact' ? (
          <div className="contact-section">
            <div className="contact-container">
              <div className="contact-content">
                <div className="contact-form">
                  <h2 className="contact-title">
                    Ingrese su correo electrónico para ver el Resumen de su Perfil personal
                  </h2>
                  
                  <div className="input-container">
                    <input 
                      type="email" 
                      className={`email-input ${emailError ? 'error' : ''}`}
                      placeholder="Ingrese su correo electrónico"
                      value={userEmail}
                      onChange={handleEmailChange}
                      required
                    />
                    {emailError && (
                      <div className="error-message">
                        {emailError}
                      </div>
                    )}
                  </div>
                  
                  <div className="privacy-info">
                    <div className="lock-icon">
                      <SecureIcon/>
                    </div>
                    <p className="privacy-text">
                      Respetamos su privacidad y nos comprometemos a proteger sus datos personales. 
                      Sus datos serán tratados de acuerdo con nuestra Política de privacidad.
                    </p>
                  </div>
                </div>
                
                <button 
                  className={`contact-continue-button ${userEmail.trim() ? 'active' : ''}`}
                  onClick={handleContactContinue}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Continuar'}
                </button>
              </div>
            </div>
          </div>
        ) : currentStep === 'success' ? (
          <div className="success-section">
            <div className="success-container">
              <div className="success-content">
                <div className="success-message">
                  <div className="success-image">
                    <Image src="/images/success-envelope.png" alt="Éxito" width={200} height={200} />
                  </div>
                  <h2 className="success-title">
                    ¡Éxito!<br />
                    Revisa tu correo electrónico
                  </h2>
                </div>
                
                <button className="success-continue-button" onClick={handleResetQuiz}>
                  Completar el cuestionario
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </main>
      
      <CookieBanner 
        onAccept={() => {
          console.log('Cookies accepted')
          // Здесь можно добавить логику для активации аналитики и других сервисов
        }}
        onReject={() => {
          console.log('Cookies rejected')
          // Здесь можно добавить логику для отключения аналитики
        }}
      />
    </div>
  )
}
