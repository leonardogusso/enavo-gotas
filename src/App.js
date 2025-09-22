import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

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

  const MotionWrapper = ({ children }) => (
    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      {children}
    </motion.div>
  );

  return (
    <div className="font-sans min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="space-y-12 md:space-y-20 py-10 pt-24">
        <MotionWrapper><Introduction /></MotionWrapper>
        <MotionWrapper><GuidelinesSummary /></MotionWrapper>
        <MotionWrapper><Calculator /></MotionWrapper>
        <MotionWrapper><CourseCTA /></MotionWrapper>
        <MotionWrapper><AskRep doctorName={doctorName} setDoctorName={setDoctorName} /></MotionWrapper>
        <MotionWrapper><CallToAction /></MotionWrapper>
      </main>
      <Footer />
    </div>
  );
}
