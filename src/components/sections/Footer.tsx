import React from 'react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer role="contentinfo" className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm">
          {/* Coluna 1: Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-white text-xl">Enavo Gotas</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              O primeiro e único ondansetrona em gotas do Brasil, desenvolvido para a administração pediátrica com precisão e segurança.
            </p>
          </div>
          
          {/* Coluna 2: Informações Técnicas */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Informações Técnicas</h3>
            <ul className="space-y-2 text-slate-400">
              <li>• Princípio ativo: Ondansetrona</li>
              <li>• Concentração: 0,4 mg/gota</li>
              <li>• Sabor: Morango</li>
              <li>• Indicação: Náuseas e vômitos</li>
            </ul>
          </div>
          
          {/* Coluna 3: Suporte */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Suporte Profissional</h3>
            <ul className="space-y-2 text-slate-400">
              <li>• Atendimento especializado</li>
              <li>• Material técnico-científico</li>
              <li>• Educação médica continuada</li>
              <li>• Suporte via WhatsApp</li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-slate-700 my-8" />
        
        <div className="space-y-4 text-center text-xs text-slate-500">
          <p className="font-semibold text-blue-400 text-sm">
            ENAVO® GOTAS — cloridrato de ondansetrona di-hidratado
          </p>
          <p>
            © {currentYear} EMS S/A. Todos os direitos reservados.
          </p>
          <div className="bg-slate-800 rounded-lg p-4 max-w-4xl mx-auto mt-4">
            <p className="leading-relaxed">
              <strong className="text-amber-400">IMPORTANTE:</strong> Conteúdo destinado exclusivamente a profissionais de saúde habilitados a prescrever ou dispensar medicamentos. As informações aqui contidas não substituem a consulta médica.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
