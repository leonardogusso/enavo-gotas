import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, ExternalLink, BookOpen, Video } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export function CourseCTA() {
  const courseLink = "https://www.medicoexponencialems.com.br/video/eficacia-da-ondansetrona-na-sindrome-do-intestino-irritavel-tipo-diarreica-sii--d";
  
  return (
    <section id="course-cta" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-24">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Educação Médica Continuada
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Aprofunde seu conhecimento com os conteúdos exclusivos do Médico Exponencial EMS e mantenha-se atualizado com as melhores práticas.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 overflow-hidden">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Video className="h-6 w-6 text-purple-600" />
                    <h3 className="text-xl font-semibold text-slate-900">
                      Eficácia da Ondansetrona na SII-D
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Conteúdo especializado sobre a eficácia da ondansetrona na síndrome do intestino irritável tipo diarreica, com evidências científicas e aplicações práticas.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center space-x-2 bg-white px-3 py-1 rounded-full border">
                    <BookOpen className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium text-slate-700">Baseado em Evidências</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white px-3 py-1 rounded-full border">
                    <GraduationCap className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium text-slate-700">Educação Continuada</span>
                  </div>
                </div>

                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <a 
                    href={courseLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2"
                  >
                    <span>Acessar Conteúdo</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="relative hidden md:block">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Médico Exponencial</h4>
                        <p className="text-purple-200 text-sm">Plataforma EMS</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm"><span className="text-purple-200">Formato</span><span>Vídeo + Material</span></div>
                      <div className="flex justify-between text-sm"><span className="text-purple-200">Acesso</span><span>Gratuito</span></div>
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
