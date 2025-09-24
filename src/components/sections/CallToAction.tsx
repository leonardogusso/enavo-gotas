import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Info } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export function CallToAction() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-24">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full">
            <Download className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Material de Apoio
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Acesse a documentação completa e materiais de referência para prescrição segura e eficaz.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 overflow-hidden">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-slate-900">
                      Bula Completa - Enavo Gotas
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Documento oficial com todas as informações técnicas, posologia detalhada, contraindicações e efeitos adversos.
                  </p>
                </div>

                <div className="space-y-3">
                   <div className="flex items-center space-x-3 text-sm text-slate-600">
                     <Info className="h-4 w-4 text-blue-600 flex-shrink-0" />
                     <span>Informações técnicas completas</span>
                   </div>
                   <div className="flex items-center space-x-3 text-sm text-slate-600">
                     <Info className="h-4 w-4 text-blue-600 flex-shrink-0" />
                     <span>Posologia por faixa etária e peso</span>
                   </div>
                </div>

                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <a 
                    href="/bula-enavo.pdf" 
                    className="inline-flex items-center space-x-2"
                    download
                  >
                    <Download className="h-4 w-4" />
                    <span>Baixar Bula Completa (PDF)</span>
                  </a>
                </Button>
              </div>

              <div className="relative hidden md:block">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-2xl">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Bula Oficial</h4>
                      <p className="text-blue-200 text-sm">Documento regulamentado pela ANVISA</p>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between"><span className="text-blue-200">Formato:</span><span>PDF</span></div>
                      <div className="flex justify-between"><span className="text-blue-200">Tamanho:</span><span>~2MB</span></div>
                      <div className="flex justify-between"><span className="text-blue-200">Atualização:</span><span>2024</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
