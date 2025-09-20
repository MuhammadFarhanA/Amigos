import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Plane, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import servicesData from '../data/services.json';

interface ServicesSectionProps {
  onPageChange: (page: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onPageChange }) => {

  const iconMap = {
    GraduationCap,
    Plane,
    BookOpen
  };

  return (
    <motion.section 
      className="py-12 md:py-20 bg-gray-50 relative overflow-hidden min-h-screen" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1A2A44] rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#FF4500] rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#1A2A44] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#1A2A44] my-4 mt-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our Expert Services
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Comprehensive visa and education consultancy services designed to make your international journey seamless and successful.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isOrange = service.color === 'orange';
            
            return (
              <motion.div
                key={service.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100`}
                onClick={() => onPageChange(service.page)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 } 
                }}
              >
                <div className="p-6 md:p-8">
                  <motion.div 
                    className={`w-14 h-14 md:w-16 md:h-16 ${isOrange ? 'bg-[#FF4500]' : 'bg-[#1A2A44]'} rounded-2xl flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6 md:mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start text-gray-700 text-sm md:text-base"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className={`h-4 w-4 md:h-5 md:w-5 ${isOrange ? 'text-[#FF4500]' : 'text-[#1A2A44]'} mr-3 flex-shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div 
                    className={`flex items-center ${isOrange ? 'text-[#FF4500]' : 'text-[#1A2A44]'} font-semibold text-sm md:text-base cursor-pointer`}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;