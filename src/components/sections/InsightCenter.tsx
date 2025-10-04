import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

// Este array pode ser expandido com dezenas de insights
const insights = [
  {
    category: "Você Sabia?",
    text: "A ondansetrona em dose única pode reduzir a necessidade de hidratação intravenosa em até 40% em crianças com GEA."
  },
  {
    category: "Dica Clínica",
    text: "O sabor morango de Enavo Gotas foi desenvolvido para aumentar a adesão ao tratamento, um fator crítico na pediatria."
  },
  {
    category: "Dado Relevante",
    text: "Diretrizes da SBP apoiam o uso de ondansetrona para facilitar a Terapia de Reidratação Oral (TRO)."
  },
  {
    category: "Farmacologia",
    text: "Enavo Gotas (0,4mg/gota) permite um ajuste de dose mais preciso por peso do que formulações em comprimido."
  }
];

export function InsightCenter() {
  const [currentInsight, setCurrentInsight] = useState(insights[0]);

  // Seleciona um insight aleatório a cada carregamento da página
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * insights.length);
    setCurrentInsight(insights[randomIndex]);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-sm mx-auto my-8"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-amber-600" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-amber-800">{currentInsight.category}</p>
          <p className="text-sm text-slate-600 mt-1">{currentInsight.text}</p>
        </div>
      </div>
    </motion.div>
  );
}
