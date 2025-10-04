// Test submission without email field
import { submitQuizToGoogleForms, getCurrentTimestamp, getUserAgent } from './googleForms';
import type { QuizSubmission } from './googleForms';

export const testSubmissionWithoutEmail = async () => {
  const testData: QuizSubmission = {
  gender: 'Hombre',
  email: 'test@example.com', // Will be ignored since field not found
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
      }
    ],
    timestamp: getCurrentTimestamp(),
    userAgent: getUserAgent()
  };

  console.log('Testing submission without email field...');
  console.log('Test data:', testData);

  try {
    const success = await submitQuizToGoogleForms(testData);
    console.log('Submission result:', success ? 'SUCCESS' : 'FAILED');
    return success;
  } catch (error) {
    console.error('Test failed:', error);
    return false;
  }
};

// Make available globally for testing
if (typeof window !== 'undefined') {
  (window as any).testSubmissionWithoutEmail = testSubmissionWithoutEmail;
  console.log('Test function available as: window.testSubmissionWithoutEmail()');
}
