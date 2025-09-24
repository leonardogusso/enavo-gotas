import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  
  const professionalNumber = "5511991367425"; // Número do especialista/representante
  
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
    <section id="ask-rep" className="mx-auto max-w-4xl px-4 py-16 scroll-mt-24">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Fale com um Especialista</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Tem dúvidas sobre Enavo Gotas? Entre em contato diretamente com nossos especialistas via WhatsApp.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-green-800">
              <MessageCircle className="h-5 w-5" />
              <span>Contato Direto com Especialista</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome-rep" className="flex items-center space-x-2"><User className="h-4 w-4 text-slate-500" /><span>Nome (opcional)</span></Label>
                <Input id="nome-rep" type="text" value={doctorName} onChange={handleNameChange} placeholder="Dr(a). Seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="especialidade-rep" className="flex items-center space-x-2"><Stethoscope className="h-4 w-4 text-slate-500" /><span>Especialidade (opcional)</span></Label>
                <Input id="especialidade-rep" type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="Ex: Pediatria" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="crm-rep" className="flex items-center space-x-2"><FileText className="h-4 w-4 text-slate-500" /><span>CRM (opcional)</span></Label>
                <Input id="crm-rep" type="text" value={crm} onChange={(e) => setCrm(e.target.value)} placeholder="Ex: CRM/SP 123456" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clinica-rep" className="flex items-center space-x-2"><Building className="h-4 w-4 text-slate-500" /><span>Clínica/Hospital (opcional)</span></Label>
                <Input id="clinica-rep" type="text" value={clinic} onChange={(e) => setClinic(e.target.value)} placeholder="Nome da instituição" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pergunta-rep" className="flex items-center space-x-2"><MessageCircle className="h-4 w-4 text-slate-500" /><span>Sua pergunta *</span></Label>
              <Textarea id="pergunta-rep" value={question} onChange={(e) => setQuestion(e.target.value)} rows={4} placeholder="Digite sua pergunta sobre Enavo Gotas aqui..." className="resize-none" />
            </div>
            
            <Button asChild size="lg" className={`w-full ${question ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' : 'bg-gray-400 cursor-not-allowed'} text-white shadow-lg transition-all duration-200`} disabled={!question}>
              <a href={question ? whatsappUrl : '#'} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center space-x-2">
                <Send className="h-4 w-4" />
                <span>Enviar via WhatsApp</span>
              </a>
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-slate-500">Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-formatada.</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
