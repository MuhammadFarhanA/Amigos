import React from 'react';
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import footerData from '../data/footer.json';
import { AMIGOS_EMAIL } from '../utils/email';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const iconMap = {
    Facebook,
    Twitter,
    Linkedin,
    Instagram
  };

  return (
    <footer className="bg-[#1A2A44] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold text-white">{footerData.company.name}</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {footerData.company.description}
            </p>
            <div className="flex space-x-4">
              {footerData.company.social.map((social, index) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a 
                    key={index}
                    href={social.url} 
                    className="text-gray-300 hover:text-[#FF4500] transition-colors duration-300 p-2 hover:bg-white/10 rounded-lg"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  {service.key ? (
                    <button
                      onClick={() => onPageChange(service.key)}
                      className="text-gray-300 hover:text-[#FF4500] transition-colors duration-300 text-sm md:text-base text-left cursor-pointer"
                    >
                      {service.name}
                    </button>
                  ) : (
                    <a 
                      href={service.url} 
                      className="text-gray-300 hover:text-[#FF4500] transition-colors duration-300 text-sm md:text-base cursor-pointer"
                    >
                      {service.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  {link.key ? (
                    <button
                      onClick={() => onPageChange(link.key)}
                      className="text-gray-300 hover:text-[#FF4500] transition-colors duration-300 text-sm md:text-base text-left cursor-pointer"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a 
                      href={link.url} 
                      className="text-gray-300 hover:text-[#FF4500] transition-colors duration-300 text-sm md:text-base cursor-pointer"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#FF4500] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {footerData.contact.address.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#FF4500] flex-shrink-0" />
                <p className="text-gray-300 text-sm md:text-base">{footerData.contact.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#FF4500] flex-shrink-0" />
                <p className="text-gray-300 text-sm md:text-base">
                  {AMIGOS_EMAIL}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-[#FF4500] flex-shrink-0" />
                <p className="text-gray-300 text-sm md:text-base">{footerData.contact.website}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              {footerData.copyright}
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
              {footerData.legal.map((item, index) => (
                <a 
                  key={index}
                  href={item.url} 
                  className="text-gray-300 hover:text-[#FF4500] text-sm transition-colors duration-300 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;