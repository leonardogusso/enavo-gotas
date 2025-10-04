import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

// Em um projeto real, este número viria de um backend.
// Para este exemplo, vamos simular um número inicial e fazê-lo crescer lentamente.
const getInitialCount = () => {
  return 15732 + Math.floor(Math.random() * 100);
};

export function UsageCounter() {
  const [count, setCount] = useState(getInitialCount());

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, Math.random() * (10000 - 5000) + 5000); // Incrementa a cada 5-10 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center gap-3 my-8"
    >
      <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
        <Users className="h-5 w-5 text-blue-600" />
        <p className="text-sm text-slate-700">
          <span className="font-bold tabular-nums">{count.toLocaleString('pt-BR')}</span> doses calculadas por profissionais este mês.
        </p>
      </div>
    </motion.div>
  );
}
