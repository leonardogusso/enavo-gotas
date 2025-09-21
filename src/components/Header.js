import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#guidelines', text: 'Diretrizes' },
  { href: '#posologia', text: 'Calculadora' },
  { href: '#course-cta', text: 'Cursos' },
  { href: '#ask-rep', text: 'Contato' },
  { href: '#cta', text: 'Bula' }
];

export function Header() {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <motion.nav 
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center justify-between h-16">
            
            <a href="#" className="flex-shrink-0 flex items-center space-x-2">
              <img className="h-8 w-auto" src="/logo-enavo.jpeg" alt="Logo Enavo Gotas" />
              <span className="font-bold text-emsblue hidden sm:inline">Enavo Gotas</span>
            </a>

            {/* Links de Navegação para Desktop */}
            <div className="hidden md:flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-slate-600 hover:text-emsblue px-3 py-2 rounded-md text-sm font-semibold transition-colors">
                  {link.text}
                </a>
              ))}
            </div>

            {/* Botão Hamburger para Mobile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-emsblue hover:bg-sky-100 focus:outline-none"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Menu Dropdown Mobile com Animação */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
                    className="text-slate-600 hover:text-emsblue hover:bg-sky-100 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
