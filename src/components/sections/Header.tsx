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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 md:h-18 items-center justify-between">
          {/* Logo EMS + Enavo */}
          <button 
            onClick={() => scrollToSection('introduction')}
            className="flex items-center gap-3 hover:opacity-80 transition-all duration-300"
          >
            <img 
              src="/ems-logo.png" 
              alt="EMS" 
              className="h-8 md:h-10 w-auto"
            />
            <div className="hidden sm:block">
              <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Enavo Gotas
              </div>
              <div className="text-xs text-gray-500">Ondansetrona Pediátrica</div>
            </div>
          </button>

          {/* Nav Desktop - Instagram style */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {navItems.map((item) => (
              <Button 
                key={item.id}
                variant="ghost" 
                onClick={() => scrollToSection(item.id)} 
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 rounded-full"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Menu Mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden h-10 w-10 text-gray-700 hover:text-purple-600 rounded-full"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Dropdown Mobile - Instagram style */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <nav className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full justify-start h-11 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium rounded-full"
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
