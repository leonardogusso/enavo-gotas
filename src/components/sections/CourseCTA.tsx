import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GraduationCap, ExternalLink, Video, CheckCircle2 } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export function CourseCTA() {
  const courseLink = "https://www.medicoexponencialems.com.br/video/eficacia-da-ondansetrona-na-sindrome-do-intestino-irritavel-tipo-diarreica-sii--d";
  
  return (
    <section id="course-cta" className="py-12 md:py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl mb-4">
            <GraduationCap className="h-7 w-7 text-blue-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Educação Médica Continuada
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Aprofunde seu conhecimento com conteúdos exclusivos do Médico Exponencial EMS
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Conteúdo */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <Video className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <h3 className="text-xl font-bold text-slate-900">
                      Eficácia da Ondansetrona na SII-D
                    </h3>
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed">
                    Conteúdo especializado sobre a eficácia da ondansetrona na síndrome do intestino irritável tipo diarreica, com evidências científicas e aplicações práticas.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {['Baseado em Evidências', 'Educação Continuada', 'Acesso Gratuito'].map((tag, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-blue-200 text-sm font-medium text-blue-700">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all"
                  >
                    <a 
                      href={courseLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <span>Acessar Conteúdo</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                {/* Card Visual */}
                <div className="hidden md:block">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-xl">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-bold">Médico Exponencial</h4>
                          <p className="text-blue-200 text-sm">Plataforma EMS</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-blue-200">Formato:</span>
                          <span className="font-semibold">Vídeo + Material</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-200">Acesso:</span>
                          <span className="font-semibold">Gratuito</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-200">Duração:</span>
                          <span className="font-semibold">~15 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
