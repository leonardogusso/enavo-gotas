import React from 'react';
import { motion } from 'framer-motion';

// Lista de links para a navegação
const navLinks = [
  { href: '#guidelines', text: 'Diretrizes' },
  { href: '#posologia', text: 'Calculadora' },
  { href: '#course-cta', text: 'Curso EMS' },
  { href: '#ask-rep', text: 'Contato' }
];

export function Header() {
  return (
    // Usando motion.nav para animar a entrada do header
    <motion.nav 
      className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm z-50"
      initial={{ y: -100, opacity: 0 }} // Posição inicial: fora da tela e transparente
      animate={{ y: 0, opacity: 1 }} // Posição final: no lugar e visível
      transition={{ duration: 0.5, ease: "easeOut" }} // Duração e tipo da animação
    >
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo da Marca */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <img className="h-8 w-auto" src="/logo-enavo.jpeg" alt="Logo Enavo Gotas" />
              <span className="font-bold text-emsblue hidden md:inline">Enavo Gotas</span>
            </a>
          </div>

          {/* Links de Navegação */}
          <div className="hidden md:flex items-baseline space-x-4">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-slate-600 hover:text-emsblue px-3 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Botão de Contato (visível em telas maiores) */}
          <div className="hidden md:block">
            <a 
              href="#cta" 
              className="bg-emsblue text-white px-4 py-2 rounded-md text-sm font-semibold shadow hover:bg-sky-800 transition-colors"
            >
              Baixar Bula
            </a>
          </div>
          
          {/* Menu para Mobile (simplificado) */}
          <div className="md:hidden">
              <a href="#posologia" className="bg-emsblue text-white px-3 py-1.5 rounded-md text-xs font-semibold">Calculadora</a>
          </div>

        </div>
      </div>
    </motion.nav>
  );
}
