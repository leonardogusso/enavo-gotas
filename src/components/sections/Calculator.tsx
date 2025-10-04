import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Calculator as CalculatorIcon, Scale, Baby, Droplets, AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import { brandAnalytics, useSectionTracking } from '@/lib/brand-analytics';
import { ShareButton } from '@/components/ui/ShareButton';

type DoseResult = {
  doseMg: number;
  drops: number;
  category: string;
  message?: string;
  isWarning?: boolean;
};

const calculateGEADose = (weightNum: number, ageNum: number): DoseResult => {
  if (ageNum < 6) {
    return {
      doseMg: 0,
      drops: 0,
      category: "Abaixo de 6 meses",
      message: "Uso não recomendado em diretrizes para esta faixa etária. Avaliar critério médico rigoroso.",
      isWarning: true
    };
  }
  if (weightNum >= 8 && weightNum <= 15) {
    return { doseMg: 2, drops: 5, category: "8-15 kg (Diretriz GEA)" };
  }
  if (weightNum > 15 && weightNum <= 30) {
    return { doseMg: 4, drops: 10, category: "15-30 kg (Diretriz GEA)" };
  }
  if (weightNum > 30) {
    return { doseMg: 8, drops: 20, category: ">30 kg (Diretriz GEA)" };
  }
  return {
    doseMg: 0,
    drops: 0,
    category: "Abaixo de 8 kg",
    message: "Abaixo do peso mínimo para esta diretriz (8kg). Avaliar critério médico.",
    isWarning: true
  };
};

export function Calculator() {
  const [weight, setWeight] = useState('');
  const [ageMonths, setAgeMonths] = useState('');
  const [result, setResult] = useState<DoseResult | null>(null);
  const [startTime, setStartTime] = useState(Date.now());
  const [interactionCount, setInteractionCount] = useState(0);

  useSectionTracking('posologia');

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleCalculate = () => {
    const weightNum = parseFloat(weight);
    const ageNum = parseInt(ageMonths);
    setInteractionCount(prev => prev + 1);
    if (isNaN(weightNum) || weightNum <= 0 || isNaN(ageNum) || ageNum < 0) {
      const errorResult: DoseResult = {
        doseMg: 0,
        drops: 0,
        category: "Erro",
        message: "Por favor, insira um peso e idade válidos.",
        isWarning: true
      };
      setResult(errorResult);
      brandAnalytics.trackCalculatorError('invalid_input', { weight, ageMonths });
      return;
    }
    const calculatedDose = calculateGEADose(weightNum, ageNum);
    setResult(calculatedDose);
    brandAnalytics.trackCalculatorUsed({
      weight: weightNum,
      ageMonths: ageNum,
      doseMg: calculatedDose.doseMg,
      drops: calculatedDose.drops,
      category: calculatedDose.category
    });
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    brandAnalytics.trackCalculatorEngagement(timeSpent, interactionCount + 1);
  };

  const handleClear = () => {
    setWeight('');
    setAgeMonths('');
    setResult(null);
    setStartTime(Date.now());
  };

  return (
    <section
      id="posologia"
      className="py-12 md:py-20 bg-slate-50"
      aria-labelledby="calculator-title"
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-8"
      >
        <h3 className="text-center font-bold text-2xl md:text-3xl text-blue-800 mb-2" id="calculator-title">
          Calculadora de Dose
        </h3>
        <p className="text-center text-gray-600 mb-4">
          Ferramenta auxiliar baseada nas diretrizes da SBP para GEA
        </p>
        {/* Inputs */}
        <div className="max-w-md mx-auto grid md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow-md border border-blue-100">
          <div>
            <Label htmlFor="weight">Peso do Paciente</Label>
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              placeholder="Ex: 12.5"
              className="h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              step="0.1"
              min="0"
            />
            <span className="text-xs text-gray-400">Em quilogramas (kg)</span>
          </div>
          <div>
            <Label htmlFor="age">Idade do Paciente</Label>
            <Input
              id="age"
              type="number"
              value={ageMonths}
              onChange={e => setAgeMonths(e.target.value)}
              placeholder="Ex: 18"
              className="h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              step="1"
              min="0"
            />
            <span className="text-xs text-gray-400">Em meses completos</span>
          </div>
        </div>
        {/* Botões */}
        <div className="flex justify-center gap-4">
          <Button onClick={handleCalculate} className="bg-blue-700 text-white px-6 py-2 rounded-lg shadow">Calcular</Button>
          <Button onClick={handleClear} variant="outline" className="px-6 py-2 rounded-lg">Limpar</Button>
        </div>
        {/* Resultado */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-6 border-t border-slate-200 space-y-4"
          >
            {result.isWarning ? (
              <Alert variant="warning">
                <AlertTitle>Atenção</AlertTitle>
                <AlertDescription>{result.message}</AlertDescription>
              </Alert>
            ) : (
              <>
                <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                  <span className="font-bold text-xl text-blue-700">{Math.round(result.drops)} gotas</span>
                  <span className="text-gray-700 font-semibold">{result.doseMg}mg de ondansetrona</span>
                  <Badge>{result.category}</Badge>
                </div>
                <div className="text-center text-sm text-gray-600">
                  Posologia GEA (Dose Única): Administrar via oral, 15-30 min antes da TRO.<br />
                  Diretrizes não recomendam doses repetidas para GEA.
                </div>
                <div className="text-center text-blue-600 font-medium">
                  Cálculo Preciso. Prescrição com mais segurança.
                </div>
              </>
            )}
          </motion.div>
        )}
        {/* Disclaimer */}
        <div className="text-xs text-gray-500 text-center max-w-md mx-auto">
          <strong>Aviso:</strong> Esta calculadora é uma ferramenta auxiliar.
          A decisão terapêutica final cabe ao médico prescritor. Consulte sempre a bula e diretrizes da SBP.
        </div>
        <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
          <img src="/logo-SBP.webp" alt="SBP" className="w-8 h-8 object-contain opacity-70" />
          Baseado nas Diretrizes da SBP
        </div>
      </motion.div>
    </section>
  );
}
