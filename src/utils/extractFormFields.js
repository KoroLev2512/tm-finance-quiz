// Script to extract Google Forms field IDs
// Run this in browser console on the Google Forms page

function extractGoogleFormFields() {
  // Get all input elements
  const inputs = document.querySelectorAll('input[name^="entry."]');
  const textareas = document.querySelectorAll('textarea[name^="entry."]');
  const selects = document.querySelectorAll('select[name^="entry."]');
  
  const fields = {};
  
  // Extract input fields
  inputs.forEach(input => {
    const name = input.name;
    const label = input.closest('div[role="listitem"]')?.querySelector('label')?.textContent || 
                  input.closest('div[role="listitem"]')?.querySelector('span')?.textContent ||
                  input.placeholder ||
                  'Unknown field';
    
    fields[name] = label.trim();
  });
  
  // Extract textarea fields
  textareas.forEach(textarea => {
    const name = textarea.name;
    const label = textarea.closest('div[role="listitem"]')?.querySelector('label')?.textContent || 
                  textarea.closest('div[role="listitem"]')?.querySelector('span')?.textContent ||
                  textarea.placeholder ||
                  'Unknown field';
    
    fields[name] = label.trim();
  });
  
  // Extract select fields
  selects.forEach(select => {
    const name = select.name;
    const label = select.closest('div[role="listitem"]')?.querySelector('label')?.textContent || 
                  select.closest('div[role="listitem"]')?.querySelector('span')?.textContent ||
                  'Unknown field';
    
    fields[name] = label.trim();
  });
  
  return fields;
}

// Run the extraction
const formFields = extractGoogleFormFields();
console.log('Google Forms Field IDs:');
console.log(JSON.stringify(formFields, null, 2));

// Also log individual field IDs for easy copying
console.log('\nIndividual Field IDs:');
Object.entries(formFields).forEach(([fieldId, label]) => {
  console.log(`${fieldId}: "${label}"`);
});
