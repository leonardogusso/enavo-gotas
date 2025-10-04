import React, { useState } from 'react';
import { Header } from '@/components/sections/Header';
import { Introduction } from '@/components/sections/Introduction';
import { GuidelinesSummary } from '@/components/sections/GuidelinesSummary';
import { Calculator } from '@/components/sections/Calculator';
import { ScientificLibrary } from '@/components/sections/ScientificLibrary';
import { CallToAction } from '@/components/sections/CallToAction';
import { CourseCTA } from '@/components/sections/CourseCTA';
import { AskRep } from '@/components/sections/AskRep';
import { Footer } from '@/components/sections/Footer';
import { useQRCodeDetection, useSessionTracking } from '@/lib/brand-analytics';

export default function IndexPage() {
  const [doctorName, setDoctorName] = useState('');

  // Inicializa o tracking de analytics
  useQRCodeDetection();
  useSessionTracking();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main id="main-content" className="pt-16">
        <Introduction />
        <GuidelinesSummary />
        <Calculator />
        <ScientificLibrary />
        <CallToAction />
        <CourseCTA />
        <AskRep doctorName={doctorName} setDoctorName={setDoctorName} />
      </main>
      
      <Footer />
    </div>
  );
}
