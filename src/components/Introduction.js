import React from 'react';

export function Introduction() {
  return (
    <section className="mx-auto max-w-md px-4 text-center">
      <img src="/logo-enavo.jpeg" alt="Logo Enavo Gotas" className="w-2/3 mx-auto" />
      <div className="mt-6 space-y-2">
        {/* Título principal com a fonte serifada */}
        <h1 className="font-serif text-3xl font-bold text-sky-900">O único em gotas para o tratamento de Náuseas e Vômitos.</h1>
        <h2 className="font-serif text-2xl text-slate-600"></h2>
      </div>
    </section>
  );
}
