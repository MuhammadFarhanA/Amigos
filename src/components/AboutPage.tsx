import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  GraduationCap, 
  Globe, 
  Users, 
  Award,
  Home,
  Smartphone,
  Briefcase,
  Shield,
  MapPin,
  Quote,
  CheckCircle,
  Star,
  TrendingUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import aboutData from '../data/about.json';
import teamData from '../data/team.json';

const AboutPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const iconMap = {
    Home,
    Smartphone,
    Briefcase,
    Shield,
    MapPin
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamData.members.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamData.members.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamData.members.length) % teamData.members.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
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
            {aboutData.title}
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {aboutData.subtitle}
          </motion.p>
          <motion.p 
            className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {aboutData.description}
          </motion.p>
        </div>
      </motion.div>

      {/* Mission & Vision Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="p-3 bg-[#1A2A44] rounded-lg mr-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Target className="h-8 w-8 text-white" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{aboutData.mission}</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="p-3 bg-[#FF4500] rounded-lg mr-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Eye className="h-8 w-8 text-white" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{aboutData.vision}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why We Stand Apart Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A44] mb-6">
              {aboutData.whyStandApart.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              {aboutData.whyStandApart.description}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.whyStandApart.advantages.map((advantage, index) => (
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
                  <CheckCircle className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">✅ {advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CEO Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-br from-[#1A2A44] via-[#2A3A54] to-[#1A2A44] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Leadership with Experience</h3>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">Meet the visionary behind Amigos - combining academic excellence with real-world experience</p>
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
                    <h4 className="text-2xl font-bold text-white">Academic Excellence</h4>
                  </div>
                  <div className="space-y-3">
                    <motion.div 
                      className="text-white/90 flex items-center text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-3 h-3 bg-[#FF4500] rounded-full mr-4 flex-shrink-0" />
                      {aboutData.ceo.credentials}
                    </motion.div>
                    <motion.div 
                      className="text-white/90 flex items-center text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-3 h-3 bg-[#FF4500] rounded-full mr-4 flex-shrink-0" />
                      {aboutData.ceo.experience}
                    </motion.div>
                  </div>
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
                    <h4 className="text-2xl font-bold text-white">Global Experience</h4>
                  </div>
                  <div className="space-y-3">
                    <motion.div 
                      className="text-white/90 flex items-center text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 mr-4 flex-shrink-0" />
                      Personal study abroad experience
                    </motion.div>
                    <motion.div 
                      className="text-white/90 flex items-center text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 mr-4 flex-shrink-0" />
                      Immigration & settlement expertise
                    </motion.div>
                    <motion.div 
                      className="text-white/90 flex items-center text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 mr-4 flex-shrink-0" />
                      International career development
                    </motion.div>
                  </div>
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
                    <motion.div 
                      className="p-3 bg-[#FF4500] rounded-full"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Quote className="h-8 w-8 text-white" />
                    </motion.div>
                  </div>
                  <blockquote className="text-2xl md:text-3xl text-white/95 mb-6 leading-relaxed italic font-light">
                    "Having personally navigated the challenges of studying abroad, I understand exactly what students face. That's why we've built Amigos to provide the support I wish I had during my journey."
                  </blockquote>
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-[#FF4500] fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#FF4500] font-semibold text-lg">
                    — {aboutData.ceo.name}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Unique Services Section */}
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
              {aboutData.uniqueServices.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {aboutData.uniqueServices.subtitle}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.uniqueServices.services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              
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
                  <div className="flex items-start">
                    <motion.div 
                      className="w-12 h-12 bg-[#1A2A44] rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        🏠 {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        ({service.description})
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Meet the Team Section */}
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
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-[#FF4500]/10 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Users className="h-5 w-5 text-[#FF4500] mr-2" />
              <span className="text-[#FF4500] font-semibold">Our Team</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A44] mb-4">
              {teamData.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
              {teamData.subtitle}
            </p>
            <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {teamData.description}
            </p>
          </motion.div>
          
          {/* Instagram-style Carousel */}
          <motion.div 
            className="relative max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main Carousel Container */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <motion.img
                  key={currentSlide}
                  src={teamData.members[currentSlide].image}
                  alt={teamData.members[currentSlide].name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Navigation Arrows */}
                <motion.button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="h-5 w-5" />
                </motion.button>
                
                <motion.button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
                
                {/* Slide Indicators */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {teamData.members.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/50'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 text-center">
                <motion.h3 
                  key={`name-${currentSlide}`}
                  className="text-2xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {teamData.members[currentSlide].name}
                </motion.h3>
                
                <motion.p 
                  key={`position-${currentSlide}`}
                  className="text-[#FF4500] font-semibold text-lg mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {teamData.members[currentSlide].position}
                </motion.p>
                
                {/* Decorative Line */}
                <motion.div 
                  className="w-16 h-1 bg-gradient-to-r from-[#FF4500] to-[#FF6B35] rounded-full mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
            </div>
            
            {/* Team Member Counter */}
            <motion.div 
              className="text-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-gray-600 text-sm">
                {currentSlide + 1} of {teamData.members.length} team members
              </p>
            </div>
            
            {/* Navigation Dots (Alternative) */}
            <div className="flex justify-center mt-4 space-x-3">
              {teamData.members.map((member, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#FF4500] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  title={member.name}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Amigos Advantage Section */}
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
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </motion.div>
            
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {aboutData.amigosAdvantage.title}
            </motion.h3>
            
            <motion.blockquote 
              className="text-xl md:text-2xl text-[#FF4500] mb-6 leading-relaxed italic font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              "{aboutData.amigosAdvantage.quote}"
            </motion.blockquote>
            
            <motion.p 
              className="text-lg text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              {aboutData.amigosAdvantage.description}
            </motion.p>
            
            <motion.p 
              className="text-xl text-white font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              {aboutData.amigosAdvantage.cta}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#1A2A44] mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Achievements
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Milestones that reflect our commitment to transforming dreams into reality.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {aboutData.achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="flex items-start">
                  <motion.div 
                    className="w-12 h-12 bg-[#FF4500] rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;