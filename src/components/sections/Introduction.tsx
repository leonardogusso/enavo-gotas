import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export function Introduction() {
  return (
    <section 
      id="introduction" 
      className="medical-section medical-container scroll-mt-28"
      aria-labelledby="hero-title"
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {/* Logo e Título Principal */}
        <div className="text-center space-y-6">
          <img 
            src="/logo-enavo.jpeg" 
            alt="Logo Enavo Gotas" 
            className="mx-auto h-20 w-auto"
          />
          <h1 id="hero-title" className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-4xl mx-auto">
            O único em gotas* para o tratamento de{' '}
            <span className="text-blue-600">Náuseas e Vômitos</span>
          </h1>
          <p className="text-sm text-slate-500 italic">
            *única ondansetrona em gotas no mercado brasileiro
          </p>
        </div>

        {/* Cards de Diferenciais - Design Limpo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="medical-card-elevated p-6 hover:border-blue-200 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-xl font-bold">1º</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Único no Brasil
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Primeira e única formulação em gotas de ondansetrona disponível no mercado brasileiro.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="medical-card-elevated p-6 hover:border-blue-200 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <span className="clinical-data text-blue-600 text-base">0,4mg</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Precisão por Gota
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Concentração precisa que permite ajuste fino da dosagem conforme peso e idade do paciente.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="medical-card-elevated p-6 hover:border-blue-200 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🍓</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Sabor Morango
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Palatabilidade que facilita significativamente a adesão ao tratamento pediátrico.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Banner de Respaldo Científico - Tom Profissional */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="medical-card border-l-4 border-blue-600 p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  Respaldado por Evidências Científicas
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span>Citado nominalmente pela SBP</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span>Aprovado pelo Ministério da Saúde</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span>Recomendado por diretrizes internacionais</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
