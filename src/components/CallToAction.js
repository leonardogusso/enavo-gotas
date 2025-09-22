import React from 'react';

export function CallToAction() {
  return (
    <section id="cta" className="mx-auto max-w-md px-4 text-center scroll-mt-24">
      <h3 className="font-serif text-2xl font-semibold text-sky-900">Material de Apoio</h3>
      <div className="mt-4">
        <a href="/bula-enavo.pdf" className="px-6 py-3 bg-emsblue text-white rounded-lg text-base font-semibold shadow-lg hover:bg-sky-800 transition-transform hover:scale-105 inline-block">Baixar Bula Completa (PDF)</a>
      </div>
    </section>
  );
}
