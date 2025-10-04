import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    setIsMenuOpen(false);
    const scrollDelay = isMenuOpen ? 350 : 0;
    setTimeout(() => {
      const isMobile = window.innerWidth < 768;
      const headerOffset = isMobile ? 70 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, scrollDelay);
  };
  const navItems = [
    { id: 'introduction', label: 'Início' },
    { id: 'guidelines', label: 'Evidências' },
    { id: 'posologia', label: 'Calculadora' },
    { id: 'biblioteca', label: 'Biblioteca' },
    { id: 'ask-rep', label: 'Contato' }
  ];
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-sm"
      role="banner"
    >
      <div className="flex items-center justify-between px-4 py-2 md:px-12">
        {/* Logo EMS + Enavo */}
        <div className="flex items-center gap-3">
          <img src="/ems-logo.png" alt="EMS" className="h-10 w-auto mr-2" />
          <img src="/logo-enavo.jpeg" alt="Enavo Gotas" className="h-12 w-auto rounded-xl shadow-lg" />
        </div>
        {/* Nav Desktop */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="text-base font-medium text-gray-700 hover:text-blue-700 px-2 rounded"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </nav>
        {/* Menu Mobile */}
        <div className="md:hidden flex items-center">
          <Button size="icon" variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>
      {/* Dropdown Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <nav className="flex flex-col px-5 py-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="w-full text-left text-base py-2"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
