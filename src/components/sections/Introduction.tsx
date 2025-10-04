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
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {/* Logo Enavo original */}
        <img src="/logo-enavo.jpeg" alt="Enavo Gotas" className="mx-auto h-16 md:h-20 w-auto rounded-2xl shadow-md" />
        <h3 className="text-3xl md:text-4xl font-bold text-blue-900 text-center" id="hero-title">
          O único em gotas<span className="text-lg text-gray-500 font-normal">*</span> para <span className="whitespace-nowrap">Náuseas e Vômitos</span>
        </h3>
        <p className="text-center text-gray-500">*única ondansetrona em gotas no mercado brasileiro</p>
        {/* Cards de Diferenciais */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
              <div className="text-blue-700 text-2xl font-bold mb-2">{feature.icon}</div>
              <h4 className="font-bold text-blue-900">{feature.title}</h4>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        {/* Banner de Credibilidade */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h4 className="font-bold text-blue-800 text-xl mb-2">Respaldo Científico</h4>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <span className="font-medium text-blue-600">Diretrizes SBP</span>
            <span className="font-medium text-gray-500">Ministério da Saúde</span>
            <span className="font-medium text-gray-500">Protocolos Internacionais</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
