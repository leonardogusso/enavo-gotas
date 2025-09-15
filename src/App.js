import React, { useState } from 'react';
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
    // Fundo da página em cinza claro e nova tipografia base 'font-sans' (Inter)
    <div className="font-sans min-h-screen bg-slate-50 text-slate-800">
      <Header />
      {/* Espaçamento vertical entre as seções aumentado para dar mais "respiro" */}
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
