import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Send, User, Stethoscope, FileText, Building } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

interface AskRepProps {
  doctorName?: string;
  setDoctorName?: (name: string) => void;
}

export function AskRep({ doctorName = '', setDoctorName }: AskRepProps) {
  const [question, setQuestion] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [crm, setCrm] = useState('');
  const [clinic, setClinic] = useState('');
  
  const professionalNumber = "5511991367425";
  
  let message = `Nova pergunta sobre Enavo Gotas (via plataforma digital):\n`;
  if (doctorName) message += `\n- Nome: Dr(a). ${doctorName}`;
  if (specialty) message += `\n- Especialidade: ${specialty}`;
  if (crm) message += `\n- CRM: ${crm}`;
  if (clinic) message += `\n- Clínica/Hospital: ${clinic}`;
  message += `\n\n- Pergunta: ${question}`;
  
  const whatsappUrl = `https://wa.me/${professionalNumber}?text=${encodeURIComponent(message)}`;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setDoctorName) {
      setDoctorName(e.target.value);
    }
  };

  return (
    <section id="ask-rep" className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-2xl mb-4">
            <MessageCircle className="h-7 w-7 text-green-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Fale com um Especialista
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tem dúvidas sobre Enavo Gotas? Entre em contato diretamente via WhatsApp
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 md:p-8">
            <div className="space-y-6">
              {/* Grid de Inputs */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome-rep" className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <User className="h-4 w-4 text-slate-500" />
                    Nome (opcional)
                  </Label>
                  <Input 
                    id="nome-rep" 
                    type="text" 
                    value={doctorName} 
                    onChange={handleNameChange} 
                    placeholder="Dr(a). Seu nome" 
                    className="h-11 border-slate-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="especialidade-rep" className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-slate-500" />
                    Especialidade (opcional)
                  </Label>
                  <Input 
                    id="especialidade-rep" 
                    type="text" 
                    value={specialty} 
                    onChange={(e) => setSpecialty(e.target.value)} 
                    placeholder="Ex: Pediatria" 
                    className="h-11 border-slate-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="crm-rep" className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-slate-500" />
                    CRM (opcional)
                  </Label>
                  <Input 
                    id="crm-rep" 
                    type="text" 
                    value={crm} 
                    onChange={(e) => setCrm(e.target.value)} 
                    placeholder="Ex: CRM/SP 123456" 
                    className="h-11 border-slate-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clinica-rep" className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <Building className="h-4 w-4 text-slate-500" />
                    Clínica/Hospital (opcional)
                  </Label>
                  <Input 
                    id="clinica-rep" 
                    type="text" 
                    value={clinic} 
                    onChange={(e) => setClinic(e.target.value)} 
                    placeholder="Nome da instituição" 
                    className="h-11 border-slate-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>
              </div>
              
              {/* Textarea */}
              <div className="space-y-2">
                <Label htmlFor="pergunta-rep" className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-slate-500" />
                  Sua pergunta *
                </Label>
                <Textarea 
                  id="pergunta-rep" 
                  value={question} 
                  onChange={(e) => setQuestion(e.target.value)} 
                  rows={4} 
                  placeholder="Digite sua pergunta sobre Enavo Gotas aqui..." 
                  className="resize-none border-slate-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
              
              {/* Botão */}
              <Button 
                asChild 
                size="lg" 
                disabled={!question}
                className={`w-full ${question ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-400 cursor-not-allowed'} text-white shadow-md transition-all`}
              >
                <a 
                  href={question ? whatsappUrl : '#'} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Enviar via WhatsApp</span>
                </a>
              </Button>
              
              <p className="text-center text-sm text-slate-500">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-formatada
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
