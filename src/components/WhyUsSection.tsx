import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Globe, 
  Home, 
  CreditCard, 
  Smartphone, 
  Shield, 
  Briefcase, 
  MapPin,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';
import whyUsData from '../data/whyUs.json';
import { openWhatsAppChat, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface WhyUsSectionProps {
  onGetConsultation: () => void;
}

const WhyUsSection: React.FC<WhyUsSectionProps> = ({ onGetConsultation }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const iconMap = {
    Home,
    CreditCard,
    Smartphone,
    Shield,
    Briefcase,
    MapPin
  };

  return (
    <motion.section 
      className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-[#1A2A44]/5 to-[#FF4500]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-l from-[#FF4500]/5 to-[#1A2A44]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-[#FF4500]/10 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Star className="h-5 w-5 text-[#FF4500] mr-2" />
            <span className="text-[#FF4500] font-semibold">Why Choose Us</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#1A2A44] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Your Success is Our Mission
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            We don't just process visas – we transform dreams into reality with personalized guidance and unmatched expertise.
          </motion.p>
        </motion.div>

        {/* CEO Section - Redesigned */}
        <div className="mb-20">
          <motion.div 
            className="bg-gradient-to-br from-[#1A2A44] via-[#2A3A54] to-[#1A2A44] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
              <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full" />
              <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            
            <div className="relative z-10">
              {/* Header */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="inline-flex p-4 bg-[#FF4500] rounded-full mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Award className="h-12 w-12 text-white" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{whyUsData.ceo.title}</h3>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">{whyUsData.ceo.subtitle}</p>
              </motion.div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Education Card */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="p-3 bg-[#FF4500] rounded-lg mr-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <GraduationCap className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-white">Advanced Qualifications</h4>
                  </div>
                  <ul className="space-y-3">
                    {whyUsData.ceo.degrees.map((degree, index) => (
                      <motion.li 
                        key={index} 
                        className="text-white/90 flex items-center text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <div className="w-3 h-3 bg-[#FF4500] rounded-full mr-4 flex-shrink-0" />
                        {degree}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Experience Card */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="p-3 bg-white/20 rounded-lg mr-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Globe className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-white">Personal Experience</h4>
                  </div>
                  <ul className="space-y-3">
                    {whyUsData.ceo.experience.map((exp, index) => (
                      <motion.li 
                        key={index} 
                        className="text-white/90 flex items-center text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-400 mr-4 flex-shrink-0" />
                        {exp}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Quote Section */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-[#FF4500] fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-2xl md:text-3xl text-white/95 mb-6 leading-relaxed italic font-light">
                    "{whyUsData.ceo.quote}"
                  </blockquote>
                  <p className="text-[#FF4500] font-semibold text-lg">
                    — CEO & Founder, Amigos Overseas Education
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Post-Arrival Services - Redesigned */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold text-[#1A2A44] mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {whyUsData.postArrivalServices.title}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We support you beyond visa approval with comprehensive post-arrival services
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsData.postArrivalServices.services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="p-8">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-[#1A2A44] to-[#2A3A54] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1A2A44] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-[#FF4500] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <ArrowRight className="h-5 w-5 mr-2" />
                      <span>{service.benefit}</span>
                    </div>
                  </div>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A2A44]/0 to-[#FF4500]/0 group-hover:from-[#1A2A44]/5 group-hover:to-[#FF4500]/5 transition-all duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Success Process - Redesigned */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold text-[#1A2A44] mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {whyUsData.successProcess.title}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our proven methodology ensures your success at every step
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {whyUsData.successProcess.steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Connecting Line */}
                  {index < whyUsData.successProcess.steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-[#FF4500] to-[#1A2A44] opacity-30 z-0" />
                  )}
                  
                  <div className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                    {/* Step Number Circle */}
                    <motion.div 
                      className="flex-shrink-0 relative z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-[#FF4500] to-[#FF6B35] rounded-full flex items-center justify-center shadow-2xl">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/30 to-[#FF6B35]/30 rounded-full blur-lg scale-150 -z-10" />
                    </motion.div>

                    {/* Step Content */}
                    <motion.div 
                      className="flex-1 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden"
                      whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <div className="w-full h-full bg-gradient-to-br from-[#1A2A44] to-[#FF4500] rounded-full transform translate-x-16 -translate-y-16" />
                      </div>
                      
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-[#1A2A44] mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {step.description}
                        </p>
                        
                        {/* Progress Indicator */}
                        <div className="mt-6 flex items-center">
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-[#FF4500] to-[#FF6B35] rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${((index + 1) / whyUsData.successProcess.steps.length) * 100}%` }}
                              transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <span className="ml-4 text-sm font-semibold text-[#1A2A44]">
                            Step {index + 1} of {whyUsData.successProcess.steps.length}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Network - Redesigned */}
        <motion.div 
          className="bg-gradient-to-br from-[#1A2A44] to-[#2A3A54] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full" />
            <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="relative z-10">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {whyUsData.globalNetwork.title}
              </motion.h2>
              <motion.p 
                className="text-xl text-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {whyUsData.globalNetwork.subtitle}
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {whyUsData.globalNetwork.regions.map((region, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-6 text-[#FF4500]">
                      {region.name}
                    </h3>
                    <div className="space-y-3">
                      {region.countries.map((country, countryIndex) => (
                        <motion.div 
                          key={countryIndex} 
                          className="flex items-center justify-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.1) + (countryIndex * 0.05) }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src={country.flag} 
                            alt={`${country.name} flag`}
                            className="w-8 h-6 object-cover rounded shadow-md"
                          />
                          <span className="font-medium">{country.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-2xl font-bold text-[#FF4500] mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {whyUsData.globalNetwork.additionalDestinations}
              </motion.p>
              
              <motion.button
                onClick={() => openWhatsAppChat(WHATSAPP_MESSAGES.consultation)}
                className="px-10 py-4 bg-[#FF4500] text-white font-bold rounded-2xl hover:bg-[#FF4500]/90 transform hover:scale-105 transition-all duration-300 shadow-2xl text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                Schedule Free Session on WhatsApp
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyUsSection;