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
  // Get gallery items for preview (max 8)
  const galleryPreview = eventsData.gallery.slice(0, 8);

  return (
    <motion.section 
      className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Gradient Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-[#1A2A44]/10 to-[#FF4500]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-l from-[#FF4500]/10 to-[#1A2A44]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#1A2A44]/5 to-[#FF4500]/5 rounded-full blur-2xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Gallery Preview */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {galleryPreview.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="group relative rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -8 }}
              >
                <div className="aspect-[4/3] p-2">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A44]/0 via-transparent to-transparent group-hover:from-[#1A2A44]/10 transition-all duration-500 rounded-2xl" />
              </motion.div>
            ))}
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