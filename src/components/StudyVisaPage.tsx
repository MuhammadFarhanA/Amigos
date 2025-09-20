import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  CheckCircle, 
  Users, 
  Award, 
  Home, 
  CreditCard, 
  Shield, 
  Smartphone, 
  Briefcase, 
  MapPin,
  Target,
  BookOpen,
  FileText,
  Plane,
  Quote,
  MessageCircle,
  Mail,
  Building,
  Star,
  Globe
} from 'lucide-react';
import studyVisaData from '../data/studyVisa.json';
import { openWhatsAppChat, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { AMIGOS_EMAIL } from '../utils/email';

const StudyVisaPage: React.FC = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const iconMap = {
    CheckCircle,
    Users,
    GraduationCap,
    Award,
    Home,
    CreditCard,
    Shield,
    Smartphone,
    Briefcase,
    MapPin,
    Target,
    BookOpen,
    FileText,
    Plane
  };

  // Get region display names
  const getRegionDisplayName = (region: string) => {
    const regionNames: { [key: string]: string } = {
      'europe': 'Europe',
      'americas': 'Americas', 
      'asia': 'Asia & Middle East',
      'oceania': 'Oceania',
      'africa': 'Africa'
    };
    return regionNames[region] || region;
  };

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-br from-[#1A2A44] via-[#2A3A54] to-[#1A2A44] py-16 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex p-4 bg-[#FF4500] rounded-full">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {studyVisaData.title}
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {studyVisaData.subtitle}
          </motion.p>
          <motion.p 
            className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {studyVisaData.description}
          </motion.p>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A44] mb-4">🌍 Why Choose Us?</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studyVisaData.whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              
              return (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-[#FF4500] rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">✅ {item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Post-Arrival Services Section */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A44] mb-4">
              🛠 Our Unique Post-Arrival Services
            </h2>
            <p className="text-lg text-gray-600">(What Others Don't Offer!)</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studyVisaData.postArrivalServices.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              
              return (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <div className="flex items-start">
                    <motion.div 
                      className="w-12 h-12 bg-[#1A2A44] rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Countries Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A44] mb-4">
              🌍 Countries We Specialize In
            </h2>
            <p className="text-lg text-gray-600">50+ destinations with proven visa success</p>
          </motion.div>

          {/* Countries by Region - Dynamic Grid */}
          <div className="space-y-8">
            {Object.entries(studyVisaData.countries).map(([region, countries], index) => (
              <motion.div 
                key={region} 
                className="bg-white rounded-xl shadow-lg p-6 w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h3 className="text-xl font-bold text-[#1A2A44] mb-6 text-center">
                  {getRegionDisplayName(region)}
                </h3>
                <div className={`grid gap-3 ${
                  countries.length <= 2 ? 'grid-cols-1 md:grid-cols-2 max-w-md mx-auto' :
                  countries.length <= 8 ? 'grid-cols-2 md:grid-cols-4' :
                  'grid-cols-2 md:grid-cols-4 lg:grid-cols-6'
                }`}>
                  {countries.map((country, countryIndex) => (
                    <motion.div 
                      key={countryIndex} 
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (countryIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                      <img 
                        src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                        alt={`${country.name} flag`}
                        className="w-6 h-4 object-cover rounded shadow-sm flex-shrink-0"
                        onError={(e) => {
                          // Fallback to emoji if flag image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const span = document.createElement('span');
                            span.textContent = country.flag;
                            span.className = 'text-lg flex-shrink-0';
                            parent.insertBefore(span, target);
                          }
                        }}
                      />
                      <span className="text-gray-700 text-sm font-medium">{country.name}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#FF4500]/10 text-[#FF4500]">
                    {countries.length} destination{countries.length > 1 ? 's' : ''} available
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Total Countries Summary */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF4500] to-[#FF6B35] text-white rounded-full shadow-lg">
              <Globe className="h-5 w-5 mr-2" />
              <span className="font-semibold">
                {Object.values(studyVisaData.countries).reduce((total, countries) => total + countries.length, 0)}+ Countries Available
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CEO Quote Section */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-[#1A2A44] via-[#2A3A54] to-[#1A2A44] relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="p-3 bg-[#FF4500] rounded-full">
                <Quote className="h-8 w-8 text-white" />
              </div>
            </motion.div>
            
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              The Amigos Difference
            </motion.h3>
            
            <motion.blockquote 
              className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              "{studyVisaData.ceoQuote}"
            </motion.blockquote>
            
            <motion.p 
              className="text-white/80 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              – {studyVisaData.ceoCredentials}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* 4-Step Process Section */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A44] mb-4">📌 Our 4-Step Process</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studyVisaData.process.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              
              return (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[#FF4500] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto shadow-xl">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1A2A44] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A44] mb-4">💬 Students Love Us Because…</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {studyVisaData.testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#FF4500] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-[#FF4500] via-[#FF6B35] to-[#FF4500] relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full" />
          <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            📞 Take Your First Step Today!
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {studyVisaData.cta}
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white"
              onClick={() => openWhatsAppChat(WHATSAPP_MESSAGES.studyVisa)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              style={{ cursor: 'pointer' }}
            >
              <MessageCircle className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">WhatsApp Chat</p>
              <p className="text-sm">+36205895495</p>
              <p className="text-xs mt-1 opacity-80">Click to start chat</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
             whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Mail className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Email</p>
             <p className="text-sm">{AMIGOS_EMAIL}</p>
             <p className="text-xs mt-1 opacity-80">Use contact form to email</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Building className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Office</p>
              <p className="text-sm">Johar Town, Lahore</p>
            </motion.div>
          </div>
          
          <motion.button 
            onClick={() => openWhatsAppChat(WHATSAPP_MESSAGES.studyVisa)}
            className="px-8 py-4 bg-white text-[#FF4500] font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule WhatsApp Consultation
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default StudyVisaPage;