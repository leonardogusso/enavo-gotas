import React, { useState } from 'react';

export function AskRep({ doctorName, setDoctorName }) {
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

  return (
    <section id="ask-rep" className="mx-auto max-w-md px-4 scroll-mt-24">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="font-serif text-2xl font-bold text-sky-900 text-center">Fale com um Especialista</h2>
        <p className="text-center text-slate-600 text-sm mt-2">Envie sua dúvida diretamente para um de nossos representantes.</p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="nome-rep" className="sr-only">Seu nome</label>
            <input id="nome-rep" type="text" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} placeholder="Seu nome (opcional)" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-emsblue focus:border-emsblue transition" />
          </div>
          <div>
            <label htmlFor="especialidade-rep" className="sr-only">Especialidade</label>
            <input id="especialidade-rep" type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="Especialidade (opcional)" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-emsblue focus:border-emsblue transition" />
          </div>
          <div>
            <label htmlFor="crm-rep" className="sr-only">CRM</label>
            <input id="crm-rep" type="text" value={crm} onChange={(e) => setCrm(e.target.value)} placeholder="CRM (opcional)" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-emsblue focus:border-emsblue transition" />
          </div>
          <div>
            <label htmlFor="clinica-rep" className="sr-only">Clínica/Hospital</label>
            <input id="clinica-rep" type="text" value={clinic} onChange={(e) => setClinic(e.target.value)} placeholder="Clínica/Hospital (opcional)" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-emsblue focus:border-emsblue transition" />
          </div>
          <div className="col-span-2">
            <label htmlFor="pergunta-rep" className="sr-only">Pergunta</label>
            <textarea id="pergunta-rep" value={question} onChange={(e) => setQuestion(e.target.value)} rows="4" placeholder="Digite sua pergunta aqui..." className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm col-span-2 focus:ring-2 focus:ring-emsblue focus:border-emsblue transition"></textarea>
          </div>
          <a href={question ? whatsappUrl : '#'} target="_blank" rel="noreferrer" className={`w-full block px-5 py-3 text-white rounded-lg text-base font-semibold shadow-lg text-center col-span-2 transition-transform hover:scale-105 ${question ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-gray-400 cursor-not-allowed'}`}>Enviar via WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
