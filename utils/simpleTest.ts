// Simple test for Google Forms submission
export const testSimpleSubmission = async () => {
  console.log('Testing simple submission with URL method...');
  
  try {
    // Use URL method instead of POST
    const params = new URLSearchParams();
    params.append('entry.439601149', 'Hombre');
    
    const url = `https://docs.google.com/forms/d/e/1FAIpQLScxyI2NJUfGOv0sOkqkNoLcduuhZ7f3olF4lSydZ6_Ccl1-ig/formResponse?${params.toString()}`;
    
    console.log('Opening URL:', url);
    
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      console.log('Simple submission completed - form opened in new window');
      return true;
    } else {
      console.error('Failed to open new window');
      return false;
    }
  } catch (error) {
    console.error('Simple submission failed:', error);
    return false;
  }
};

// Test with URL parameters instead of POST
export const testURLSubmission = () => {
  const params = new URLSearchParams();
  params.append('entry.439601149', 'Hombre');
  params.append('entry.1845423842', 'Tomo café y planifico el día con calma.');
  params.append('entry.1826319686', '"El Lobo de Wall Street" – dinamismo, riesgo, adrenalina.');
  
  const url = `https://docs.google.com/forms/d/e/1FAIpQLScxyI2NJUfGOv0sOkqkNoLcduuhZ7f3olF4lSydZ6_Ccl1-ig/formResponse?${params.toString()}`;
  
  console.log('URL for testing:', url);
  
  // Open in new tab for testing
  window.open(url, '_blank');
  
  return url;
};

// Make available globally
if (typeof window !== 'undefined') {
  (window as any).testSimpleSubmission = testSimpleSubmission;
  (window as any).testURLSubmission = testURLSubmission;
  console.log('Test functions available:');
  console.log('- window.testSimpleSubmission()');
  console.log('- window.testURLSubmission()');
}
