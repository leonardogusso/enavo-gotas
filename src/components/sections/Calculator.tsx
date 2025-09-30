import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Calculator as CalculatorIcon, Baby, Scale, Droplets, AlertTriangle, FileText } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import { brandAnalytics, useSectionTracking } from '@/lib/brand-analytics';

type DoseResult = {
  doseMg: number;
  drops: number;
  category: string;
  message?: string;
  isWarning?: boolean;
};

// Lógica de cálculo focada em Gastroenterite Aguda (GEA) - baseada nas diretrizes
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

  // Rastreia tempo na seção
  useSectionTracking('posologia');

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleCalculate = () => {
    const weightNum = parseFloat(weight);
    const ageNum = parseInt(ageMonths);

    // Incrementa contador de interações
    setInteractionCount(prev => prev + 1);

    // Validação de entrada
    if (isNaN(weightNum) || weightNum <= 0 || isNaN(ageNum) || ageNum < 0) {
      const errorResult: DoseResult = {
        doseMg: 0,
        drops: 0,
        category: "Erro",
        message: "Por favor, insira um peso e idade válidos.",
        isWarning: true
      };
      setResult(errorResult);

      // ANALYTICS: Rastrear erro de input
      brandAnalytics.trackCalculatorError('invalid_input', { weight, ageMonths });
      return;
    }

    // Calcular resultado
    const calculatedResult = calculateGEADose(weightNum, ageNum);
    setResult(calculatedResult);

    // ANALYTICS: Rastrear uso da calculadora
    brandAnalytics.trackCalculatorUsage('GEA', weightNum, ageNum, calculatedResult);

    // ANALYTICS: Rastrear engajamento se passou tempo suficiente
    const timeSpent = Date.now() - startTime;
    if (timeSpent > 10000) { // Mais de 10 segundos
      brandAnalytics.trackCalculatorEngagement(timeSpent, interactionCount);
    }

    // Dispara evento customizado para rastreamento de sessão
    window.dispatchEvent(new CustomEvent('calculator-used'));
  };

  const clearFields = () => {
    setWeight('');
    setAgeMonths('');
    setResult(null);
    setInteractionCount(prev => prev + 1);
    setStartTime(Date.now()); // Reset timer
  };

  const handleInputChange = (setter: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
    setInteractionCount(prev => prev + 1);
  };

  return (
    <section id="posologia" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 scroll-mt-20">
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
            Calcule a dose de ENAVO® GOTAS (0,4 mg/gota) para Gastroenterite Aguda, 
            com base nas diretrizes da SBP e internacionais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="flex items-center">
                  <Baby className="h-5 w-5 mr-2" /> 
                  Dados do Paciente
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-sm font-medium text-slate-700">
                    Idade do Paciente (meses) *
                  </Label>
                  <Input 
                    id="age" 
                    type="number" 
                    placeholder="Ex: 18" 
                    value={ageMonths} 
                    onChange={handleInputChange(setAgeMonths)} 
                    min="0" 
                    max="240"
                    className="text-lg h-12"
                  />
                  <p className="text-xs text-slate-500">
                    Para crianças acima de 2 anos, multiplique a idade em anos por 12
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-sm font-medium text-slate-700">
                    Peso do Paciente (kg) *
                  </Label>
                  <div className="relative">
                    <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input 
                      id="weight" 
                      type="number" 
                      placeholder="Ex: 12.5" 
                      value={weight} 
                      onChange={handleInputChange(setWeight)} 
                      className="pl-10 text-lg h-12" 
                      min="0" 
                      max="100"
                      step="0.1" 
                    />
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button 
                    onClick={handleCalculate} 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium h-12" 
                    disabled={!weight || !ageMonths}
                  >
                    <CalculatorIcon className="h-5 w-5 mr-2" /> 
                    Calcular Dose
                  </Button>
                  <Button 
                    onClick={clearFields} 
                    variant="outline" 
                    className="px-6 py-3 h-12"
                  >
                    Limpar
                  </Button>
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
            <Card className="border-green-200 shadow-lg h-full hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardTitle className="flex items-center">
                  <Droplets className="h-5 w-5 mr-2" /> 
                  Resultado da Dosagem
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col justify-center items-center h-full min-h-[400px]">
                {result ? (
                  <div className="space-y-6 w-full">
                    {result.isWarning ? (
                      <div className="text-center p-6 bg-amber-50 rounded-lg border border-amber-200">
                        <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                        <div className="text-lg font-semibold text-amber-800 mb-2">
                          {result.category}
                        </div>
                        <div className="text-sm text-amber-700 leading-relaxed">
                          {result.message}
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="text-center p-8 bg-green-50 rounded-lg border border-green-200">
                          <div className="dosage-display text-6xl font-bold text-green-600 mb-3">
                            {Math.round(result.drops)}
                          </div>
                          <div className="text-lg font-medium text-green-700 mb-1">gotas</div>
                          <div className="text-sm text-green-600">
                            ENAVO® GOTAS (0,4 mg/gota)
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                           <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                            <span className="font-medium text-slate-700">Dose calculada:</span>
                            <span className="clinical-data font-bold text-slate-800 text-lg">
                              {result.doseMg} mg
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                            <span className="font-medium text-slate-700">Categoria:</span>
                            <Badge variant="outline" className="text-slate-600 border-slate-300">
                              {result.category}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                            <span className="font-medium text-slate-700">Frequência:</span>
                            <span className="font-semibold text-slate-800">Dose única</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-slate-400">
                    <CalculatorIcon className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Insira os dados para calcular a dose</p>
                    <p className="text-sm mt-2">
                      Fórmula baseada em diretrizes para GEA
                    </p>
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
          className="mt-8 space-y-4"
        >
          {/* Disclaimer médico obrigatório */}
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle className="warning-text font-semibold">
              ⚠️ AVISO MÉDICO OBRIGATÓRIO
            </AlertTitle>
            <AlertDescription className="text-red-700 leading-relaxed">
              Esta calculadora é apenas uma <strong>FERRAMENTA AUXILIAR</strong> e não substitui o julgamento clínico profissional. 
              SEMPRE verifique os cálculos com a bula oficial e considere o quadro clínico completo do paciente. 
              O médico é o único responsável pela prescrição.
            </AlertDescription>
          </Alert>

          {/* Informação sobre outras indicações */}
          <Alert>
            <FileText className="h-4 w-4" />
            <AlertTitle className="font-semibold">Outras Indicações (Conforme Bula)</AlertTitle>
            <AlertDescription>
              <div className="space-y-2">
                <p>
                  <strong>Quimioterapia (crianças ≥2 anos):</strong> 4 mg (10 gotas) para pacientes com mais de 10 kg, 
                  a cada 12 horas por até 5 dias.
                </p>
                <p className="text-sm text-slate-600">
                  Esta calculadora foca em GEA. Para outras indicações, consulte sempre a bula oficial.
                </p>
              </div>
            </AlertDescription>
          </Alert>
        </motion.div>
      </div>
    </section>
  );
}
