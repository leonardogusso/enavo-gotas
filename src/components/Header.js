import React from 'react';

export function Header() {
  return (
    // Estilo mais limpo com fundo branco sólido e sombra sutil
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-md px-4 py-3">
        <span className="font-bold text-emsblue">Enavo Gotas - Recurso Clínico Pediátrico</span>
      </div>
    </header>
  );
}
