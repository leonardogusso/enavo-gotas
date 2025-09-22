import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<section id="guidelines" className="mx-auto max-w-md px-4 scroll-mt-24">

const guidelines = [
  {
    title: "Diferenciais de Enavo Gotas",
    content: () => (
      <ul className="text-sm mt-2 space-y-2 text-slate-700">
        <li><span className="font-semibold">Formulação Exclusiva:</span> Primeiro e único ondansetrona em gotas do Brasil, facilitando a administração pediátrica.</li>
        <li><span className="font-semibold">Baixo Volume e Sabor Morango:</span> Aumenta a adesão ao tratamento, com sabor agradável e sem a necessidade de água.</li>
        <li><span className="font-semibold">Ação Rápida:</span> Início de ação rápido para náuseas e vômitos.</li>
      </ul>
    )
  },
  {
    title: "Uso Consolidado na Gastroenterite Aguda (GEA)",
    content: () => (
      <>
        <p className="text-sm mt-2 text-slate-700">O uso de dose oral única de ondansetrona na GEA é endossado por diversas sociedades pediátricas internacionais para facilitar a Terapia de Reidratação Oral (TRO).</p>
        <div className="mt-3 bg-sky-50/70 p-3 rounded-md">
          <p className="text-xs font-semibold text-sky-800">Posologia recomendada por peso na GEA:</p>
          <ul className="text-xs mt-1 text-slate-700 list-disc list-inside">
            <li><strong>8-15 kg:</strong> 2 mg (5 gotas)</li>
            <li><strong>15-30 kg:</strong> 4 mg (10 gotas)</li>
            <li><strong>&gt;30 kg:</strong> 8 mg (20 gotas)</li>
          </ul>
        </div>
      </>
    )
  },
  {
    title: "Forte Endosso no Brasil",
    content: () => (
      <p className="text-sm mt-2 text-slate-700">A recomendação do uso de ondansetrona é formalmente citada pela Sociedade Brasileira de Pediatria (SBP) em seu <strong>"Tratado de Pediatria (2017)"</strong> e no guia prático de atualização <strong>“Manejo da diarreia aguda” (2017)</strong>, além de constar nos protocolos do Ministério da Saúde.</p>
    )
  }
];

const AccordionItem = ({ item, isOpen, onClick }) => (
  <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
    <button onClick={onClick} className="w-full flex justify-between items-center p-5 text-left">
      <h3 className="font-sans font-bold text-emsblue">{item.title}</h3>
      <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
        <svg className="w-5 h-5 text-emsblue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </motion.div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } }}
          exit={{ height: 0, opacity: 0, transition: { duration: 0.2, ease: 'easeInOut' } }}
          className="px-5 pb-5"
        >
          {item.content()}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export function GuidelinesSummary() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="guidelines" className="mx-auto max-w-md px-4 scroll-mt-24">
      <h2 className="font-serif text-3xl font-bold text-sky-900 text-center">Diferenciais e Evidências Clínicas</h2>
      <div className="mt-6 space-y-4">
        {guidelines.map((item, index) => (
          <AccordionItem key={item.title} item={item} isOpen={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)} />
        ))}
      </div>
    </section>
  );
}
