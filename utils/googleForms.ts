// Google Forms integration utility
export interface QuizAnswer {
  questionNumber: number;
  question: string;
  answer: string;
  answerType: 'text' | 'card';
}

export interface QuizSubmission {
  gender: string;
  email?: string;
  answers: QuizAnswer[];
  timestamp: string;
  userAgent: string;
}

// Google Forms endpoint URL
const GOOGLE_FORMS_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScxyI2NJUfGOv0sOkqkNoLcduuhZ7f3olF4lSydZ6_Ccl1-ig/formResponse';

// Field IDs from Google Forms
const FORM_FIELDS = {
  // Question field IDs (mapped to question numbers)
  question1: 'entry.1845423842',
  question2: 'entry.1826319686', 
  question3: 'entry.110043106',
  question4: 'entry.4438957',
  question5: 'entry.1521791497',
  question6: 'entry.978648829',
  question7: 'entry.300619791',
  question8: 'entry.1643529885',
  question9: 'entry.1377689961',
  question10: 'entry.359832398',
  question11: 'entry.1586763572',
  question12: 'entry.170587666',
  question13: 'entry.2106848767',
  question14: 'entry.1432675719',
  question15: 'entry.1186733816',
  
  // Additional fields
  gender: 'entry.439601149', // Gender field found
  email: 'entry.1450383268', // UPDATED from your link
  timestamp: 'entry.TIMESTAMP_FIELD_ID', // Optional timestamp field
};

export const submitToGoogleForm = async (data: { [key: string]: string }) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const url = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || GOOGLE_FORMS_URL;

  if (!url) {
    console.error('Google Form URL is not defined in environment variables or constants.');
    throw new Error('Google Form URL is not defined.');
  }

  try {
    // Use no-cors mode directly to avoid double submission
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    });
    console.log('Form submitted successfully with no-cors mode');
    return true;
  } catch (error) {
    console.error('Form submission failed:', error);
    return false;
  }
};

export const submitQuizToGoogleForms = async (submission: QuizSubmission): Promise<boolean> => {
  const data: { [key: string]: string } = {};

  // Map gender, email, and answers from the submission to the form fields
  data[FORM_FIELDS.gender] = submission.gender;
  
  if (submission.email) {
    data[FORM_FIELDS.email] = submission.email;
  }

  submission.answers.forEach(answer => {
    const fieldKey = `question${answer.questionNumber}` as keyof typeof FORM_FIELDS;
    const fieldId = FORM_FIELDS[fieldKey];
    console.log(`Mapping question ${answer.questionNumber}: ${fieldKey} -> ${fieldId} = "${answer.answer}"`);
    if (fieldId) {
      data[fieldId] = answer.answer;
    } else {
      console.warn(`No field ID found for question ${answer.questionNumber}`);
    }
  });

  // Log the data being sent for debugging
  console.log('Data being sent to Google Forms:', data);
  console.log('Field IDs being used:', Object.keys(data).map(key => `${key}: ${data[key]}`));

  // Submit via POST request only
  try {
    const success = await submitToGoogleForm(data);
    if (success) {
      console.log('Form submitted successfully via POST');
      return true;
    } else {
      console.log('POST method returned false');
      return false;
    }
  } catch (error) {
    console.error('POST method failed:', error);
    return false;
  }
};

export const submitQuizToGoogleFormsURL = (submission: QuizSubmission): string => {
  const params = new URLSearchParams();
  
  // Add gender
  params.append(FORM_FIELDS.gender, submission.gender);
  
  // Add email if available
  if (submission.email) {
    params.append(FORM_FIELDS.email, submission.email);
  }
  
  // Add each answer
  submission.answers.forEach(answer => {
    const fieldKey = `question${answer.questionNumber}` as keyof typeof FORM_FIELDS;
    const fieldId = FORM_FIELDS[fieldKey];
    if (fieldId) {
      params.append(fieldId, answer.answer);
    }
  });
  
  return `${GOOGLE_FORMS_URL}?${params.toString()}`;
};

// Helper function to get current timestamp
export const getCurrentTimestamp = (): string => {
  return new Date().toISOString();
};

// Helper function to get user agent
export const getUserAgent = (): string => {
  return navigator.userAgent;
};