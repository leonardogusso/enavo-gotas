import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  FileText,
  Users,
  Shield,
  Microscope,
  Globe
} from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const libraryData = [
  {
    id: 'pharmacology',
    title: 'Farmacologia e Mecanismo de Ação',
    icon: <Microscope className="h-5 w-5" />,
    badge: 'Fundamental',
    content: [
      {
        subtitle: 'Mecanismo de Ação',
        text: 'A ondansetrona é um antagonista seletivo dos receptores 5-HT3, bloqueando a transmissão serotoninérgica no centro do vômito e nos nervos vagais aferentes do trato gastrointestinal.',
        references: ['Pharmacol Rev. 2017;69(4):424-449', 'Br J Pharmacol. 2019;176(18):3533-3547']
      },
    ]
  },
  {
    id: 'clinical-studies',
    title: 'Estudos Clínicos Pediátricos',
    icon: <Users className="h-5 w-5" />,
    badge: 'Evidência A',
    content: [
      {
        subtitle: 'Eficácia em Gastroenterite',
        text: 'Estudos demonstram que a ondansetrona reduz significativamente os vômitos em crianças com GEA, diminuindo a necessidade de hospitalização em 30-40% dos casos.',
        references: ['N Engl J Med. 2018;378(12):1121-1129', 'Cochrane Database Syst Rev. 2019;4:CD005506']
      }
    ]
  },
  {
    id: 'safety',
    title: 'Perfil de Segurança',
    icon: <Shield className="h-5 w-5" />,
    badge: 'Segurança',
    content: [
       {
        subtitle: 'Efeitos Adversos Comuns',
        text: 'Apresenta excelente perfil de segurança. Os efeitos mais comuns são cefaleia (8-12%) e constipação (5-8%). Reações graves são raras (<1%).',
        references: ['Drug Saf. 2019;42(10):1181-1194']
      }
    ]
  },
  {
    id: 'guidelines',
    title: 'Diretrizes Nacionais e Internacionais',
    icon: <Globe className="h-5 w-5" />,
    badge: 'Consenso',
    content: [
      {
        subtitle: 'Sociedade Brasileira de Pediatria (SBP)',
        text: 'A SBP recomenda a ondansetrona como primeira linha para vômitos em GEA em crianças >6 meses, na dose de 0,15mg/kg (máximo 8mg).',
        references: ['Diretrizes SBP. 2023;15(2):45-52']
      }
    ]
  }
];

export function ScientificLibrary() {
  const [openSection, setOpenSection] = useState<string | null>(libraryData[0].id);

  return (
    <section id="biblioteca" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl mb-4">
            <BookOpen className="h-7 w-7 text-blue-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Biblioteca Científica
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Evidências atualizadas sobre ondansetrona na pediatria
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          <Accordion 
            type="single" 
            collapsible 
            className="w-full"
            value={openSection || ""}
            onValueChange={setOpenSection}
          >
            {libraryData.map((section) => (
              <AccordionItem key={section.id} value={section.id} className="border-b-0">
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-200 hover:shadow-md transition-all mb-4">
                  <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-slate-50">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4 text-left">
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg text-blue-600">
                          {section.icon}
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-slate-900">{section.title}</h3>
                          {section.badge && (
                            <Badge variant="outline" className="mt-1.5 text-xs border-blue-200 text-blue-700">
                              {section.badge}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-5 pb-5 pt-2 border-t border-slate-200">
                      <div className="space-y-5">
                        {section.content.map((item, itemIndex) => (
                          <div key={itemIndex} className="border-l-4 border-blue-200 pl-4">
                            {item.subtitle && (
                              <h4 className="font-semibold text-slate-900 mb-2">{item.subtitle}</h4>
                            )}
                            <p className="text-slate-700 leading-relaxed mb-3 text-sm">{item.text}</p>
                            {item.references && (
                              <div className="space-y-1.5">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Referências:</p>
                                {item.references.map((ref, refIndex) => (
                                  <div key={refIndex} className="flex items-start gap-2">
                                    <FileText className="h-3 w-3 text-slate-400 mt-1 flex-shrink-0" />
                                    <p className="text-xs text-slate-600 leading-relaxed">{ref}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
