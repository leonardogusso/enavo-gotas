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
    <div className="font-sans min-h-screen bg-slate-50 text-slate-800">
      <Header />
      
      <main className="space-y-12 py-10 pt-20"> {/* Aumentei um pouco o padding-top para dar mais espaço */}
        
        {/* MUDANÇA: Adicionada a classe "scroll-mt-20" em cada <div> com id */}
        <div id="introduction" className="scroll-mt-20"><Introduction /></div>
        <div id="guidelines" className="scroll-mt-20"><GuidelinesSummary /></div>
        <div id="posologia" className="scroll-mt-20"><Calculator /></div>
        <div id="course-cta" className="scroll-mt-20"><CourseCTA /></div>
        <div id="ask-rep" className="scroll-mt-20"><AskRep doctorName={doctorName} setDoctorName={setDoctorName} /></div>
        <div id="cta" className="scroll-mt-20"><CallToAction /></div>
      </main>
      
      <Footer />
    </div>
  );
}
