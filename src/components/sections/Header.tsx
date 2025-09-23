import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // O offset de -100px compensa a altura do header fixo
      const topPos = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm"
      role="banner"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo e Nome do Produto */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/ems-logo.png" 
              alt="Logo da EMS Pharma" 
              className="h-8 w-auto"
              // Adicione um fallback simples caso a imagem não carregue
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-blue-900">Enavo Gotas</h1>
              <p className="text-xs text-slate-600">Ondansetrona Pediátrica</p>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Navegação principal">
            <Button variant="link" onClick={() => scrollToSection('guidelines')}>Diretrizes</Button>
            <Button variant="link" onClick={() => scrollToSection('posologia')}>Calculadora</Button>
            <Button variant="link" onClick={() => scrollToSection('biblioteca')}>Biblioteca</Button>
            <Button variant="link" onClick={() => scrollToSection('ask-rep')}>Contato</Button>
          </nav>

          {/* Botão de Menu Mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            className="md:hidden border-t border-blue-100"
            role="navigation"
          >
            <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
              <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('guidelines')}>Diretrizes Clínicas</Button>
              <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('posologia')}>Calculadora de Dose</Button>
              <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('biblioteca')}>Biblioteca Científica</Button>
              <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('ask-rep')}>Fale com Especialista</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
