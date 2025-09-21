import React, { useState } from 'react';

// A lista de importações completa deve estar aqui no topo.
// A linha para 'Introduction' provavelmente estava faltando.
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { GuidelinesSummary } from './components/GuidelinesSummary';
import { Calculator } from './components/Calculator';
import { CourseCTA } from './components/CourseCTA';
import { AskRep } from './components/AskRep';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  const [doctorName, setDoctorName] = useState('');

  return (
    <div className="font-sans min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="space-y-12 py-10">
        <Introduction />
        <GuidelinesSummary />
        <Calculator />
        <CourseCTA />
        <AskRep doctorName={doctorName} setDoctorName={setDoctorName} />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
