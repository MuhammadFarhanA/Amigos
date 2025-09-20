import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, BookOpen, Globe } from 'lucide-react';
import clientSuccessesData from '../data/clientSuccesses.json';

const TestimonialsSection: React.FC = () => {
  // Import client success data
  const clientSuccesses = clientSuccessesData;
  
  // Triple the array for seamless loop
  const tripleClients = [...clientSuccesses, ...clientSuccesses, ...clientSuccesses];


  return (
    <motion.section 
      className="py-12 md:py-20 bg-gray-50 overflow-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Static Background Pattern */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-16 left-1/4 w-20 h-20 bg-[#1A2A44] rounded-full" />
        <div className="absolute top-64 right-1/3 w-16 h-16 bg-[#FF4500] rounded-full" />
        <div className="absolute bottom-32 left-1/2 w-24 h-24 bg-[#1A2A44] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#1A2A44] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Success Stories
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Real students, real universities, real success. See where our clients are studying around the world.
          </motion.p>
        </motion.div>
      </div>

      {/* Continuous Scrolling Testimonials */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex animate-scroll-left space-x-4 md:space-x-6">
          {tripleClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl shadow-xl p-6 mx-2 border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Prominent Country Header */}
              <div className="bg-gradient-to-r from-[#1A2A44] to-[#2A3A54] rounded-xl p-4 mb-4 -mx-2 -mt-2 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-2 right-2 w-16 h-16 border border-white/20 rounded-full" />
                  <div className="absolute bottom-2 left-2 w-12 h-12 border border-white/20 rounded-full" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={`https://flagcdn.com/w40/${client.flagCode}.png`}
                        alt={`${client.country} flag`}
                        className="w-10 h-7 object-cover rounded shadow-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const span = document.createElement('span');
                            span.textContent = client.flag;
                            span.className = 'text-3xl';
                            parent.appendChild(span);
                          }
                        }}
                      />
                      <span className="text-3xl">{client.flag}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{client.country}</h4>
                      <p className="text-white/80 text-sm">Study Destination</p>
                    </div>
                  </div>
                  <div className="p-2 bg-[#FF4500] rounded-full">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Student Info */}
              <div className="mb-4">
                <h3 className="font-bold text-xl text-[#1A2A44] mb-1">{client.name}</h3>
                <p className="text-gray-600 flex items-center text-sm">
                  <Globe className="h-4 w-4 mr-2" />
                  {client.nationality} Student
                </p>
              </div>

              {/* University - Highlighted */}
              <div className="bg-gradient-to-r from-[#FF4500]/10 to-[#FF6B35]/10 rounded-xl p-4 mb-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-[#FF4500] rounded-lg flex-shrink-0 mt-1">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#1A2A44] text-lg leading-tight mb-1">
                      {client.university}
                    </h4>
                    <p className="text-gray-600 text-sm">University</p>
                  </div>
                </div>
              </div>

              {/* Course Info */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-[#1A2A44] rounded-lg flex-shrink-0 mt-1">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium leading-tight">
                      {client.course}
                    </p>
                    <p className="text-gray-500 text-sm">Course of Study</p>
                  </div>
                </div>
              </div>

              {/* Success Badge */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 border border-green-200">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 font-semibold text-sm">
                    ✅ Visa Approved & Enrolled
                  </span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Statistics */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-[#FF4500] mb-2">{clientSuccesses.length}+</div>
              <div className="text-sm text-gray-600 font-medium">Success Stories</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-[#1A2A44] mb-2">15+</div>
              <div className="text-sm text-gray-600 font-medium">Countries</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-[#FF4500] mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium">Universities</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-[#1A2A44] mb-2">95%</div>
              <div className="text-sm text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default TestimonialsSection;