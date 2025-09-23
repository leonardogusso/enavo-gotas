import React from 'react';
import { Header } from '@/components/sections/Header';
// Importaremos os outros componentes aqui conforme os criamos

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main id="main-content" className="pt-16"> {/* Padding-top para não ficar atrás do header */}
        {/*
          Aqui virão os próximos componentes:
          <Introduction />
          <GuidelinesSummary />
          <Calculator />
          ...
        */}
        <div className="h-[200vh] p-10"> {/* Placeholder para testar o scroll */}
          <h1 className="text-2xl font-bold">Conteúdo da Página</h1>
          <p>Role para baixo para ver o header fixo em ação.</p>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
