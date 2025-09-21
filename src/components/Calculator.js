import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations';

export function Calculator() {
  const [peso, setPeso] = useState('');
  const [idade, setIdade] = useState('');
  const posologia = useMemo(() => {
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const idadeNum = parseInt(idade, 10);
    if (isNaN(pesoNum) || pesoNum <= 0 || isNaN(idadeNum) || idadeNum < 2) return null;
    if (pesoNum <= 30) {
      const gotas = Math.min(Math.round(pesoNum), 10);
      const mgFinais = (gotas * 0.4).toFixed(1);
      return `${gotas} gotas (${mgFinais} mg).`;
    } else {
      return `De 10 a 20 gotas (4 mg a 8 mg).`;
    }
  }, [peso, idade]);

  return (
    <motion.section id="posologia" className="bg-white border-y border-gray-200 shadow-sm scroll-mt-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
      <div className="mx-auto max-w-md px-4 py-8">
        <h2 className="font-serif text-3xl font-bold text-sky-900 text-center">Calculadora de Dose Clínica</h2>
        <div className="mt-6 bg-sky-50/50 border-l-4 border-sky-400 p-4 rounded-r-lg">
          <p className="text-sm text-sky-800 font-semibold">Nota sobre posologia (6 meses a 2 anos):</p>
          <p className="text-sm text-slate-700 mt-1">Para esta faixa etária, a dose recomendada é de 0,2 mg/kg a 0,4 mg/kg. Consulte a bula.</p>
        </div>
        <p className="text-center text-slate-600 mt-6 font-semibold">Para crianças a partir de 2 anos:</p>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <label htmlFor="idade" className="text-slate-700 text-sm font-semibold">Idade (anos)</label>
            <input id="idade" value={idade} onChange={(e) => setIdade(e.target.value)} type="number" min="2" placeholder="Ex: 3" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-emsblue focus:border-emsblue transition" />
          </div>
          <div>
            <label htmlFor="peso" className="text-slate-700 text-sm font-semibold">Peso (kg)</label>
            <input id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} inputMode="decimal" placeholder="Ex: 15,5" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-emsblue focus:border-emsblue transition" />
          </div>
        </div>
        {posologia && (
          <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
            <p className="text-emerald-800 text-sm font-semibold">Dose calculada:</p>
            <p className="font-sans text-3xl font-bold text-emerald-900 my-1">{posologia}</p>
          </div>
        )}
      </div>
    </motion.section>
  );
}
