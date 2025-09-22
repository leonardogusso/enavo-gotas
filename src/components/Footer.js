import React from 'react';

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-white border-t border-gray-200 mt-12">
      <div className="mx-auto max-w-md px-4 py-8 text-xs text-slate-500 text-center space-y-2">
        <p className="font-semibold text-emsblue">ENAVO GOTAS — ondansetrona</p>
        <p>© {new Date().getFullYear()} EMS S/A. Todos os direitos reservados.</p>
        <p className="pt-2 border-t border-gray-200 mt-2">Conteúdo destinado exclusivamente a profissionais de saúde habilitados a prescrever ou dispensar medicamentos.</p>
      </div>
    </footer>
  );
}
