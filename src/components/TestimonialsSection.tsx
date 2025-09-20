import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, BookOpen, Globe } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Real client success data
  const clientSuccesses = [
    { name: "Usama bin Aslam", nationality: "Pakistani", country: "United Kingdom", flag: "🇬🇧", university: "De Montfort University", course: "BA (Hons) Business Management" },
    { name: "Asad Khan", nationality: "Pakistani", country: "Hungary", flag: "🇭🇺", university: "University of Pecs", course: "MSc Business Analytics" },
    { name: "Mahroosh Khan", nationality: "Pakistani", country: "United Kingdom", flag: "🇬🇧", university: "Aston University", course: "MSc Data Science" },
    { name: "Awais Ahmed Khan", nationality: "Pakistani", country: "United Kingdom", flag: "🇬🇧", university: "University of Law", course: "LLB (Hons) Law" },
    { name: "Danial Ahmed", nationality: "Pakistani", country: "Poland", flag: "🇵🇱", university: "Warsaw University of Technology", course: "BSc Computer Science" },
    { name: "Muzamil", nationality: "Pakistani", country: "United Kingdom", flag: "🇬🇧", university: "University of Manchester", course: "MSc Management" },
    { name: "Uzair Randhawa", nationality: "Pakistani", country: "United Kingdom", flag: "🇬🇧", university: "University of Leeds", course: "MSc Advanced Computer Science" },
    { name: "Madiha Jamil", nationality: "Pakistani", country: "Sweden", flag: "🇸🇪", university: "KTH Royal Institute of Technology", course: "MS Biotechnology" },
    { name: "Muhammad Nouman", nationality: "Pakistani", country: "Spain", flag: "🇪🇸", university: "IE University", course: "Master in Market Research" },
    { name: "Osama Ahmed Khan", nationality: "Pakistani", country: "United Kingdom", flag: "🇬🇧", university: "University of Bristol", course: "LLB (Hons) Law" },
    { name: "Amna", nationality: "Pakistani", country: "United Kingdom", flag: "🇬🇧", university: "University of Glasgow", course: "MSc Data Analytics" },
    { name: "Rajiv Malhotra", nationality: "Indian", country: "Canada", flag: "🇨🇦", university: "University of Toronto", course: "Master of Engineering" },
    { name: "Priya Sharma", nationality: "Indian", country: "United Kingdom", flag: "🇬🇧", university: "University of Edinburgh", course: "MSc Artificial Intelligence" },
    { name: "Amit Patel", nationality: "Indian", country: "United States", flag: "🇺🇸", university: "Northeastern University", course: "MS in Computer Science" },
    { name: "Sunil Kumar", nationality: "Indian", country: "Australia", flag: "🇦🇺", university: "University of Melbourne", course: "Master of IT" },
    { name: "Lakshmi Iyer", nationality: "Indian", country: "Germany", flag: "🇩🇪", university: "Technical University of Munich", course: "MSc Robotics" },
    { name: "Amina Begum", nationality: "Bangladeshi", country: "United Kingdom", flag: "🇬🇧", university: "University of Westminster", course: "MBA" },
    { name: "Hasan Rahman", nationality: "Bangladeshi", country: "Ireland", flag: "🇮🇪", university: "University College Dublin", course: "MSc Finance" },
    { name: "Jamil Ahmed", nationality: "Bangladeshi", country: "Malaysia", flag: "🇲🇾", university: "University of Malaya", course: "MSc Data Science" },
    { name: "Farida Akhtar", nationality: "Bangladeshi", country: "Netherlands", flag: "🇳🇱", university: "University of Amsterdam", course: "LLM International Law" },
    { name: "Nusrat Jahan", nationality: "Bangladeshi", country: "Italy", flag: "🇮🇹", university: "Politecnico di Milano", course: "MSc Fashion Design" },
    { name: "Lakshitha Perera", nationality: "Sri Lankan", country: "Australia", flag: "🇦🇺", university: "UNSW Sydney", course: "Master of Cyber Security" },
    { name: "Dinesh Fernando", nationality: "Sri Lankan", country: "Canada", flag: "🇨🇦", university: "Conestoga College", course: "PG Diploma in Project Management" },
    { name: "Chaminda Silva", nationality: "Sri Lankan", country: "New Zealand", flag: "🇳🇿", university: "Auckland University of Technology", course: "Master of Applied Finance" },
    { name: "Anusha Ratnayake", nationality: "Sri Lankan", country: "United Kingdom", flag: "🇬🇧", university: "Coventry University", course: "BEng (Hons) Civil Engineering" },
    { name: "Priyantha Weerasinghe", nationality: "Sri Lankan", country: "United States", flag: "🇺🇸", university: "University of North Texas", course: "MS in Mechanical Engineering" },
    { name: "Kofi Mensah", nationality: "Ghanaian", country: "United Kingdom", flag: "🇬🇧", university: "University of Nottingham", course: "MSc Public Health" },
    { name: "Abena Boateng", nationality: "Ghanaian", country: "Canada", flag: "🇨🇦", university: "Seneca College", course: "PG Diploma in Business Analytics" },
    { name: "Yaw Appiah", nationality: "Ghanaian", country: "Germany", flag: "🇩🇪", university: "Jacobs University Bremen", course: "BSc Data Engineering" },
    { name: "Ama Serwaa", nationality: "Ghanaian", country: "United States", flag: "🇺🇸", university: "Purdue University", course: "MS in Agriculture" },
    { name: "Esi Asante", nationality: "Ghanaian", country: "France", flag: "🇫🇷", university: "INSEAD", course: "MBA" },
    { name: "Chiamaka Nwosu", nationality: "Nigerian", country: "United Kingdom", flag: "🇬🇧", university: "University of Birmingham", course: "LLM International Commercial Law" },
    { name: "Obinna Okeke", nationality: "Nigerian", country: "Canada", flag: "🇨🇦", university: "University of Manitoba", course: "MEng Electrical Engineering" },
    { name: "Adeola Adewale", nationality: "Nigerian", country: "United States", flag: "🇺🇸", university: "Georgia Institute of Technology", course: "MS in Aerospace Engineering" },
    { name: "Funmilayo Balogun", nationality: "Nigerian", country: "Australia", flag: "🇦🇺", university: "Monash University", course: "Master of Nursing" },
    { name: "Tunde Okafor", nationality: "Nigerian", country: "Cyprus", flag: "🇨🇾", university: "University of Nicosia", course: "MBBS Medicine" },
    { name: "Zara Oni", nationality: "Nigerian", country: "United Kingdom", flag: "🇬🇧", university: "University of the Arts London", course: "MA Graphic Design" },
    { name: "Bilal Abbas", nationality: "Pakistani", country: "Australia", flag: "🇦🇺", university: "Monash University", course: "Master of Cybersecurity" },
    { name: "Fatima Khan", nationality: "Pakistani", country: "United Kingdom", flag: "🇬🇧", university: "King's College London", course: "LLM International Law" },
    { name: "Hassan Rizvi", nationality: "Pakistani", country: "United States", flag: "🇺🇸", university: "New York University", course: "MS Financial Engineering" },
    { name: "Zara Sheikh", nationality: "Pakistani", country: "France", flag: "🇫🇷", university: "ESSEC Business School", course: "Master in Management" },
    { name: "Omar Farooq", nationality: "Pakistani", country: "Germany", flag: "🇩🇪", university: "TU Berlin", course: "MSc Renewable Energy" },
    { name: "Sana Ali", nationality: "Pakistani", country: "Netherlands", flag: "🇳🇱", university: "University of Amsterdam", course: "MSc Psychology" }
  ];
  
  // Triple the array for seamless loop
  const tripleClients = [...clientSuccesses, ...clientSuccesses, ...clientSuccesses];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section 
      className="py-12 md:py-20 bg-gray-50 overflow-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Parallax Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="absolute top-16 left-1/4 w-20 h-20 bg-[#1A2A44] rounded-full"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-64 right-1/3 w-16 h-16 bg-[#FF4500] rounded-full"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/2 w-24 h-24 bg-[#1A2A44] rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
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
        <motion.div 
          className="flex animate-scroll-left space-x-4 md:space-x-6"
          initial={{ x: 0 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {tripleClients.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl shadow-xl p-6 mx-2 border border-gray-100 overflow-hidden"
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
            >
              {/* Prominent Country Header */}
              <motion.div 
                className="bg-gradient-to-r from-[#1A2A44] to-[#2A3A54] rounded-xl p-4 mb-4 -mx-2 -mt-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{client.flag}</span>
                    <div>
                      <h4 className="text-white font-bold text-lg">{client.country}</h4>
                      <p className="text-white/80 text-sm">Study Destination</p>
                    </div>
                  </div>
                  <motion.div 
                    className="p-2 bg-[#FF4500] rounded-full"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GraduationCap className="h-5 w-5 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Student Info */}
              <div className="mb-4">
                <h3 className="font-bold text-xl text-[#1A2A44] mb-1">{client.name}</h3>
                <p className="text-gray-600 flex items-center text-sm">
                  <Globe className="h-4 w-4 mr-2" />
                  {client.nationality} Student
                </p>
              </div>

              {/* University - Highlighted */}
              <motion.div 
                className="bg-gradient-to-r from-[#FF4500]/10 to-[#FF6B35]/10 rounded-xl p-4 mb-4 border-l-4 border-[#FF4500]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-3">
                  <motion.div 
                    className="p-2 bg-[#FF4500] rounded-lg flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin className="h-4 w-4 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#1A2A44] text-lg leading-tight mb-1">
                      {client.university}
                    </h4>
                    <p className="text-gray-600 text-sm">University</p>
                  </div>
                </div>
              </motion.div>

              {/* Course Info */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-3">
                  <motion.div 
                    className="p-2 bg-[#1A2A44] rounded-lg flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BookOpen className="h-4 w-4 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium leading-tight">
                      {client.course}
                    </p>
                    <p className="text-gray-500 text-sm">Course of Study</p>
                  </div>
                </div>
              </div>

              {/* Success Badge */}
              <motion.div 
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 border border-green-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 font-semibold text-sm">
                    ✅ Visa Approved & Enrolled
                  </span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Statistics */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-[#FF4500] mb-2">{clientSuccesses.length}+</div>
              <div className="text-sm text-gray-600 font-medium">Success Stories</div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-[#1A2A44] mb-2">15+</div>
              <div className="text-sm text-gray-600 font-medium">Countries</div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-[#FF4500] mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium">Universities</div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-[#1A2A44] mb-2">95%</div>
              <div className="text-sm text-gray-600 font-medium">Success Rate</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default TestimonialsSection;