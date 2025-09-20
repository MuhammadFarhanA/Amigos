// WhatsApp utility functions
export const WHATSAPP_NUMBER = '+36205895495';

export const openWhatsAppChat = (message?: string) => {
  const baseMessage = message || 'Hi! I would like to schedule a consultation session with Amigos Overseas Education.';
  const encodedMessage = encodeURIComponent(baseMessage);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodedMessage}`;
  
  // Open in new tab
  window.open(whatsappUrl, '_blank');
};

export const getWhatsAppLink = (message?: string) => {
  const baseMessage = message || 'Hi! I would like to schedule a consultation session with Amigos Overseas Education.';
  const encodedMessage = encodeURIComponent(baseMessage);
  return `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodedMessage}`;
};

// Pre-defined messages for different services
export const WHATSAPP_MESSAGES = {
  consultation: 'Hi! I would like to schedule a FREE consultation session with Amigos Overseas Education.',
  studyVisa: 'Hi! I am interested in Study Visa services. Can we schedule a consultation?',
  touristVisa: 'Hi! I am interested in Tourist Visa services. Can we schedule a consultation?',
  professionalCourses: 'Hi! I am interested in Professional Courses. Can we schedule a consultation?',
  postArrival: 'Hi! I would like to know more about your post-arrival settlement services.',
  general: 'Hi! I would like to know more about Amigos Overseas Education services.'
};