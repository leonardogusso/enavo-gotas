import React from 'react';

export function Introduction() {
  return (
    <section className="mx-auto max-w-md px-4 py-8 grid gap-6 text-center">
      <img src="/logo-enavo.jpeg" alt="Logo Enavo Gotas" className="w-2/3 mx-auto" />
      <div className="space-y-3">
        <p className="text-xl text-sky-800">Precisão na dose.</p>
        <p className="text-xl text-sky-800">Fácil na administração.</p>
        <p className="text-xl text-sky-800">Alívio rápido em gotas.</p>
      </div>
      <ul className="space-y-2 text-sky-900 text-base mx-auto inline-block text-left">
        <li>🍓 Sabor morango</li>
        <li>💧 Baixo volume</li>
        <li>❌ Não precisa de água</li>
        <li>🎯 1 gota = 0,4 mg</li>
      </ul>
    </section>
  );
}
