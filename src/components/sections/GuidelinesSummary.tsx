import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Award, BookOpen, Star } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const guidelines = [
  {
    id: "diferenciais",
    title: "Diferenciais de Enavo Gotas",
    icon: <Star className="h-5 w-5" />,
    color: "blue",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
          <div>
            <span className="font-semibold text-slate-900">Formulação Exclusiva:</span>
            <p className="text-slate-600 mt-1">Único ondansetrona em gotas do Brasil, facilitando a administração e precisão da dose pediátrica.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
          <div>
            <span className="font-semibold text-slate-900">Sabor Morango:</span>
            <p className="text-slate-600 mt-1">Aumenta a adesão ao tratamento, com sabor agradável e sem necessidade de água.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "gea",
    title: "Uso na Gastroenterite Aguda (GEA)",
    icon: <Award className="h-5 w-5" />,
    color: "green",
    content: (
      <div className="space-y-4">
        <p className="text-slate-700">
          O uso de dose oral única de ondansetrona é endossado por diretrizes para facilitar a Terapia de Reidratação Oral (TRO) e reduzir hospitalizações.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <p className="text-sm font-semibold text-blue-900 mb-3">Posologia recomendada na GEA:</p>
          <div className="space-y-2 text-sm text-slate-700">
            <div className="flex justify-between items-center">
              <span className="font-medium">8-15 kg</span>
              <span className="font-mono text-blue-600">2mg (5 gotas)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">15-30 kg</span>
              <span className="font-mono text-blue-600">4mg (10 gotas)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">&gt;30 kg</span>
              <span className="font-mono text-blue-600">8mg (20 gotas)</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "endosso",
    title: "Forte Endosso no Brasil",
    icon: <BookOpen className="h-5 w-5" />,
    color: "amber",
    content: (
      <div className="space-y-3">
        <p className="text-slate-700">
          Recomendado pela Sociedade Brasileira de Pediatria (SBP) no "Tratado de Pediatria" e no guia "Manejo da diarreia aguda", além de constar nos protocolos do Ministério da Saúde.
        </p>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <img src="/logo-SBP.webp" alt="SBP" className="w-12 h-12 object-contain opacity-70" />
          <span className="font-medium">Diretrizes oficiais SBP 2023</span>
        </div>
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
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        hover: 'hover:bg-green-100'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-600',
        hover: 'hover:bg-amber-100'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section 
      id="guidelines" 
      className="py-12 md:py-20 bg-white"
      aria-labelledby="guidelines-title"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.header
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10"
        >
          <h2 id="guidelines-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Evidências Clínicas
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Base científica que sustenta o uso de Enavo Gotas
          </p>
        </motion.header>
        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Accordion type="single" collapsible value={value} onValueChange={setValue} className="space-y-4">
            {guidelines.map((item) => {
              const colors = getColorClasses(item.color);
              
              return (
                <AccordionItem key={item.id} value={item.id} className="border-b-0">
                  <div className={`${colors.bg} border ${colors.border} rounded-xl overflow-hidden transition-all hover:shadow-md`}>
                    <AccordionTrigger className={`px-5 py-4 hover:no-underline ${colors.hover}`}>
                      <div className="flex items-center gap-3 text-left">
                        <div className={`${colors.text} flex-shrink-0`}>{item.icon}</div>
                        <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className={`px-5 pb-5 pt-2 border-t ${colors.border}`}>
                        {item.content}
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
