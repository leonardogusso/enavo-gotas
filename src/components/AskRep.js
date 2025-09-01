import React, { useState } from 'react';

// Recebe o nome e a função para atualizá-lo do componente pai (App.js)
export function AskRep({ doctorName, setDoctorName }) {
  const [question, setQuestion] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [crm, setCrm] = useState('');
  const [clinic, setClinic] = useState('');
  
  const professionalNumber = "5511991367425";

  // Formata a mensagem de forma estruturada, incluindo apenas os campos preenchidos
  let message = `Nova pergunta sobre Enavo Gotas (via plataforma digital):\n`;
  if (doctorName) message += `\n- Nome: Dr(a). ${doctorName}`;
  if (specialty) message += `\n- Especialidade: ${specialty}`;
  if (crm) message += `\n- CRM: ${crm}`;
  if (clinic) message += `\n- Clínica/Hospital: ${clinic}`;
  message += `\n\n- Pergunta: ${question}`;
  
  const whatsappUrl = `https://wa.me/${professionalNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="ask-rep" className="mx-auto max-w-md px-4 py-8">
      <h2 className="text-xl font-bold text-sky-900 text-center">Perguntas ao Representante</h2>
      <p className="text-center text-sky-700 text-sm mt-2">Tem alguma dúvida? Envie diretamente para o nosso representante.</p>
      
      <div className="mt-4 space-y-3">
        {/* Campos novos e existentes */}
        <input 
          type="text"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          placeholder="Seu nome (opcional)"
          className="w-full border border-sky-300 rounded px-3 py-2 text-sm"
        />
        <input 
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          placeholder="Especialidade (opcional)"
          className="w-full border border-sky-300 rounded px-3 py-2 text-sm"
        />
        <input 
          type="text"
          value={crm}
          onChange={(e) => setCrm(e.target.value)}
          placeholder="CRM (opcional)"
          className="w-full border border-sky-300 rounded px-3 py-2 text-sm"
        />
        <input 
          type="text"
          value={clinic}
          onChange={(e) => setClinic(e.target.value)}
          placeholder="Nome da Clínica ou Hospital (opcional)"
          className="w-full border border-sky-300 rounded px-3 py-2 text-sm"
        />
        <textarea 
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows="4"
          placeholder="Digite sua pergunta aqui..."
          className="w-full border border-sky-300 rounded px-3 py-2 text-sm"
        ></textarea>
        <a 
          href={question ? whatsappUrl : '#'} 
          target="_blank" 
          rel="noreferrer"
          className={`w-full block px-5 py-2 text-white rounded-lg text-sm font-semibold shadow text-center ${question ? 'bg-emerald-600' : 'bg-gray-400 cursor-not-allowed'}`}
        >
          Enviar via WhatsApp
        </a>
      </div>
    </section>
  );
}
