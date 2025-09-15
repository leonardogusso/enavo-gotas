import React from 'react';

export function GuidelinesSummary() {
  return (
    <section id="guidelines" className="mx-auto max-w-md px-4">
      <h2 className="font-serif text-3xl font-bold text-sky-900 text-center">Diferenciais e Evidências Clínicas</h2>
      <div className="mt-6 space-y-4">
        
        {/* SEÇÃO 1: DIFERENCIAIS (SUBSTITUINDO "MECANISMO DE AÇÃO") */}
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-sans font-bold text-emsblue">Diferenciais da Marca Enavo Gotas</h3>
          <ul className="text-sm mt-2 space-y-2 text-slate-700">
            <li><span className="font-semibold">Formulação Exclusiva:</span> Primeiro e único ondansetrona em gotas do Brasil, facilitando a administração pediátrica.</li>
            <li><span className="font-semibold">Baixo Volume e Sabor Morango:</span> Aumenta a adesão ao tratamento, com sabor agradável e sem a necessidade de água.</li>
            <li><span className="font-semibold">Ação Rápida:</span> Início de ação em menos de 1 hora para náuseas e vômitos pós-operatórios e em 1 a 2 horas para os induzidos por quimio/radioterapia.</li>
          </ul>
        </div>

        {/* SEÇÃO 2: USO NA GEA (ATUALIZADO COM REFERÊNCIAS E POSOLOGIA) */}
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-sans font-bold text-emsblue">Uso Consolidado na Gastroenterite Aguda (GEA)</h3>
          <p className="text-sm mt-2 text-slate-700">O uso de dose oral única de ondansetrona na GEA é endossado por diversas sociedades pediátricas internacionais para facilitar a Terapia de Reidratação Oral (TRO).</p>
          <div className="mt-3 bg-sky-50/70 p-3 rounded-md">
            <p className="text-xs font-semibold text-sky-800">Posologia recomendada por peso na GEA:</p>
            <ul className="text-xs mt-1 text-slate-700 list-disc list-inside">
              <li>**8-15 kg:** 2 mg (5 gotas)</li>
              <li>**15-30 kg:** 4 mg (10 gotas)</li>
              <li>**>30 kg:** 8 mg (20 gotas)</li>
            </ul>
          </div>
        </div>

        {/* SEÇÃO 3: ENDOSSO NO BRASIL (ATUALIZADO COM NOMES DOS GUIAS) */}
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-sans font-bold text-emsblue">Forte Endosso no Brasil</h3>
          <p className="text-sm mt-2 text-slate-700">A recomendação do uso de ondansetrona é formalmente citada pela Sociedade Brasileira de Pediatria (SBP) em seu **"Tratado de Pediatria (2017)"** e no guia prático de atualização **“Manejo da diarreia aguda” (2017)**, além de constar nos protocolos do Ministério da Saúde.</p>
        </div>

      </div>
    </section>
  );
}
