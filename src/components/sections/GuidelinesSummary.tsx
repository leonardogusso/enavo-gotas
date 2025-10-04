import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Award, BookOpen, Star } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const guidelines = [
  {
    id: "diferenciais",
    title: "Diferenciais de Enavo Gotas",
    icon: <BookOpen className="text-blue-700" />,
    color: "blue",
    content: (
      <ul className="ml-4 list-disc text-blue-800 font-medium">
        <li>Formulação Exclusiva: Único ondansetrona em gotas do Brasil, facilitando a administração e precisão da dose pediátrica.</li>
        <li>Sabor Morango: Aumenta a adesão ao tratamento, com sabor agradável e sem necessidade de água.</li>
      </ul>
    )
  },
  {
    id: "gea",
    title: "Uso na Gastroenterite Aguda (GEA)",
    icon: <Award className="text-blue-700" />,
    color: "blue",
    content: (
      <div>
        <p>O uso de dose oral única de ondansetrona é endossado por diretrizes para facilitar a Terapia de Reidratação Oral (TRO) e reduzir hospitalizações.</p>
        <ul className="ml-4 list-disc">
          <li><span className="font-bold">8-15 kg</span>: 2mg (5 gotas)</li>
          <li><span className="font-bold">15-30 kg</span>: 4mg (10 gotas)</li>
          <li><span className="font-bold">&gt;30 kg</span>: 8mg (20 gotas)</li>
        </ul>
      </div>
    )
  },
  {
    id: "endosso",
    title: "Forte Endosso no Brasil",
    icon: <Star className="text-blue-700" />,
    color: "blue",
    content: (
      <div>
        <p>
          Recomendado pela Sociedade Brasileira de Pediatria (SBP) no "Tratado de Pediatria" e no guia "Manejo da diarreia aguda", além de constar nos protocolos do Ministério da Saúde.<br />
          <strong>Diretrizes oficiais SBP 2023</strong>
        </p>
      </div>
    )
  }
];

export function GuidelinesSummary() {
  const [value, setValue] = useState("diferenciais");
  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        hover: 'hover:bg-blue-100'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };
  return (
    <section id="guidelines" className="py-12 md:py-20 bg-white" aria-labelledby="guidelines-title">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4" id="guidelines-title">
          Evidências Clínicas
        </h2>
        <p className="max-w-xl mx-auto text-gray-600">
          Base científica que sustenta o uso de Enavo Gotas
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {guidelines.map((item) => {
          const colors = getColorClasses(item.color);
          return (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={[
                colors.bg,
                colors.border,
                "rounded-2xl p-6 shadow-sm transition-all border"
              ].join(' ')}
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className={["font-bold text-xl mt-3 mb-2", colors.text].join(' ')}>{item.title}</h3>
              <div className="text-gray-700">{item.content}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
