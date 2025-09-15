import React from 'react';

export function GuidelinesSummary() {
  return (
    <section id="guidelines" className="mx-auto max-w-md px-4">
      <h2 className="font-serif text-3xl font-bold text-sky-900 text-center">Evidências e Diretrizes</h2>
      <div className="mt-6 space-y-4">
        {/* Seções agora em formato de "Card" com sombra e mais padding */}
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-sans font-bold text-emsblue">Mecanismo de Ação Dual</h3>
          <p className="text-sm mt-2 text-slate-700">A eficácia da ondansetrona no controle de náuseas e vômitos está ligada ao bloqueio seletivo dos receptores 5-HT₃ tanto no sistema nervoso periférico (trato gastrointestinal) quanto no central (zona de gatilho quimiorreceptora).</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-sans font-bold text-emsblue">Uso Consolidado na Gastroenterite Aguda (GEA)</h3>
          <p className="text-sm mt-2 text-slate-700">O uso de uma dose oral única de ondansetrona na GEA é amplamente endossado por diversas diretrizes para facilitar a Terapia de Reidratação Oral (TRO), reduzindo a frequência de vômitos e as taxas de internação hospitalar.</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-sans font-bold text-emsblue">Forte Endosso no Brasil</h3>
          <p className="text-sm mt-2 text-slate-700">A Sociedade Brasileira de Pediatria (SBP) e o Ministério da Saúde recomendam o uso da ondansetrona em seus protocolos para manejo de vômitos persistentes que impedem a reidratação oral.</p>
        </div>
      </div>
    </section>
  );
}
