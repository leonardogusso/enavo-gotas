import React, { useState } from 'react';

export function AskRep() {
  const [question, setQuestion] = useState('');
  
  const professionalNumber = "5511991367425"; // Seu número sem símbolos
  const message = `Olá, tenho uma pergunta sobre Enavo Gotas: ${question}`;
  const whatsappUrl = `https://wa.me/${professionalNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="ask-rep" className="mx-auto max-w-md px-4 py-8">
      <h2 className="text-xl font-bold text-sky-900 text-center">Perguntas ao Representante</h2>
      <p className="text-center text-sky-700 text-sm mt-2">Tem alguma dúvida? Envie diretamente para o nosso representante.</p>
      
      <div className="mt-4">
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
          className={`mt-2 w-full block px-5 py-2 text-white rounded-lg text-sm font-semibold shadow text-center ${question ? 'bg-emerald-600' : 'bg-gray-400 cursor-not-allowed'}`}
        >
          Enviar via WhatsApp
        </a>
      </div>
    </section>
  );
}
