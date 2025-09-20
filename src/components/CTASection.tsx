import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Users, Clock } from 'lucide-react';
import ctaData from '../data/cta.json';
import { openWhatsAppChat, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface CTASectionProps {
  onGetConsultation: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onGetConsultation }) => {
  const [scrollY, setScrollY] = useState(0);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const iconMap = {
    Phone,
    Users,
    Clock
  };

  return (
    <motion.section 
      className="py-12 md:py-20 bg-[#1A2A44] relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10 -z-10"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {ctaData.title}
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {ctaData.subtitle}
          </motion.p>
          <motion.p 
            className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {ctaData.description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {ctaData.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-14 h-14 md:w-16 md:h-16 bg-[#FF4500] rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 10,
                    boxShadow: "0 10px 30px rgba(255, 69, 0, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-lg md:text-xl font-semibold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 + (index * 0.2) }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-sm md:text-base text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + (index * 0.2) }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => openWhatsAppChat(WHATSAPP_MESSAGES.consultation)}
            className="px-8 md:px-10 py-3 md:py-4 bg-[#FF4500] text-white font-semibold rounded-lg hover:bg-[#FF4500]/90 transform hover:scale-105 transition-all duration-300 shadow-lg text-base md:text-lg mb-4 cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(255, 69, 0, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 5px 15px rgba(255, 69, 0, 0.2)",
                "0 8px 25px rgba(255, 69, 0, 0.3)",
                "0 5px 15px rgba(255, 69, 0, 0.2)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Schedule Free Consultation on WhatsApp
          </motion.button>
          <motion.p 
            className="text-sm md:text-base text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            viewport={{ once: true }}
          >
            {ctaData.cta.secondary}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;