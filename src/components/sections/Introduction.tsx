import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export function Introduction() {
  return (
    <section 
      id="introduction" 
      className="mx-auto max-w-6xl px-4 text-center scroll-mt-28 py-16 md:py-20"
      aria-labelledby="hero-title"
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-8"
      >
        {/* Título Principal */}
        <div className="space-y-4">
          <img 
            src="/logo-enavo.jpeg" 
            alt="Logo Enavo Gotas" 
            className="mx-auto h-24 w-auto mb-4"
          />
          <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            O único em gotas* para o tratamento de{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Náuseas e Vômitos
            </span>
          </h1>
          <p className="text-sm text-slate-500 italic">
            *única ondansetrona em gotas no mercado brasileiro
          </p>
        </div>

        {/* Cards de Diferenciais */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-4 shadow-md border border-blue-100 flex-1 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-base font-bold">1º</span>
              </div>
              <h3 className="font-semibold text-slate-900 text-base text-left">Único no Brasil</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed text-left">
              Primeira e única formulação em gotas de ondansetrona disponível no mercado.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md border border-blue-100 flex-1 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xs font-bold">0,4mg</span>
              </div>
              <h3 className="font-semibold text-slate-900 text-base text-left">Por Gota</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed text-left">
              Concentração precisa que permite ajuste fino da dosagem conforme peso e idade.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md border border-blue-100 flex-1 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">🍓</span>
              </div>
              <h3 className="font-semibold text-slate-900 text-base text-left">Sabor Morango</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed text-left">
              Palatabilidade que facilita a adesão ao tratamento pediátrico.
            </p>
          </div>
        </div>

        {/* Banner de Respaldo Científico */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 mt-10">
          <div className="text-center">
            <p className="text-blue-800 font-semibold text-base mb-2">
              Respaldado por Evidências Científicas
            </p>
            <p className="text-blue-700 text-sm">
              Citado nominalmente pela SBP • Aprovado pelo Ministério da Saúde • Recomendado por diretrizes internacionais
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
