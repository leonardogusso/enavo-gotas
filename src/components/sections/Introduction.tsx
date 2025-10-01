import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export function Introduction() {
  return (
    <section 
      id="introduction" 
      className="bg-white py-20 scroll-mt-28"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {/* Título Principal */}
        <div className="text-center space-y-6">
          <h1 id="hero-title" className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-4xl mx-auto">
            O único em gotas* para o tratamento de{' '}
            <span className="text-blue-600">Náuseas e Vômitos</span>
          </h1>
          <p className="text-sm text-slate-500 italic">
            *única ondansetrona em gotas no mercado brasileiro
          </p>
        </div>

        {/* Cards de Diferenciais - Design Moderno e Organizado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Único no Brasil */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">1º</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Único no Brasil
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Primeira e única formulação em gotas de ondansetrona disponível no mercado brasileiro.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Card 2 - Precisão por Gota */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300">
                <span className="text-white text-lg font-bold">0,4mg</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Precisão por Gota
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Concentração precisa que permite ajuste fino da dosagem conforme peso e idade do paciente.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Card 3 - Sabor Morango */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300">
                <span className="text-3xl">🍓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Sabor Morango
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Palatabilidade que facilita significativamente a adesão ao tratamento pediátrico.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Banner de Respaldo Científico - Design Moderno */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-8">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Respaldado por Evidências Científicas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-700">
                  <div className="flex items-center justify-center space-x-2 bg-white/50 rounded-lg p-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="font-medium">Citado nominalmente pela SBP</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 bg-white/50 rounded-lg p-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="font-medium">Aprovado pelo Ministério da Saúde</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 bg-white/50 rounded-lg p-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="font-medium">Recomendado por diretrizes internacionais</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
