// src/App.js
import React, { useState } from 'react'; // Adicionado useState
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { VideoSeparator } from './components/VideoSeparator';
import { Benefits } from './components/Benefits'; // Importa o novo componente
import { Calculator } from './components/Calculator';
import { Quiz } from './components/Quiz';
import { AskRep } from './components/AskRep';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { FadeInSection } from './components/FadeInSection';

export default function App() {
  // Novo estado para guardar o nome do médico
  const [doctorName, setDoctorName] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-slate-800">
      <Header />
      <main>
        <FadeInSection><Introduction /></FadeInSection>
        <FadeInSection><VideoSeparator /></FadeInSection>
        <FadeInSection><Benefits /></FadeInSection> {/* Nova seção adicionada */}
        <FadeInSection><VideoSeparator /></FadeInSection>
        <FadeInSection><Calculator /></FadeInSection>
        <FadeInSection><VideoSeparator /></FadeInSection>
        {/* Passando o nome e a função para atualizar o nome para os componentes */}
        <FadeInSection><AskRep doctorName={doctorName} setDoctorName={setDoctorName} /></FadeInSection>
        <FadeInSection><VideoSeparator /></FadeInSection>
        <FadeInSection><Quiz doctorName={doctorName} /></FadeInSection>
        <FadeInSection><VideoSeparator /></FadeInSection>
        <FadeInSection><CallToAction /></FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
