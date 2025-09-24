import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { openWhatsAppChat, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { AMIGOS_EMAIL, sendEmail, getFormData, validateFormData, isEmailJSConfigured } from '../utils/email';
import emailjs from '@emailjs/browser';

interface ContactSectionProps {
  onContactPage: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onContactPage }) => {
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton.textContent;
    const form = e.currentTarget;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = '✉️ Sending...';
    submitButton.style.opacity = '0.7';
    
    try {
      // Get form data
      const formData = new FormData(form);
      const templateParams = {
        from_name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        from_email: formData.get('email') as string,
        phone: formData.get('phone') as string || 'Not provided',
        service: formData.get('service') as string || 'General Inquiry',
        message: formData.get('message') as string,
        to_email: 'farhan45778@gmail.com',
        reply_to: formData.get('email') as string,
      };

      console.log('Sending email with params:', templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_m4euhbh',
        'template_363hdni',
        templateParams,
        'j24pfcz6Z2kk2ExR0'
      );

      console.log('EmailJS response:', response);
      
      if (response.status === 200) {
        // Show success state
        submitButton.textContent = '✅ Message Sent!';
        submitButton.style.backgroundColor = '#10B981';
        
        // Reset form after delay
        setTimeout(() => {
          form.reset();
          submitButton.disabled = false;
          submitButton.textContent = originalText;
          submitButton.style.opacity = '1';
          submitButton.style.backgroundColor = '';
        }, 2000);
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
      
    } catch (error) {
      console.error('Email sending error:', error);
      
      // Show error state
      submitButton.textContent = '❌ Failed to Send';
      submitButton.style.backgroundColor = '#EF4444';
      
      // Reset button after delay
      setTimeout(() => {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        submitButton.style.opacity = '1';
        submitButton.style.backgroundColor = '';
      }, 3000);
    }
  };

  return (
    <motion.section 
      id="contact-section" 
      className="py-12 md:py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact Information */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#1A2A44] mb-4 md:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ready to take the next step? Our experienced consultants are here to help you navigate your visa journey with confidence.
            </motion.p>

            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              {[
                { icon: MapPin, title: "Visit Our Office", desc1: "Civic Centre, Mian Plaza, Block D2, Office Number 1", desc2: "Johar Town, Lahore, Pakistan 54782", color: "bg-[#FF4500]" },
                { icon: Phone, title: "WhatsApp Us", desc1: "+36205895495", desc2: "Click to start chat", color: "bg-[#1A2A44]", clickable: true },
                { icon: Mail, title: "Email Us", desc1: AMIGOS_EMAIL, desc2: "Use the contact form below", color: "bg-[#FF4500]" },
                { icon: Clock, title: "Business Hours", desc1: "Monday - Friday: 9:00 AM - 7:00 PM", desc2: "Saturday: 10:00 AM - 4:00 PM", color: "bg-[#1A2A44]" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-start ${item.clickable ? 'cursor-pointer' : ''}`}
                  onClick={item.clickable ? () => openWhatsAppChat(WHATSAPP_MESSAGES.general) : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className={`w-10 h-10 md:w-12 md:h-12 ${item.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base md:text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{item.desc1}</p>
                    <p className={`text-gray-600 text-sm md:text-base ${item.clickable && !item.isEmail ? 'text-[#FF4500] font-medium' : ''}`}>{item.desc2}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => openWhatsAppChat(WHATSAPP_MESSAGES.consultation)}
              className="px-6 md:px-8 py-3 md:py-4 bg-[#1A2A44] text-white font-semibold rounded-lg hover:bg-[#1A2A44]/90 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg text-base md:text-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(26, 42, 68, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Schedule WhatsApp Consultation</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Contact Form Preview */}
          <motion.div 
            className="bg-gray-50 rounded-2xl p-6 md:p-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Quick Inquiry
            </motion.h3>
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              {/* Name Fields */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2A44] focus:border-[#1A2A44] transition-colors duration-200 text-sm md:text-base cursor-text"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2A44] focus:border-[#1A2A44] transition-colors duration-200 text-sm md:text-base cursor-text"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2A44] focus:border-[#1A2A44] transition-colors duration-200 text-sm md:text-base cursor-text"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Phone Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2A44] focus:border-[#1A2A44] transition-colors duration-200 text-sm md:text-base cursor-text"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Service Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.select 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2A44] focus:border-[#1A2A44] transition-colors duration-200 text-sm md:text-base cursor-pointer"
                  name="service"
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="">Select a service</option>
                  <option value="study-visa">Study Visa</option>
                  <option value="tourist-visa">Tourist Visa</option>
                  <option value="professional-courses">Professional Courses</option>
                </motion.select>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <motion.textarea
                  rows={4}
                  placeholder="Your Message"
                  name="message"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2A44] focus:border-[#1A2A44] transition-colors duration-200 text-sm md:text-base cursor-text"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-[#FF4500] text-white font-semibold rounded-lg hover:bg-[#FF4500]/90 transition-colors duration-300 text-sm md:text-base cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(255, 69, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;