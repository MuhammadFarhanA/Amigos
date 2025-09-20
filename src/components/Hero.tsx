import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Plane, FileText } from 'lucide-react';
import { openWhatsAppChat, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface HeroProps {
  onGetConsultation: () => void;
  onViewServices: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetConsultation, onViewServices }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollAttempts, setScrollAttempts] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasExited, setHasExited] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroExit = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIsVisible(false);
    
    // Unlock scroll and mark as exited
    setTimeout(() => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.top = 'unset';
      document.body.style.left = 'unset';
      document.body.style.right = 'unset';
      setHasExited(true);
    }, 600); // Match the hero exit animation duration
  };

  // Check if user scrolled back to top to show hero again
  useEffect(() => {
    const handleScroll = () => {
      if (hasExited && window.scrollY === 0) {
        setIsVisible(true);
        setHasExited(false);
        setIsTransitioning(false);
        setScrollAttempts(0);
        // Lock scroll again
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = '0';
        document.body.style.left = '0';
        document.body.style.right = '0';
      }
    };

    if (hasExited) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasExited]);

  useEffect(() => {
    // Lock scroll initially only if hero is visible and hasn't exited
    if (isVisible && !hasExited) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.body.style.right = '0';
    }
    
    return () => {
      // Cleanup on unmount
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.top = 'unset';
      document.body.style.left = 'unset';
      document.body.style.right = 'unset';
    };
  }, [isVisible, hasExited]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isVisible && !isTransitioning) {
        e.preventDefault();
        
        if (e.deltaY > 0) { // Scrolling down
          setScrollAttempts(prev => prev + 1);
          
          // After 2 scroll attempts, hide hero
          if (scrollAttempts >= 1) {
            handleHeroExit();
          }
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isVisible && !isTransitioning) {
        e.preventDefault();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (isVisible && !isTransitioning) {
        const touch = e.touches[0];
        const startY = touch.clientY;
        
        const handleTouchEnd = (endEvent: TouchEvent) => {
          const endTouch = endEvent.changedTouches[0];
          const deltaY = startY - endTouch.clientY;
          
          if (deltaY > 50) { // Swiped up (scrolling down)
            setScrollAttempts(prev => prev + 1);
            
            if (scrollAttempts >= 1) {
              handleHeroExit();
            }
          }
          
          document.removeEventListener('touchend', handleTouchEnd);
        };
        
        document.addEventListener('touchend', handleTouchEnd);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isVisible && !isTransitioning) {
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
          e.preventDefault();
          setScrollAttempts(prev => prev + 1);
          
          if (scrollAttempts >= 1) {
            handleHeroExit();
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, isTransitioning, scrollAttempts]);

  return (
    <motion.section 
      className={`fixed inset-0 w-full h-screen z-40 transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex flex-col h-screen">
        {/* Main Content Area */}
        <div className="flex-1 grid lg:grid-cols-2 min-h-0">
          {/* Left Side - Content */}
          <motion.div 
            className="bg-[#1A2A44] flex items-center justify-center px-6 lg:px-12 py-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-lg text-white">
              <motion.h1 
                className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Study Abroad<br />
                Made Easy
              </motion.h1>
              <motion.p 
                className="text-base lg:text-lg xl:text-xl text-white/90 mb-6 lg:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Navigate the complex world of visa applications with confidence. Our experienced consultants provide personalized guidance for study visas, tourist visas, and professional courses.
              </motion.p>
              <motion.button
                onClick={() => openWhatsAppChat(WHATSAPP_MESSAGES.consultation)}
                className="px-6 lg:px-8 py-3 lg:py-4 bg-[#FF4500] text-white font-semibold rounded-lg hover:bg-[#FF4500]/90 transform hover:scale-105 transition-all duration-300 shadow-lg text-base lg:text-lg cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Free Consultation
              </motion.button>
              <motion.p 
                className="text-white/80 text-sm mt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Or use the contact form below to send us an email
              </motion.p>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="relative bg-gradient-to-br from-[#1A2A44] via-[#2A3A54] to-[#1A2A44] overflow-hidden flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.img
              src={"src/assets/images/hero.jpg"}
              alt="Happy student with books"
              className="w-full h-full object-cover object-center mt-15"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
          </motion.div>
        </div>

        {/* Bottom Service Cards */}
        <motion.div 
          className="bg-white shadow-lg flex-shrink-0"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
            <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
              {/* Study Visa Card */}
              <motion.div 
                className="flex items-center space-x-3 lg:space-x-4 p-3 lg:p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300 cursor-pointer"
                onClick={() => onViewServices()}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#1A2A44] rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base">Study Visa</h3>
                  <p className="text-xs lg:text-sm text-gray-600 leading-tight">Complete visa assistance and university selection for your study abroad journey.</p>
                </div>
              </motion.div>

              {/* Tourist Visa Card */}
              <motion.div 
                className="flex items-center space-x-3 lg:space-x-4 p-3 lg:p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300 cursor-pointer"
                onClick={() => onViewServices()}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#FF4500] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plane className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base">Tourist Visa</h3>
                  <p className="text-xs lg:text-sm text-gray-600 leading-tight">Fast track tourist visa applications for your vacation and leisure travel.</p>
                </div>
              </motion.div>

              {/* PR Pathways Card */}
              <motion.div 
                className="flex items-center space-x-3 lg:space-x-4 p-3 lg:p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300 cursor-pointer"
                onClick={() => onViewServices()}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#1A2A44] rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base">PR Pathways</h3>
                  <p className="text-xs lg:text-sm text-gray-600 leading-tight">Comprehensive guidance for permanent residency and immigration options.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;