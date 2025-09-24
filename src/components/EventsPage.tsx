import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, X, Play } from 'lucide-react';
import eventsData from '../data/events.json';
import { openWhatsAppChat, WHATSAPP_MESSAGES } from '../utils/whatsapp';

const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    'all',
    'Events',
    'Workshops',
    'Celebrations',
    'Seminars',
    'Webinars',
    'Team',
    'Office',
  ];

  const filteredGallery =
    selectedCategory === 'all'
      ? eventsData.gallery
      : eventsData.gallery.filter((item) => item.category === selectedCategory);

  const isVideo = (url: string) => {
    return url.includes('video') || url.includes('.mp4') || url.includes('.webm') || url.includes('.mov');
  };

  const closeOverlay = () => {
    setSelectedImage(null);
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
              <Camera className="h-12 w-12 text-white" />
            </div>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {eventsData.title}
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {eventsData.subtitle}
          </motion.p>
          <motion.p
            className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {eventsData.description}
          </motion.p>
        </div>
      </motion.div>

      {/* Gallery */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout - Simple Grid */}
          <div className="block md:hidden">
            <div className="grid grid-cols-2 gap-4">
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {isVideo(item.image) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FF4500]/0 via-transparent to-transparent group-hover:from-[#FF4500]/20 transition-all duration-500 pointer-events-none" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF4500] group-hover:shadow-[0_0_20px_rgba(255,69,0,0.5)] transition-all duration-500 rounded-xl" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Column-based Masonry */}
          <div className="hidden md:block">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid mb-6 cursor-pointer"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                  {isVideo(item.image) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FF4500]/0 via-transparent to-transparent group-hover:from-[#FF4500]/20 transition-all duration-500 pointer-events-none" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF4500] group-hover:shadow-[0_0_20px_rgba(255,69,0,0.5)] transition-all duration-500 rounded-2xl" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Full Page Overlay */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeOverlay}
        >
          {/* Close Button */}
          <motion.button
            onClick={closeOverlay}
            className="absolute top-4 right-4 z-60 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-6 w-6" />
          </motion.button>

          {/* Image/Video Container */}
          <motion.div
            className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo(selectedImage.image) ? (
              <video
                src={selectedImage.image}
                controls
                autoPlay
                muted
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            )}

            {/* Image Info */}
            <motion.div
              className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-2">{selectedImage.title}</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">{selectedImage.category}</span>
                <span>{new Date(selectedImage.date).toLocaleDateString()}</span>
              </div>
              {selectedImage.description && (
                <p className="text-sm mt-2 text-white/90">{selectedImage.description}</p>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-gradient-to-br from-[#1A2A44] via-[#2A3A54] to-[#1A2A44] relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join Our Community
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect with our community of students and education enthusiasts.
          </motion.p>
          <motion.button
            onClick={() => openWhatsAppChat(WHATSAPP_MESSAGES.general)}
            className="px-8 py-4 bg-gradient-to-r from-[#FF4500] to-[#FF6B35] text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 25px 50px rgba(255, 69, 0, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with Us on WhatsApp
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default EventsPage;
