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
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {/* Header Minimalista */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl mb-4">
              <CalculatorIcon className="h-7 w-7 text-blue-600" />
            </div>
            <h2 id="calculator-title" className="text-2xl md:text-3xl font-bold text-slate-900">
              Calculadora de Dose
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Ferramenta auxiliar baseada nas diretrizes da SBP para GEA
            </p>
          </div>

          {/* Card Principal - Design Limpo */}
          <Card className="border-slate-200 shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-blue-600 to-blue-700 text-white pb-8">
              <CardTitle className="text-center text-lg font-semibold">
                Cálculo de Dose Pediátrica
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6 md:p-8 space-y-6 bg-white">
              {/* Inputs Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Peso */}
                <div className="space-y-3">
                  <Label htmlFor="weight" className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <Scale className="h-4 w-4 text-blue-600" />
                    Peso do Paciente
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Ex: 12.5"
                    className="h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    step="0.1"
                    min="0"
                  />
                  <p className="text-xs text-slate-500">Em quilogramas (kg)</p>
                </div>

                {/* Idade */}
                <div className="space-y-3">
                  <Label htmlFor="age" className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <Baby className="h-4 w-4 text-blue-600" />
                    Idade do Paciente
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={ageMonths}
                    onChange={(e) => setAgeMonths(e.target.value)}
                    placeholder="Ex: 18"
                    className="h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    step="1"
                    min="0"
                  />
                  <p className="text-xs text-slate-500">Em meses completos</p>
                </div>
              </div>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button 
                  onClick={handleCalculate}
                  className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm transition-all"
                >
                  <CalculatorIcon className="mr-2 h-5 w-5" />
                  Calcular Dose
                </Button>
                
                <ShareButton /> 

                <Button 
                  onClick={handleClear}
                  variant="outline"
                  className="h-12 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50"
                >
                  Limpar
                </Button>
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
                    <Alert className="border-l-4 border-amber-500 bg-amber-50">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      <AlertTitle className="text-amber-900 font-semibold">
                        Atenção
                      </AlertTitle>
                      <AlertDescription className="text-amber-800 text-sm">
                        {result.message}
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <>
                      {/* Display da Dose - Minimalista */}
                      <div className="bg-blue-50 rounded-xl p-6 text-center space-y-4">
                        <div className="flex items-center justify-center gap-2 text-blue-700">
                          <CheckCircle2 className="h-5 w-5" />
                          <span className="text-sm font-semibold">Dose Calculada</span>
                        </div>
                        
                        <div className="flex items-baseline justify-center gap-3">
                          <Droplets className="h-10 w-10 text-blue-600" />
                          <span className="text-5xl font-bold text-blue-600 tabular-nums">
                            {Math.round(result.drops)}
                          </span>
                          <span className="text-2xl font-semibold text-slate-700">
                            gotas
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm text-slate-600">
                            {result.doseMg}mg de ondansetrona
                          </p>
                          <Badge variant="outline" className="bg-white border-blue-200 text-blue-700">
                            {result.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Informações Adicionais */}
                      <div className="bg-slate-50 rounded-lg p-4 space-y-4 text-sm text-slate-700">
                        <div>
                          <p className="font-semibold text-slate-900">Posologia GEA (Dose Única):</p>
                          <ul className="space-y-1 text-slate-600 mt-1">
                            <li>• Administrar via oral, 15-30 min antes da TRO.</li>
                            <li>• Diretrizes não recomendam doses repetidas para GEA.</li>
                          </ul>
                        </div>
                        
                        {/* NOVA MENSAGEM DE REFORÇO SUTIL */}
                        <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                          <ShieldCheck className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <p className="text-xs text-slate-600">
                            <span className="font-semibold text-slate-800">Cálculo Preciso.</span> Prescrição com mais segurança.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              )}

              {/* Disclaimer */}
              <Alert className="border-l-4 border-slate-400 bg-slate-50">
                <AlertDescription className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-700">Aviso:</strong> Esta calculadora é uma ferramenta auxiliar. 
                  A decisão terapêutica final cabe ao médico prescritor. Consulte sempre a bula e diretrizes da SBP.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Logo SBP - Sutil */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center gap-4 text-sm text-slate-500"
          >
            <img 
              src="/logo-SBP.webp" 
              alt="SBP" 
              className="w-10 h-10 object-contain opacity-60"
            />
            <span>Baseado nas Diretrizes da SBP</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
