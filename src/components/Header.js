import React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/90 border-b border-sky-100">
      <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
        <span className="font-bold text-emsblue">Enavo Gotas - a referência em ondansetrona gotas</span>
      </div>
    </header>
  );
}
