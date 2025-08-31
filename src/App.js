// src/App.js
import React from 'react';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { VideoSeparator } from './components/VideoSeparator';
import { Calculator } from './components/Calculator';
import { Quiz } from './components/Quiz';
import { AskRep } from './components/AskRep'; // Importado
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { FadeInSection } from './components/FadeInSection'; // Importado

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-slate-800">
      <Header />
      <main>
        <FadeInSection><Introduction /></FadeInSection>
        <FadeInSection><VideoSeparator /></FadeInSection>
        <FadeInSection><Calculator /></FadeInSection>
        <FadeInSection><VideoSeparator /></FadeInSection>
        <FadeInSection><Quiz /></FadeInSection>
        <FadeInSection><VideoSeparator /></FadeInSection>
        <FadeInSection><AskRep /></FadeInSection> {/* Adicionado */}
        <FadeInSection><CallToAction /></FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
