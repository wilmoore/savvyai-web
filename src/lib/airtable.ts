export interface FormData {
  name: string;
  email: string;
  company: string;
  challenge: string;
  selectedSigns?: string[];
}

export async function submitToAirtable(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    // In a real implementation, you would make this call to your backend API
    // For now, we'll simulate the submission and log the data
    console.log('Submitting to Airtable:', {
      baseId: 'appZ7MIc72G9GDu2L',
      tableId: 'tblSlR3BAStJBhjpk',
      data: {
        Name: formData.name,
        Email: formData.email,
        Company: formData.company,
        Body: formData.challenge,
        ...(formData.selectedSigns && formData.selectedSigns.length > 0 && {
          'Selected Signs': formData.selectedSigns.join(', ')
        })
      }
    });

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For now, return success (in production, this would be the actual API response)
    return {
      success: true,
      message: 'Form submitted successfully! We\'ll be in touch soon.'
    };
  } catch (error) {
    console.error('Error submitting to Airtable:', error);
    return {
      success: false,
      message: 'Failed to submit form. Please try again or contact us directly.'
    };
  }
}
