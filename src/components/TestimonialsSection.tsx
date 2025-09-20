import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, BookOpen, Globe } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Real client success data
  const clientSuccesses = [
    { name: "Usama bin Aslam", nationality: "Pakistani", country: "UK", university: "De Montfort University", course: "BA (Hons) Business Management", flag: "🇬🇧" },
    { name: "Asad Khan", nationality: "Pakistani", country: "Hungary", university: "University of Pecs", course: "MSc Business Analytics", flag: "🇭🇺" },
    { name: "Mahroosh Khan", nationality: "Pakistani", country: "UK", university: "Aston University", course: "MSc Data Science", flag: "🇬🇧" },
    { name: "Awais Ahmed Khan", nationality: "Pakistani", country: "UK", university: "University of Law", course: "LLB (Hons) Law", flag: "🇬🇧" },
    { name: "Danial Ahmed", nationality: "Pakistani", country: "Poland", university: "Warsaw University of Technology", course: "BSc Computer Science", flag: "🇵🇱" },
    { name: "Muzamil", nationality: "Pakistani", country: "UK", university: "University of Manchester", course: "MSc Management", flag: "🇬🇧" },
    { name: "Uzair Randhawa", nationality: "Pakistani", country: "UK", university: "University of Leeds", course: "MSc Advanced Computer Science", flag: "🇬🇧" },
    { name: "Madiha Jamil", nationality: "Pakistani", country: "Sweden", university: "KTH Royal Institute of Technology", course: "MS Biotechnology", flag: "🇸🇪" },
    { name: "Muhammad Nouman", nationality: "Pakistani", country: "Spain", university: "IE University", course: "Master in Market Research", flag: "🇪🇸" },
    { name: "Osama Ahmed Khan", nationality: "Pakistani", country: "UK", university: "University of Bristol", course: "LLB (Hons) Law", flag: "🇬🇧" },
    { name: "Amna", nationality: "Pakistani", country: "UK", university: "University of Glasgow", course: "MSc Data Analytics", flag: "🇬🇧" },
    { name: "Rajiv Malhotra", nationality: "Indian", country: "Canada", university: "University of Toronto", course: "Master of Engineering", flag: "🇨🇦" },
    { name: "Priya Sharma", nationality: "Indian", country: "UK", university: "University of Edinburgh", course: "MSc Artificial Intelligence", flag: "🇬🇧" },
    { name: "Amit Patel", nationality: "Indian", country: "USA", university: "Northeastern University", course: "MS in Computer Science", flag: "🇺🇸" },
    { name: "Sunil Kumar", nationality: "Indian", country: "Australia", university: "University of Melbourne", course: "Master of IT", flag: "🇦🇺" },
    { name: "Lakshmi Iyer", nationality: "Indian", country: "Germany", university: "Technical University of Munich", course: "MSc Robotics", flag: "🇩🇪" },
    { name: "Amina Begum", nationality: "Bangladeshi", country: "UK", university: "University of Westminster", course: "MBA", flag: "🇬🇧" },
    { name: "Hasan Rahman", nationality: "Bangladeshi", country: "Ireland", university: "University College Dublin", course: "MSc Finance", flag: "🇮🇪" },
    { name: "Jamil Ahmed", nationality: "Bangladeshi", country: "Malaysia", university: "University of Malaya", course: "MSc Data Science", flag: "🇲🇾" },
    { name: "Farida Akhtar", nationality: "Bangladeshi", country: "Netherlands", university: "University of Amsterdam", course: "LLM International Law", flag: "🇳🇱" },
    { name: "Nusrat Jahan", nationality: "Bangladeshi", country: "Italy", university: "Politecnico di Milano", course: "MSc Fashion Design", flag: "🇮🇹" },
    { name: "Lakshitha Perera", nationality: "Sri Lankan", country: "Australia", university: "UNSW Sydney", course: "Master of Cyber Security", flag: "🇦🇺" },
    { name: "Dinesh Fernando", nationality: "Sri Lankan", country: "Canada", university: "Conestoga College", course: "PG Diploma in Project Management", flag: "🇨🇦" },
    { name: "Chaminda Silva", nationality: "Sri Lankan", country: "New Zealand", university: "Auckland University of Technology", course: "Master of Applied Finance", flag: "🇳🇿" },
    { name: "Anusha Ratnayake", nationality: "Sri Lankan", country: "UK", university: "Coventry University", course: "BEng (Hons) Civil Engineering", flag: "🇬🇧" },
    { name: "Priyantha Weerasinghe", nationality: "Sri Lankan", country: "USA", university: "University of North Texas", course: "MS in Mechanical Engineering", flag: "🇺🇸" },
    { name: "Kofi Mensah", nationality: "Ghanaian", country: "UK", university: "University of Nottingham", course: "MSc Public Health", flag: "🇬🇧" },
    { name: "Abena Boateng", nationality: "Ghanaian", country: "Canada", university: "Seneca College", course: "PG Diploma in Business Analytics", flag: "🇨🇦" },
    { name: "Yaw Appiah", nationality: "Ghanaian", country: "Germany", university: "Jacobs University Bremen", course: "BSc Data Engineering", flag: "🇩🇪" },
    { name: "Ama Serwaa", nationality: "Ghanaian", country: "USA", university: "Purdue University", course: "MS in Agriculture", flag: "🇺🇸" },
    { name: "Esi Asante", nationality: "Ghanaian", country: "France", university: "INSEAD", course: "MBA", flag: "🇫🇷" },
    { name: "Chiamaka Nwosu", nationality: "Nigerian", country: "UK", university: "University of Birmingham", course: "LLM International Commercial Law", flag: "🇬🇧" },
    { name: "Obinna Okeke", nationality: "Nigerian", country: "Canada", university: "University of Manitoba", course: "MEng Electrical Engineering", flag: "🇨🇦" },
    { name: "Adeola Adewale", nationality: "Nigerian", country: "USA", university: "Georgia Institute of Technology", course: "MS in Aerospace Engineering", flag: "🇺🇸" },
    { name: "Funmilayo Balogun", nationality: "Nigerian", country: "Australia", university: "Monash University", course: "Master of Nursing", flag: "🇦🇺" },
    { name: "Tunde Okafor", nationality: "Nigerian", country: "Cyprus", university: "University of Nicosia", course: "MBBS Medicine", flag: "🇨🇾" },
    { name: "Zara Oni", nationality: "Nigerian", country: "UK", university: "University of the Arts London", course: "MA Graphic Design", flag: "🇬🇧" },
    { name: "Bilal Abbas", nationality: "Pakistani", country: "Australia", university: "Monash University", course: "Master of Cybersecurity", flag: "🇦🇺" },
    { name: "Fatima Khan", nationality: "Pakistani", country: "UK", university: "King's College London", course: "LLM International Law", flag: "🇬🇧" },
    { name: "Hassan Rizvi", nationality: "Pakistani", country: "USA", university: "New York University", course: "MS Financial Engineering", flag: "🇺🇸" },
    { name: "Zara Sheikh", nationality: "Pakistani", country: "France", university: "ESSEC Business School", course: "Master in Management", flag: "🇫🇷" },
    { name: "Omar Farooq", nationality: "Pakistani", country: "Germany", university: "TU Berlin", course: "MSc Renewable Energy", flag: "🇩🇪" },
    { name: "Sana Ali", nationality: "Pakistani", country: "Netherlands", university: "University of Amsterdam", course: "MSc Psychology", flag: "🇳🇱" }
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
              className="flex-shrink-0 w-80 md:w-96 bg-white rounded-xl shadow-lg p-6 mx-2 border border-gray-100"
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
            >
              {/* Header with Country Flag and University */}
              <div className="flex items-center justify-between mb-4">
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-2xl">{client.flag}</span>
                  <span className="font-semibold text-[#1A2A44] text-sm">{client.country}</span>
                </motion.div>
                <motion.div 
                  className="p-2 bg-[#FF4500] rounded-full"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <GraduationCap className="h-4 w-4 text-white" />
                </motion.div>
              </div>

              {/* Student Name */}
              <div className="mb-4">
                <h3 className="font-bold text-lg text-[#1A2A44] mb-1">{client.name}</h3>
                <p className="text-sm text-gray-600 flex items-center">
                  <Globe className="h-3 w-3 mr-1" />
                  {client.nationality}
                </p>
              </div>

              {/* University Info */}
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-[#FF4500] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm leading-tight">
                      {client.university}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <BookOpen className="h-4 w-4 text-[#1A2A44] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 text-sm leading-tight">
                      {client.course}
                    </p>
                  </div>
                </div>
              </div>

              {/* Success Badge */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    ✅ Visa Approved
                  </span>
                </div>
              </div>
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
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-2xl font-bold text-[#FF4500] mb-1">{clientSuccesses.length}+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-2xl font-bold text-[#1A2A44] mb-1">15+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-2xl font-bold text-[#FF4500] mb-1">50+</div>
              <div className="text-sm text-gray-600">Universities</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-2xl font-bold text-[#1A2A44] mb-1">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default TestimonialsSection;