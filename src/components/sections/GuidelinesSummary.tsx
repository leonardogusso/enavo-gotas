import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Award, BookOpen, Star } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

// Menus expansíveis com cores azuis
const guidelines = [
  {
    id: "diferenciais",
    title: "Diferenciais de Enavo Gotas",
    icon: <BookOpen className="text-blue-700" />,
    color: "blue",
    content: (
      <ul className="ml-4 list-disc">
        <li>
          <b>Formulação Exclusiva:</b> Único ondansetrona em gotas do Brasil, facilitando a administração e precisão da dose pediátrica.
        </li>
        <li>
          <b>Sabor Morango:</b> Aumenta a adesão ao tratamento, com sabor agradável e sem necessidade de água.
        </li>
      </ul>
    )
  },
  {
    id: "gea",
    title: "Uso na Gastroenterite Aguda (GEA)",
    icon: <Award className="text-blue-700" />,
    color: "blue",
    content: (
      <>
        <p>O uso de dose oral única de ondansetrona é endossado por diretrizes para facilitar a Terapia de Reidratação Oral (TRO) e reduzir hospitalizações.</p>
        <ul className="ml-4 list-disc">
          <li><b>8-15 kg:</b> 2mg (5 gotas)</li>
          <li><b>15-30 kg:</b> 4mg (10 gotas)</li>
          <li><b>&gt;30 kg:</b> 8mg (20 gotas)</li>
        </ul>
      </>
    )
  },
  {
    id: "endosso",
    title: "Forte Endosso no Brasil",
    icon: <Star className="text-blue-700" />,
    color: "blue",
    content: (
      <>
        <p>
          Recomendado pela Sociedade Brasileira de Pediatria (SBP) no "Tratado de Pediatria" e no guia "Manejo da diarreia aguda", além de constar nos protocolos do Ministério da Saúde.<br />
          <b>Diretrizes oficiais SBP 2023</b>
        </p>
      </>
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
      {/* Menus expansíveis */}
      <Accordion type="single" collapsible value={value} onValueChange={setValue} className="max-w-4xl mx-auto">
        {guidelines.map((item) => {
          const colors = getColorClasses(item.color);
          return (
            <AccordionItem key={item.id} value={item.id} className={`mb-4 rounded-xl ${colors.bg} ${colors.border} transition`}>
              <AccordionTrigger className={`flex items-center gap-3 px-4 py-3 font-bold text-lg ${colors.text} hover:bg-blue-100 rounded-xl`}>
                <span>{item.icon}</span>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-800">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
