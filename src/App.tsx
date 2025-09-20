import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyUsSection from './components/WhyUsSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import StudyVisaPage from './components/StudyVisaPage';
import TouristVisaPage from './components/TouristVisaPage';
import ProfessionalCoursesPage from './components/ProfessionalCoursesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetConsultation = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewServices = () => {
    setCurrentPage('study-visa');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'study-visa':
        return <StudyVisaPage />;
      case 'tourist-visa':
        return <TouristVisaPage />;
      case 'courses':
        return <ProfessionalCoursesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <div className="relative min-h-screen">
            <Hero 
              onGetConsultation={handleGetConsultation}
              onViewServices={handleViewServices}
            />
            <div className="relative z-0">
              <ServicesSection onPageChange={handlePageChange} />
              <WhyUsSection onGetConsultation={handleGetConsultation} />
              <TestimonialsSection />
              <CTASection onGetConsultation={handleGetConsultation} />
              <ContactSection onContactPage={() => handlePageChange('contact')} />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      {renderPage()}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default App;