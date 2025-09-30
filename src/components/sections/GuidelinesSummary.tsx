import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Award, BookOpen, Star } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const guidelines = [
  {
    title: "Diferenciais de Enavo Gotas",
    icon: <Star className="h-5 w-5" aria-hidden="true" />,
    content: () => (
      <ul className="space-y-3 text-slate-700">
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
          <div><span className="font-semibold text-slate-900">Formulação Exclusiva:</span> Único ondansetrona em gotas do Brasil, facilitando a administração e precisão da dose pediátrica.</div>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
          <div><span className="font-semibold text-slate-900">Sabor Morango:</span> Aumenta a adesão ao tratamento, com sabor agradável e sem necessidade de água.</div>
        </li>
      </ul>
    )
  },
  {
    title: "Uso na Gastroenterite Aguda (GEA)",
    icon: <Award className="h-5 w-5" aria-hidden="true" />,
    content: () => (
      <>
        <p className="text-sm text-slate-700">
          O uso de dose oral única de ondansetrona é endossado por diretrizes para facilitar a Terapia de Reidratação Oral (TRO) e reduzir hospitalizações.
        </p>
        <div className="mt-4 bg-blue-50 p-3 rounded-md border border-blue-200">
          <p className="text-xs font-semibold text-blue-800">Posologia recomendada na GEA:</p>
          <ul className="text-xs mt-2 text-slate-700 list-disc list-inside space-y-1">
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
    icon: <BookOpen className="h-5 w-5" aria-hidden="true" />,
    content: () => (
      <p className="text-sm mt-2 text-slate-700">
        Recomendado pela Sociedade Brasileira de Pediatria (SBP) no "Tratado de Pediatria" e no guia "Manejo da diarreia aguda", além de constar nos protocolos do Ministério da Saúde.
      </p>
    )
  }
];

export function GuidelinesSummary() {
  const [value, setValue] = useState("Diferenciais de Enavo Gotas");

  return (
    <section 
      id="guidelines" 
      className="bg-slate-50 py-20"
      aria-labelledby="guidelines-title"
    >
      <div className="mx-auto max-w-6xl px-4 scroll-mt-32">
      <motion.header
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <h2 id="guidelines-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Evidências Clínicas e Diretrizes
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Base científica consolidada que sustenta o uso de Enavo Gotas na prática pediátrica.
        </p>
      </motion.header>
      
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Accordion type="single" collapsible value={value} onValueChange={setValue} className="w-full space-y-4">
          {guidelines.map((item, index) => {
            // Cores de fundo diferentes para cada card
            const cardColors = [
              "bg-green-50 border-green-200", // Verde para Diferenciais
              "bg-blue-50 border-blue-200",   // Azul para GEA
              "bg-amber-50 border-amber-200"  // Amarelo para Endosso
            ];
            const iconColors = [
              "text-green-600", // Verde para Diferenciais
              "text-blue-600",  // Azul para GEA
              "text-amber-600"  // Amarelo para Endosso
            ];
            const hoverColors = [
              "hover:bg-green-100", // Verde para Diferenciais
              "hover:bg-blue-100",  // Azul para GEA
              "hover:bg-amber-100"  // Amarelo para Endosso
            ];
            
            return (
              <AccordionItem key={index} value={item.title} className="border-b-0">
                <Card className={`overflow-hidden transition-all duration-200 hover:shadow-md ${cardColors[index]}`}>
                  <AccordionTrigger className={`p-6 hover:no-underline ${hoverColors[index]}`}>
                    <div className="flex items-center space-x-4">
                      <div className={iconColors[index]}>{item.icon}</div>
                      <h3 className="text-left text-slate-900 text-base font-semibold">{item.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className={`px-6 pb-6 pt-0 border-t ${cardColors[index].includes('green') ? 'border-green-200' : cardColors[index].includes('blue') ? 'border-blue-200' : 'border-amber-200'}`}>
                      <div className="pt-4">
                        {item.content()}
                      </div>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            );
          })}
        </Accordion>
      </motion.div>
      </div>
    </section>
  );
}
