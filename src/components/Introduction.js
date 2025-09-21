import React from 'react';
import { motion } from 'framer-motion';
import { staggerChildren, fadeInUp } from '../animations';

export function Introduction() {
  return (
    <motion.section 
      id="introduction" 
      className="mx-auto max-w-md px-4 text-center scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerChildren}
    >
      <motion.img 
        src="/logo-enavo.jpeg" 
        alt="Logo Enavo Gotas" 
        className="w-2/3 mx-auto" 
        variants={fadeInUp}
      />
      <motion.div className="mt-6 space-y-2" variants={fadeInUp}>
        <h1 className="font-serif text-3xl font-bold text-sky-900">O único em gotas para o tratamento de Náuseas e Vômitos.</h1>
      </motion.div>
    </motion.section>
  );
}
