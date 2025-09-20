import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
} from 'lucide-react';
import eventsData from '../data/events.json';

interface EventsPreviewSectionProps {
  onPageChange: (page: string) => void;
}

const EventsPreviewSection: React.FC<EventsPreviewSectionProps> = ({ onPageChange }) => {
  // Get 2 featured images for gradient preview
  const featuredImages = eventsData.gallery.slice(0, 2);

  return (
    <motion.section 
      className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1A2A44]/5 via-transparent to-[#FF4500]/5" />
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-[#1A2A44]/20 to-[#FF4500]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-l from-[#FF4500]/20 to-[#1A2A44]/20 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
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
            <span className="text-[#FF4500] font-semibold">📸 Gallery</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#1A2A44] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Event Gallery
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Moments from our events and activities.
          </motion.p>
        </motion.div>

        {/* Gradient Style Preview */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Featured Image */}
            <motion.div 
              className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={featuredImages[0]?.image} 
                alt="Featured Event"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A2A44]/30 via-transparent to-[#FF4500]/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Our Event Moments
                </motion.h3>
                <motion.p 
                  className="text-white/90 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Capturing memories and celebrating success
                </motion.p>
              </div>
            </motion.div>

            {/* Secondary Image (if available) */}
            {featuredImages[1] && (
              <motion.div 
                className="absolute -bottom-6 -right-6 w-48 h-32 md:w-64 md:h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                initial={{ opacity: 0, x: 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <img 
                  src={featuredImages[1].image} 
                  alt="Event Highlight"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/20 to-[#1A2A44]/20" />
              </motion.div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => onPageChange('events')}
            className="px-8 py-4 bg-gradient-to-r from-[#1A2A44] to-[#2A3A54] text-white font-semibold rounded-xl hover:from-[#1A2A44]/90 hover:to-[#2A3A54]/90 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg flex items-center space-x-2 mx-auto"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(26, 42, 68, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Full Gallery</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
          <motion.p 
            className="text-gray-600 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            View our complete photo collection
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EventsPreviewSection;