import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Fecha o menu mobile primeiro
    setIsMenuOpen(false);
    
    // Aguarda a animação do menu fechar (300ms) antes de fazer scroll
    const scrollDelay = isMenuOpen ? 350 : 0;
    
    setTimeout(() => {
      // Altura do header fixo - ajustada para mobile e desktop
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

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
      role="banner"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Nome do Produto */}
          <button 
            onClick={() => scrollToSection('introduction')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="text-left">
              <h1 className="text-xl font-semibold text-slate-900">Enavo Gotas</h1>
              <p className="text-xs text-slate-600">Ondansetrona Pediátrica</p>
            </div>
          </button>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-2" aria-label="Navegação principal">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("introduction")} 
              className="text-slate-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Início
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("guidelines")} 
              className="text-slate-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Diretrizes
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('posologia')} 
              className="text-slate-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Calculadora
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('biblioteca')} 
              className="text-slate-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Biblioteca
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('ask-rep')} 
              className="text-slate-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Contato
            </Button>
          </nav>

          {/* Botão de Menu Mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              className="text-slate-700 h-12 w-12"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md shadow-lg"
            role="navigation"
          >
            <div className="flex flex-col px-4 py-4 space-y-2">
              <Button 
                variant="ghost" 
                className="justify-start text-slate-700 hover:text-blue-600 hover:bg-blue-50 h-12 text-base" 
                onClick={() => scrollToSection("introduction")}
              >
                Início
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start text-slate-700 hover:text-blue-600 hover:bg-blue-50 h-12 text-base" 
                onClick={() => scrollToSection("guidelines")}
              >
                Diretrizes Clínicas
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start text-slate-700 hover:text-blue-600 hover:bg-blue-50 h-12 text-base" 
                onClick={() => scrollToSection('posologia')}
              >
                Calculadora de Dose
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start text-slate-700 hover:text-blue-600 hover:bg-blue-50 h-12 text-base" 
                onClick={() => scrollToSection('biblioteca')}
              >
                Biblioteca Científica
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start text-slate-700 hover:text-blue-600 hover:bg-blue-50 h-12 text-base" 
                onClick={() => scrollToSection('ask-rep')}
              >
                Fale com Especialista
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
