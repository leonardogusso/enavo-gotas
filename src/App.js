// src/App.js
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { VideoSeparator } from './components/VideoSeparator';
import { Calculator } from './components/Calculator';
import { Quiz } from './components/Quiz';
import { AskRep } from './components/AskRep';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { FadeInSection } from './components/FadeInSection';

export default function App() {
  const [doctorName, setDoctorName] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-slate-800">
      <Header />
      <main>
        <FadeInSection><Introduction /></FadeInSection>
        <FadeInSection><VideoSeparator /></FadeInSection>
        <FadeInSection><Calculator /></FadeInSection>
        <FadeInSection><VideoSeparator /></FadeInSection>

        {/* --- ORDEM CORRETA E FINAL --- */}

        {/* 1. O Quiz */}
        <FadeInSection><Quiz doctorName={doctorName} /></FadeInSection>
        <FadeInSection><VideoSeparator /></FadeInSection>

        {/* 2. Perguntas ao Representante (logo após o Quiz) */}
        <FadeInSection><AskRep doctorName={doctorName} setDoctorName={setDoctorName} /></FadeInSection>
        <FadeInSection><VideoSeparator /></FadeInSection>

        {/* 3. A seção final com o download da Bula */}
        <FadeInSection><CallToAction /></FadeInSection>

      </main>
      <Footer />
    </div>
  );
}
