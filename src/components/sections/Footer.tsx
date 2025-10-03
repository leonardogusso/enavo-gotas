import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Droplets } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer role="contentinfo" className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Grid Principal */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1: Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Enavo Gotas</span>
                <p className="text-xs text-slate-400">EMS S/A</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              O primeiro e único ondansetrona em gotas do Brasil, desenvolvido para administração pediátrica com precisão e segurança.
            </p>
          </div>
          
          {/* Coluna 2: Informações Técnicas */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm">Informações Técnicas</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Princípio ativo: Ondansetrona</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Concentração: 0,4 mg/gota</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Sabor: Morango</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Indicação: Náuseas e vômitos</span>
              </li>
            </ul>
          </div>
          
          {/* Coluna 3: Suporte */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm">Suporte Profissional</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Atendimento especializado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Material técnico-científico</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Educação médica continuada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Suporte via WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-slate-700 my-8" />
        
        {/* Bottom */}
        <div className="space-y-4 text-center">
          <p className="font-semibold text-blue-400 text-sm">
            ENAVO® GOTAS — cloridrato de ondansetrona di-hidratado
          </p>
          
          <p className="text-xs text-slate-500">
            © {currentYear} EMS S/A. Todos os direitos reservados.
          </p>
          
          {/* Disclaimer */}
          <div className="bg-slate-800 rounded-lg p-4 max-w-3xl mx-auto mt-4">
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-amber-400">IMPORTANTE:</strong> Conteúdo destinado exclusivamente a profissionais de saúde habilitados a prescrever ou dispensar medicamentos. As informações aqui contidas não substituem a consulta médica.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
