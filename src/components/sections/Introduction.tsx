import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export function Introduction() {
  const features = [
    {
      title: "Único no Brasil",
      description: "Primeira e única ondansetrona em gotas do mercado brasileiro",
      icon: "1º"
    },
    {
      title: "Precisão por Gota",
      description: "0,4mg por gota - dosagem precisa para cada paciente",
      icon: "0,4mg"
    },
    {
      title: "Sabor Morango",
      description: "Alta palatabilidade facilita a adesão ao tratamento",
      icon: "🍓"
    }
  ];

  return (
    <section 
      id="introduction" 
      className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 bg-gradient-to-b from-blue-50/30 to-white"
      aria-labelledby="hero-title"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Logo + Hero Text */}
          <div className="text-center space-y-6">
            <img 
              src="/logo-enavo.jpeg" 
              alt="Enavo Gotas" 
              className="mx-auto h-16 md:h-20 w-auto rounded-2xl shadow-md"
            />
            
            <h1 id="hero-title" className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
              O único em gotas* para{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Náuseas e Vômitos
              </span>
            </h1>
            
            <p className="text-sm text-gray-500 italic">
              *única ondansetrona em gotas no mercado brasileiro
            </p>
          </div>

          {/* Cards de Diferenciais - Instagram style */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center text-lg font-bold text-blue-600">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Banner de Credibilidade - Instagram style */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-3">
                    Respaldo Científico
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <span>Diretrizes SBP</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <span>Ministério da Saúde</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <span>Protocolos Internacionais</span>
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
