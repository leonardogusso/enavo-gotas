

---

## **2. /src/pages/NotFound.tsx**
Action: file_editor view /app/enavo-gotas/src/pages/NotFound.tsx
Observation: /app/enavo-gotas/src/pages/NotFound.tsx:
1|import { Link } from 'react-router-dom';
2|import { Button } from '@/components/ui/button';
3|import { Home, ArrowLeft } from 'lucide-react';
4|
5|export default function NotFoundPage() {
6|  return (
7|    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
8|      <div className="text-center max-w-md">
9|        <div className="mb-8">
10|          <h1 className="text-9xl font-bold text-emerald-600 mb-4">404</h1>
11|          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
12|            Página não encontrada
13|          </h2>
14|          <p className="text-gray-600 mb-8">
15|            Desculpe, a página que você está procurando não existe ou foi movida.
16|          </p>
17|        </div>
18|        
19|        <div className="flex flex-col sm:flex-row gap-4 justify-center">
20|          <Link to="/">
21|            <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700">
22|              <Home className="mr-2 h-4 w-4" />
23|              Voltar para Home
24|            </Button>
25|          </Link>
26|          <Button
27|            variant="outline"
28|            onClick={() => window.history.back()}
29|            className="w-full sm:w-auto"
30|          >
31|            <ArrowLeft className="mr-2 h-4 w-4" />
32|            Voltar
33|          </Button>
34|        </div>
35|      </div>
36|    </div>
37|  );
38|}
