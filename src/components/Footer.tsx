
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    {
      icon: <Mail size={20} />,
      href: 'mailto:gopichand@example.com',
      label: 'Email',
      ariaLabel: 'Send email to Gopi Chand'
    },
    {
      icon: <Phone size={20} />,
      href: 'tel:+1234567890',
      label: 'Phone',
      ariaLabel: 'Call Gopi Chand'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/narani-gopichand/',
      label: 'LinkedIn',
      ariaLabel: 'View LinkedIn profile',
      external: true
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/gopichand',
      label: 'GitHub',
      ariaLabel: 'View GitHub profile',
      external: true
    }
  ];

  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Gopi Chand Narani</h3>
            <p className="text-gray-300 text-sm">
              Java Software Developer crafting scalable solutions with Spring Boot and GCP.
            </p>
            <p className="text-gray-400 text-sm">
              Milwaukee, WI | Available for new opportunities
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Experience', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-white text-sm text-left transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-gray-300 hover:text-white transition-colors hover-scale"
                  aria-label={link.ariaLabel}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Gopi Chand Narani. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
