import React from 'react';
import { Button } from './button';
import { Share2, Copy } from 'lucide-react';
import { Toaster, toast } from 'sonner';

export function ShareButton() {
  const shareData = {
    title: 'Enavo Gotas - Calculadora Pediátrica',
    text: 'Colega, encontrei esta ferramenta com a dose de ondansetrona para GEA baseada nas diretrizes da SBP. Muito útil!',
    url: 'https://enavogotas.vercel.app/'
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('Erro ao compartilhar:', error);
      }
    } else {
      // Fallback para desktop: copiar para a área de transferência
      navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      toast.success('Link copiado para a área de transferência!');
    }
  };

  return (
    <>
      <Button
        onClick={handleShare}
        variant="outline"
        className="h-12 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 flex-1"
      >
        {navigator.share ? <Share2 className="mr-2 h-5 w-5" /> : <Copy className="mr-2 h-5 w-5" />}
        Compartilhar com Colega
      </Button>
      <Toaster richColors />
    </>
  );
}
