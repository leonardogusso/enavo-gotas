import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  FileText,
  Users,
  Shield,
  Microscope,
  Heart,
  Baby,
  Globe
} from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

// Estrutura de dados para o conteúdo da biblioteca
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
    title: 'Diretrizes Internacionais e Nacionais',
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
    <section id="biblioteca" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Biblioteca Científica</h2>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Evidências científicas atualizadas sobre o uso de ondansetrona na pediatria.
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
              <AccordionItem key={section.id} value={section.id} className="border-b-0 mb-4">
                <Card className="overflow-hidden transition-all duration-200 hover:shadow-md border-slate-200 hover:border-blue-300">
                  <AccordionTrigger className="p-6 hover:no-underline hover:bg-slate-50/50 w-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-4 text-left">
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg text-blue-600">
                          {section.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
                          {section.badge && <Badge variant="outline" className="mt-1 text-xs">{section.badge}</Badge>}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 pt-0 border-t">
                      <div className="space-y-6 pt-4">
                        {section.content.map((item, itemIndex) => (
                          <div key={itemIndex} className="border-l-4 border-blue-200 pl-4">
                            {item.subtitle && <h4 className="font-semibold text-slate-900 mb-2">{item.subtitle}</h4>}
                            <p className="text-slate-700 leading-relaxed mb-3">{item.text}</p>
                            {item.references && (
                              <div className="space-y-1">
                                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Referências:</p>
                                {item.references.map((ref, refIndex) => (
                                  <div key={refIndex} className="flex items-start space-x-2">
                                    <FileText className="h-3 w-3 text-slate-400 mt-1 flex-shrink-0" />
                                    <p className="text-xs text-slate-600">{ref}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
