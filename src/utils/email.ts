// EmailJS configuration and utility functions
import emailjs from '@emailjs/browser';

// EmailJS configuration - Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_m4euhbh'; // Your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_363hdni'; // Your EmailJS template ID  
const EMAILJS_PUBLIC_KEY = 'j24pfcz6Z2kk2ExR0'; // Your EmailJS public key

export const AMIGOS_EMAIL = 'info@amigosoverseaseducation.com';

// Initialize EmailJS with public key
emailjs.init(EMAILJS_PUBLIC_KEY);

// Interface for form data
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Function to send email using EmailJS
export const sendEmail = async (formData: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  try {
    console.log('Attempting to send email with data:', formData);
    
    // Prepare template parameters matching your EmailJS template
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      service: formData.service || 'General Inquiry',
      message: formData.message,
      to_email: AMIGOS_EMAIL,
      reply_to: formData.email,
    };

    console.log('Template parameters:', templateParams);

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('EmailJS response:', response);

    if (response.status === 200) {
      console.log('Email sent successfully');
      return { success: true };
    } else {
      console.error('EmailJS returned non-200 status:', response.status);
      return { success: false, error: `Email service returned status: ${response.status}` };
    }
  } catch (error) {
    console.error('EmailJS error details:', error);
    
    // More specific error handling
    if (error instanceof Error) {
      return { success: false, error: error.message };
    } else if (typeof error === 'object' && error !== null) {
      const errorObj = error as any;
      if (errorObj.status) {
        return { success: false, error: `Email service error (${errorObj.status}): ${errorObj.text || 'Unknown error'}` };
      }
    }
    
    return { success: false, error: 'Failed to send email. Please check your EmailJS configuration.' };
  }
};

// Function to extract form data from form element
export const getFormData = (formElement: HTMLFormElement): ContactFormData => {
  const formData = new FormData(formElement);
  return {
    firstName: formData.get('firstName') as string || '',
    lastName: formData.get('lastName') as string || '',
    email: formData.get('email') as string || '',
    phone: formData.get('phone') as string || '',
    service: formData.get('service') as string || '',
    message: formData.get('message') as string || ''
  };
};

// Enhanced validation function
export const validateFormData = (data: ContactFormData): string | null => {
  if (!data.firstName.trim()) {
    return 'First name is required';
  }
  if (!data.lastName.trim()) {
    return 'Last name is required';
  }
  if (!data.email.trim()) {
    return 'Email address is required';
  }
  if (!data.message.trim()) {
    return 'Message is required';
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return 'Please enter a valid email address';
  }
  
  return null;
};

// Function to check if EmailJS is properly configured
export const isEmailJSConfigured = (): boolean => {
  return EMAILJS_SERVICE_ID !== 'service_your_service_id' && 
         EMAILJS_TEMPLATE_ID !== 'template_your_template_id' && 
         EMAILJS_PUBLIC_KEY !== 'your_public_key_here';
};