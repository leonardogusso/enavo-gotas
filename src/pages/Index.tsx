import React from 'react';
import { Header } from '@/components/sections/Header';
// Importaremos os outros componentes de seção aqui

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main id="main-content" className="pt-16"> {/* Adiciona padding no topo para o conteúdo não ficar atrás do header fixo */}
        
        {/* Placeholder para testar o scroll e o header fixo */}
        <div className="h-[200vh] p-10">
          <h1 className="text-2xl font-bold">Conteúdo da Página Principal</h1>
          <p>Role para baixo para ver o header fixo em ação.</p>

          <div id="guidelines" className="h-screen pt-20">
            <h2 className="text-xl font-bold">Seção Diretrizes</h2>
          </div>
          <div id="posologia" className="h-screen pt-20">
            <h2 className="text-xl font-bold">Seção Calculadora</h2>
          </div>
          <div id="biblioteca" className="h-screen pt-20">
            <h2 className="text-xl font-bold">Seção Biblioteca</h2>
          </div>
          <div id="ask-rep" className="h-screen pt-20">
            <h2 className="text-xl font-bold">Seção Contato</h2>
          </div>
        </div>

      </main>
      
      {/* Aqui virá o Footer */}
    </div>
  );
}
