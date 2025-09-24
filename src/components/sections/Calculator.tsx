import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Calculator as CalculatorIcon, Baby, Scale, Droplets, AlertTriangle, FileText } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

type DoseResult = {
  doseMg: number;
  drops: number;
  category: string;
  message?: string;
  isWarning?: boolean;
};

// Lógica de cálculo focada em Gastroenterite Aguda (GEA)
const calculateGEADose = (weightNum: number, ageNum: number): DoseResult => {
  if (ageNum < 6) {
    return {
      doseMg: 0,
      drops: 0,
      category: "Abaixo de 6 meses",
      message: "Uso não recomendado em diretrizes para esta faixa etária. Avaliar critério médico.",
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

  const handleCalculate = () => {
    const weightNum = parseFloat(weight);
    const ageNum = parseInt(ageMonths);

    if (isNaN(weightNum) || weightNum <= 0 || isNaN(ageNum) || ageNum < 0) {
      setResult({
        doseMg: 0,
        drops: 0,
        category: "Erro",
        message: "Por favor, insira um peso e idade válidos.",
        isWarning: true
      });
      return;
    }

    const calculatedResult = calculateGEADose(weightNum, ageNum);
    setResult(calculatedResult);
  };

  const clearFields = () => {
    setWeight('');
    setAgeMonths('');
    setResult(null);
  };

  return (
    <section id="posologia" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <CalculatorIcon className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Calculadora de Dose para GEA</h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Calcule a dose de ENAVO® GOTAS (0,4 mg/gota) para Gastroenterite Aguda, com base nas diretrizes da SBP e internacionais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="flex items-center"><Baby className="h-5 w-5 mr-2" /> Dados do Paciente</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-sm font-medium text-slate-700">Idade do Paciente (meses) *</Label>
                  <Input id="age" type="number" placeholder="Ex: 18" value={ageMonths} onChange={(e) => setAgeMonths(e.target.value)} min="0" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-sm font-medium text-slate-700">Peso do Paciente (kg) *</Label>
                  <div className="relative">
                    <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input id="weight" type="number" placeholder="Ex: 12" value={weight} onChange={(e) => setWeight(e.target.value)} className="pl-10 text-lg" min="0" step="0.1" />
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button onClick={handleCalculate} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium" disabled={!weight || !ageMonths}>
                    <CalculatorIcon className="h-5 w-5 mr-2" /> Calcular Dose
                  </Button>
                  <Button onClick={clearFields} variant="outline" className="px-6 py-3">Limpar</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, delay: 0.1 }}
          >
            <Card className="border-green-200 shadow-lg h-full">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardTitle className="flex items-center"><Droplets className="h-5 w-5 mr-2" /> Resultado da Dosagem</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col justify-center items-center h-full">
                {result ? (
                  <div className="space-y-6 w-full">
                    {result.isWarning ? (
                      <div className="text-center p-6 bg-amber-50 rounded-lg border border-amber-200">
                        <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-3" />
                        <div className="text-amber-700 font-semibold">{result.category}</div>
                        <div className="text-sm text-amber-600 mt-1">{result.message}</div>
                      </div>
                    ) : (
                      <>
                        <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                          <div className="text-5xl font-bold text-green-600 mb-2">{Math.round(result.drops)} gotas</div>
                          <div className="text-sm text-green-700">ENAVO® GOTAS (0,4 mg/gota)</div>
                        </div>
                        <div className="space-y-3">
                           <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <span className="font-medium text-slate-700">Dose calculada:</span>
                            <span className="font-bold text-slate-800">{result.doseMg} mg</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <span className="font-medium text-slate-700">Faixa de Peso:</span>
                            <Badge variant="outline" className="text-slate-600">{result.category}</Badge>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-slate-400">
                    <CalculatorIcon className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Insira os dados para calcular a dose</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8"
        >
          <Alert>
            <FileText className="h-4 w-4" />
            <AlertTitle className="font-semibold">Uso em Quimioterapia (Conforme Bula)</AlertTitle>
            <AlertDescription>
              Para náuseas e vômitos induzidos por quimioterapia (crianças a partir de 2 anos), a posologia em bula é de <strong>4 mg (10 gotas)</strong> para pacientes com mais de 10 kg. Sempre consulte a bula para informações completas.
            </AlertDescription>
          </Alert>
        </motion.div>
      </div>
    </section>
  );
}
