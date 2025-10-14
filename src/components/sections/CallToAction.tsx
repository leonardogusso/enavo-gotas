import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, FileText, BookMarked } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import { brandAnalytics } from '@/lib/brand-analytics';

const materials = [
  {
    title: "Bula Completa - Enavo® Gotas",
    description: "Documento oficial com todas as informações técnicas, posologia, contraindicações e efeitos adversos.",
    file: "/bula-enavo.pdf",
    tag: "Oficial",
    fileType: "PDF"
  },
{
  title: "Manejo da Gastroenterite Aguda",
  description: "Guia oficial do Ministério da Saúde para o manejo clínico da gastroenterite aguda em crianças.",
  file: "/manejo-gastroenterite-aguda.pdf",
  tag: "MS/SBP",
  fileType: "PDF"
},
  {
    title: "Estudo de Eficácia (NEJM)",
    description: "Artigo de referência sobre a eficácia da ondansetrona na redução de vômitos e necessidade de hospitalização.",
    file: "/Estudo_NEJM.pdf",
    tag: "Estudo Clínico",
    fileType: "PDF"
  }
];

export function CallToAction() {
  const handleDownload = (fileName: string, fileType: string) => {
    brandAnalytics.trackDownload(fileName, fileType);
  };

  return (
    <section id="cta" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl mb-4">
            <BookMarked className="h-7 w-7 text-blue-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Biblioteca de Downloads
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Acesse a documentação completa e os materiais de referência para uma prescrição segura e baseada em evidências.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {materials.map((material) => (
            <div 
              key={material.title} 
              className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 hover:border-blue-200 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <FileText className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-bold text-slate-900">{material.title}</h3>
                    <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                      {material.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{material.description}</p>
                </div>
                <Button 
                  asChild 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm w-full sm:w-auto"
                  onClick={() => handleDownload(material.title, material.fileType)}
                >
                  <a href={material.file} download>
                    <Download className="h-4 w-4 mr-2" />
                    Baixar PDF
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
