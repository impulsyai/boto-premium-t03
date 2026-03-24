'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'A Clínica', href: '#sobre' },
    { name: 'Tratamentos', href: '#tratamentos' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-brown text-brand-brown font-serif text-xl italic font-bold group-hover:bg-brand-brown group-hover:text-white transition-colors duration-300">
            BP
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-brand-dark leading-none tracking-tight">
              BOTO PREMIUM
            </span>
            <span className="text-[10px] uppercase tracking-widest text-brand-brown mt-1">
              Estética Facial Avançada
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-brown transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5511999112234?text=Olá,%20gostaria%20de%20agendar%20um%20horário"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-brown text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-brown-light transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            Agendar
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-dark hover:text-brand-brown transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-brand-bronze/50 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-brand-dark hover:text-brand-brown py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5511999112234?text=Olá,%20gostaria%20de%20agendar%20um%20horário"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-brown text-white px-5 py-3 rounded-full text-base font-medium hover:bg-brand-brown-light transition-colors mt-4 shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
