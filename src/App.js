// src/App.js
import React from 'react';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { VideoSeparator } from './components/VideoSeparator';
import { Calculator } from './components/Calculator';
import { Quiz } from './components/Quiz';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-slate-800">
      <Header />
      <main>
        <Introduction />
        <VideoSeparator />
        <Calculator />
        <VideoSeparator />
        <Quiz />
        <VideoSeparator />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
