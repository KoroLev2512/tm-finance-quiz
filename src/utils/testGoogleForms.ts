// Test script for Google Forms integration
import { submitQuizToGoogleForms, getCurrentTimestamp, getUserAgent } from './googleForms';
import type { QuizSubmission } from './googleForms';

// Test data
const testSubmission: QuizSubmission = {
  gender: 'Hombre',
  email: 'test@example.com',
  answers: [
    {
      questionNumber: 1,
      question: "Lunes por la mañana. ¿Cómo empiezas el día?",
      answer: "Tomo café y planifico el día con calma.",
      answerType: 'text'
    },
    {
      questionNumber: 2,
      question: "¿Qué película sientes más cercana a tu espíritu?",
      answer: "\"El Lobo de Wall Street\" – dinamismo, riesgo, adrenalina.",
      answerType: 'text'
    },
    {
      questionNumber: 3,
      question: "Tienes 100$ en la mano. ¿Qué harías?",
      answer: "Compraría algo para darme un gusto.",
      answerType: 'text'
    },
    {
      questionNumber: 4,
      question: "¿Cómo te relacionas con el riesgo?",
      answer: "Me encanta, el riesgo me da adrenalina.",
      answerType: 'text'
    },
    {
      questionNumber: 5,
      question: "Debes tomar una decisión importante. ¿Qué valoras más?",
      answer: "La intuición.",
      answerType: 'text'
    },
    {
      questionNumber: 6,
      question: "¿Con qué animal te identificas en el tema del dinero?",
      answer: "Tigre – ataque rápido, resultado inmediato.",
      answerType: 'card'
    },
    {
      questionNumber: 7,
      question: "Imagina que el gráfico del precio sube. ¿Qué piensas?",
      answer: "Entrar de inmediato!",
      answerType: 'text'
    },
    {
      questionNumber: 8,
      question: "¿Qué significa el dinero para ti?",
      answer: "Libertad.",
      answerType: 'text'
    },
    {
      questionNumber: 9,
      question: "Estás con amigos. ¿Qué rol tomas con más frecuencia?",
      answer: "Líder – marco la dirección.",
      answerType: 'card'
    },
    {
      questionNumber: 10,
      question: "¿Qué te motiva más?",
      answer: "Resultado rápido.",
      answerType: 'text'
    },
    {
      questionNumber: 11,
      question: "Si pierdes en un juego, ¿cuál es tu reacción?",
      answer: "¡Revancha! Quiero recuperar lo mío.",
      answerType: 'text'
    },
    {
      questionNumber: 12,
      question: "¿Qué elemento sientes más cercano?",
      answer: "Fuego – energía e impulso.",
      answerType: 'card'
    },
    {
      questionNumber: 13,
      question: "¿Qué valoras más?",
      answer: "El tiempo.",
      answerType: 'card'
    },
    {
      questionNumber: 14,
      question: "Imagina que tienes un superpoder. ¿Cuál elegirías?",
      answer: "Ver el futuro.",
      answerType: 'text'
    },
    {
      questionNumber: 15,
      question: "Si tuvieras la oportunidad de cambiar tu vida financiera mañana, ¿qué escogerías?",
      answer: "Un camino rápido con riesgo, pero con posibilidad de gran éxito.",
      answerType: 'text'
    }
  ],
  timestamp: getCurrentTimestamp(),
  userAgent: getUserAgent()
};

// Test function
export const testGoogleFormsSubmission = async () => {
  console.log('Testing Google Forms submission...');
  console.log('Test data:', testSubmission);
  
  try {
    const success = await submitQuizToGoogleForms(testSubmission);
    console.log('Submission result:', success ? 'SUCCESS' : 'FAILED');
    return success;
  } catch (error) {
    console.error('Test failed:', error);
    return false;
  }
};

// Run test if this file is executed directly
if (typeof window !== 'undefined') {
  // Make test function available globally for console testing
  (window as any).testGoogleFormsSubmission = testGoogleFormsSubmission;
  console.log('Test function available as: window.testGoogleFormsSubmission()');
}
