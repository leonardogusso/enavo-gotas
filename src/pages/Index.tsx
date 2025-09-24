import React from 'react';
import { Header } from '@/components/sections/Header';
import { Introduction } from '@/components/sections/Introduction';
// Importaremos os outros componentes de seção aqui

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main id="main-content" className="pt-16">
        <Introduction />

        {/* Placeholder para as próximas seções */}
        <div id="guidelines" className="h-screen pt-20 p-10">
          <h2 className="text-xl font-bold">Seção Diretrizes</h2>
        </div>
        <div id="posologia" className="h-screen pt-20 p-10">
          <h2 className="text-xl font-bold">Seção Calculadora</h2>
        </div>
        <div id="biblioteca" className="h-screen pt-20 p-10">
          <h2 className="text-xl font-bold">Seção Biblioteca</h2>
        </div>
        <div id="ask-rep" className="h-screen pt-20 p-10">
          <h2 className="text-xl font-bold">Seção Contato</h2>
        </div>
      </main>
      
      {/* Aqui virá o Footer */}
    </div>
  );
}
