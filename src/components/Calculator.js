import React, { useState, useMemo } from 'react';

export function Calculator() {
  const [peso, setPeso] = useState('');
  const [idade, setIdade] = useState('');

  const posologia = useMemo(() => {
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const idadeNum = parseInt(idade, 10);

    if (isNaN(pesoNum) || pesoNum <= 0 || isNaN(idadeNum) || idadeNum < 6) {
      return null;
    }

    //... (lógica da calculadora não muda)
    const mgPorGota = 0.4;

    if (idadeNum >= 6 && idadeNum < 24) {
      const gotasMin = Math.round((0.2 * pesoNum) / mgPorGota);
      const gotasMax = Math.round((0.4 * pesoNum) / mgPorGota);
      return `De ${gotasMin} a ${gotasMax} gotas.`;
    }

    if (idadeNum >= 24) {
      if (pesoNum <= 30) {
        const gotas = Math.min(Math.round(pesoNum), 10);
        return `${gotas} gotas. (Dose máxima de 4 mg)`;
      } else {
        return `De 10 a 20 gotas. (4 mg a 8 mg)`;
      }
    }

    return null;
  }, [peso, idade]);

  return (
    <section id="posologia" className="bg-white/80 border-y border-sky-100">
      <div className="mx-auto max-w-md px-4 py-6">
        <h2 className="text-xl font-bold text-sky-900">Calculadora de Posologia Pediátrica</h2>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <label htmlFor="idade" className="text-sky-800 text-sm">Idade (meses)</label>
            <input id="idade" value={idade} onChange={(e) => setIdade(e.target.value)} type="number" placeholder="Ex: 18" className="mt-1 w-full border border-sky-300 rounded px-3 py-2 text-sm" />
          </div>
          <div>
            <label htmlFor="peso" className="text-sky-800 text-sm">Peso (kg)</label>
            <input id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} inputMode="decimal" placeholder="Ex: 10,5" className="mt-1 w-full border border-sky-300 rounded px-3 py-2 text-sm" />
          </div>
        </div>

        {posologia && (
          <div className="mt-4 bg-sky-50 border border-sky-200 rounded p-3 text-center">
            <p className="text-sky-800 text-sm">Dose recomendada:</p>
            <p className="text-2xl font-bold text-emsblue my-1">{posologia}</p>
          </div>
        )}
        
        {/* SEÇÃO DE ENDOSSO DA SBP ADICIONADA AQUI */}
        <div className="mt-6 flex items-center justify-center gap-4 border-t border-sky-200 pt-4">
          <img src="/logo-SBP.webp" alt="Logo Sociedade Brasileira de Pediatria" className="h-12 w-12" />
          <p className="text-xs text-sky-700">
            Cálculo de posologia baseado nas recomendações de especialistas e alinhado com as melhores práticas pediátricas.
          </p>
        </div>
      </div>
    </section>
  );
}
