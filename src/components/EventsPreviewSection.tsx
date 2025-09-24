import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ArrowRight } from 'lucide-react';
import eventsData from '../data/events.json';

interface EventsPreviewSectionProps {
  onPageChange: (page: string) => void;
}

const EventsPreviewSection: React.FC<EventsPreviewSectionProps> = ({ onPageChange }) => {
  // Get the first two events for preview
  const featuredEvents = eventsData.gallery.slice(0, 2);

  const isVideo = (url: string) => {
    return url.includes('video') || url.includes('.mp4') || url.includes('.webm') || url.includes('.mov');
  };

  return (
    <motion.section 
      className="py-16 md:py-20 bg-gradient-to-br from-[#1A2A44] via-[#2A3A54] to-[#1A2A44] relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-[#FF4500]/20 backdrop-blur-sm rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Camera className="h-5 w-5 text-[#FF4500] mr-2" />
              <span className="text-[#FF4500] font-semibold">Gallery</span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Events & Memories
            </motion.h2>

            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Explore our vibrant community through workshops, seminars, celebrations, and success stories captured in moments.
            </motion.p>

            <motion.button
              onClick={() => onPageChange('events')}
              className="group px-8 py-4 bg-gradient-to-r from-[#FF4500] to-[#FF6B35] text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center space-x-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(255, 69, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Full Gallery</span>
              <motion.div
                className="group-hover:translate-x-1 transition-transform duration-300"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Right Side - Featured Images */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Featured Image */}
              {featuredEvents[0] && (
                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  {isVideo(featuredEvents[0].image) ? (
                    <video
                      src={featuredEvents[0].image}
                      className="w-full h-80 object-cover"
                      muted
                      preload="metadata"
                      poster={featuredEvents[0].image.replace('.mp4', '_thumbnail.jpg')}
                      onLoadedMetadata={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.currentTime = 1;
                      }}
                    />
                  ) : (
                    <img
                      src={featuredEvents[0].image}
                      alt={featuredEvents[0].title}
                      className="w-full h-80 object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-[#FF4500]/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium mb-3 inline-block">
                      {featuredEvents[0].category}
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">{featuredEvents[0].title}</h3>
                    <p className="text-white/90 text-sm">{featuredEvents[0].description}</p>
                  </div>
                </motion.div>
              )}

              {/* Secondary Featured Image */}
              {featuredEvents[1] && (
                <motion.div 
                  className="absolute -bottom-8 -right-8 w-48 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white/20"
                  initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
                >
                  {isVideo(featuredEvents[1].image) ? (
                    <video
                      src={featuredEvents[1].image}
                      className="w-full h-full object-cover"
                      muted
                      preload="metadata"
                      poster={featuredEvents[1].image.replace('.mp4', '_thumbnail.jpg')}
                      onLoadedMetadata={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.currentTime = 1;
                      }}
                    />
                  ) : (
                    <img
                      src={featuredEvents[1].image}
                      alt={featuredEvents[1].title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="bg-[#1A2A44]/90 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium mb-1 inline-block">
                      {featuredEvents[1].category}
                    </div>
                    <h4 className="text-white font-semibold text-sm leading-tight">{featuredEvents[1].title}</h4>
                  </div>
                </motion.div>
              )}

              {/* Floating Camera Icon */}
              <motion.div 
                className="absolute -top-4 -left-4 w-16 h-16 bg-[#FF4500]/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Camera className="h-8 w-8 text-[#FF4500]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EventsPreviewSection;