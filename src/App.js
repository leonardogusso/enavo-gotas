// src/App.js
import React, { useState } from 'react';
import { Header } from './components/Header';
//... (todos os outros imports continuam os mesmos)
import { Footer } from './components/Footer';

export default function App() {
  const [doctorName, setDoctorName] = useState('');

  return (
    <div className="font-sans min-h-screen bg-slate-50 text-slate-800">
      <Header />
      
      {/* Adicionado um espaçamento no topo (pt-16) para compensar a altura do header fixo */}
      <main className="space-y-12 py-10 pt-16">
        <div id="introduction"><Introduction /></div>
        <div id="guidelines"><GuidelinesSummary /></div>
        <div id="posologia"><Calculator /></div>
        <div id="course-cta"><CourseCTA /></div>
        <div id="ask-rep"><AskRep doctorName={doctorName} setDoctorName={setDoctorName} /></div>
        <div id="cta"><CallToAction /></div>
      </main>
      
      <Footer />
    </div>
  );
}
