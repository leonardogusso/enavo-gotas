import React from 'react';

export function CallToAction() {
  return (
    <section id="cta" className="mx-auto max-w-md px-4 py-6">
      <h3 className="text-lg font-semibold text-sky-900">Materiais para prática clínica</h3>
      <div className="mt-3 flex flex-col gap-2">
        <a href="/bula-enavo.pdf" className="px-4 py-2 bg-emsblue text-white rounded text-center text-sm">Baixar bula (PDF)</a>
        <a href="https://wa.me/5500000000000?text=Quero+receber+materiais+do+Enavo+Gotas" target="_blank" rel="noreferrer" className="px-4 py-2 bg-emerald-600 text-white rounded text-center text-sm">Receber via WhatsApp</a>
      </div>
      <p className="mt-3 text-[11px] text-slate-500">Conteúdo destinado exclusivamente a profissionais de saúde.</p>
    </section>
  );
}
