import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-sky-100">
      <div className="mx-auto max-w-md px-4 py-6 text-[12px] text-sky-700">
        <span className="font-semibold text-emsblue">ENAVO GOTAS</span> — ondansetrona em gotas<br />
        <span className="text-[11px]">© {new Date().getFullYear()} • Uso profissional • Material promocional.</span>
      </div>
    </footer>
  );
}
