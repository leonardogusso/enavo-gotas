import { Header } from '@/components/sections/Header';
import { Introduction } from '@/components/sections/Introduction';
import { GuidelinesSummary } from '@/components/sections/GuidelinesSummary';
import { Calculator } from '@/components/sections/Calculator';
import { ScientificLibrary } from '@/components/sections/ScientificLibrary';
import { CallToAction } from '@/components/sections/CallToAction';
import { CourseCTA } from '@/components/sections/CourseCTA';
import { AskRep } from '@/components/sections/AskRep';
import { Footer } from '@/components/sections/Footer';
import { InsightCenter } from '@/components/sections/InsightCenter';

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main>
        <Introduction />
        <GuidelinesSummary />
        <Calculator />
        <ScientificLibrary />
        <InsightCenter />
        <CourseCTA />
        <CallToAction />
        <AskRep />
      </main>
      <Footer />
    </div>
  );
}
