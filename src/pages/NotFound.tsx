import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
 return (
   <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
     <div className="text-center max-w-md">
       <div className="mb-8">
         <h1 className="text-9xl font-bold text-emerald-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Página não encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700">
              <Home className="mr-2 h-4 w-4" />
              Voltar para Home
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>
      </div>
   </div>
  );
}
