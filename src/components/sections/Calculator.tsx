import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Calculator as CalculatorIcon, Baby, Scale, Droplets, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import { brandAnalytics, useSectionTracking } from '@/lib/brand-analytics';

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

    // Analytics
    brandAnalytics.trackCalculatorUsage('GEA', weightNum, ageNum, calculatedDose);
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
      className="medical-section bg-slate-50"
      aria-labelledby="calculator-title"
    >
      <div className="medical-container">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {/* Cabeçalho da Seção */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 id="calculator-title" className="text-3xl md:text-4xl font-semibold text-slate-900">
              Calculadora de Dose para GEA
            </h2>
            <p className="text-base text-slate-600">
              Ferramenta de auxílio para cálculo de dose conforme diretriz da Sociedade Brasileira de Pediatria
            </p>
          </div>

          {/* Card Principal da Calculadora */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-blue-200 shadow-lg overflow-hidden">
              {/* Header com Cor */}
              <CardHeader className="bg-blue-600 text-white pb-6">
                <div className="flex items-center justify-center space-x-3">
                  <CalculatorIcon className="h-6 w-6" />
                  <CardTitle className="text-xl font-semibold">
                    Calculadora Pediátrica Enavo Gotas
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="p-6 md:p-8 space-y-6 bg-white">
                {/* Grid de Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Peso */}
                  <div className="space-y-3">
                    <Label htmlFor="weight" className="text-base font-semibold text-slate-900 flex items-center space-x-2">
                      <Scale className="h-4 w-4 text-blue-600" />
                      <span>Peso do Paciente</span>
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="8.0"
                      className="h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                      step="0.1"
                      min="0"
                      aria-describedby="weight-helper"
                    />
                    <p id="weight-helper" className="text-sm text-slate-500">
                      Peso em quilogramas (kg)
                    </p>
                  </div>

                  {/* Idade */}
                  <div className="space-y-3">
                    <Label htmlFor="age" className="text-base font-semibold text-slate-900 flex items-center space-x-2">
                      <Baby className="h-4 w-4 text-blue-600" />
                      <span>Idade do Paciente</span>
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      value={ageMonths}
                      onChange={(e) => setAgeMonths(e.target.value)}
                      placeholder="12"
                      className="h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                      step="1"
                      min="0"
                      aria-describedby="age-helper"
                    />
                    <p id="age-helper" className="text-sm text-slate-500">
                      Idade em meses completos
                    </p>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={handleCalculate}
                    className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm"
                  >
                    <CalculatorIcon className="mr-2 h-5 w-5" />
                    Calcular Dose
                  </Button>
                  <Button 
                    onClick={handleClear}
                    variant="outline"
                    className="h-12 border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50"
                  >
                    Limpar
                  </Button>
                </div>

                {/* Resultado da Dose */}
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 pt-6 border-t-2 border-slate-200"
                  >
                    {result.isWarning ? (
                      <Alert className="border-l-4 border-amber-500 bg-amber-50">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                        <AlertTitle className="text-amber-900 font-semibold text-base">
                          Atenção
                        </AlertTitle>
                        <AlertDescription className="text-amber-800 text-sm">
                          {result.message}
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <>
                        {/* Display da Dose */}
                        <div className="bg-blue-50 rounded-lg p-6 text-center space-y-4">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle2 className="h-6 w-6 text-blue-600" />
                            <h3 className="text-lg font-semibold text-slate-900">
                              Dose Calculada
                            </h3>
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex items-baseline justify-center space-x-2">
                              <Droplets className="h-8 w-8 text-blue-600 mb-2" />
                              <span className="dosage-display">
                                {Math.round(result.drops)}
                              </span>
                              <span className="text-2xl font-semibold text-slate-700">
                                gotas
                              </span>
                            </div>
                            <p className="clinical-data text-slate-700">
                              ({result.doseMg}mg de ondansetrona)
                            </p>
                          </div>

                          <Badge variant="outline" className="text-sm font-medium bg-white border-blue-200 text-blue-700">
                            {result.category}
                          </Badge>
                        </div>

                        {/* Informações Adicionais */}
                        <div className="medical-card p-4 space-y-3">
                          <div className="flex items-start space-x-3">
                            <FileText className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                            <div className="space-y-2 text-sm text-slate-700">
                              <p className="font-semibold">Posologia GEA:</p>
                              <ul className="space-y-1 text-slate-600">
                                <li>• Administrar dose única via oral</li>
                                <li>• Pode repetir após 12 horas se necessário</li>
                                <li>• Dose máxima: conforme faixa de peso</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}

                {/* Disclaimer Médico */}
                <Alert className="border-l-4 border-slate-400 bg-slate-50">
                  <AlertDescription className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-700">Aviso importante:</strong> Esta calculadora é uma ferramenta auxiliar de consulta. 
                    A decisão terapêutica final cabe ao médico prescritor, considerando o quadro clínico completo do paciente. 
                    Consulte sempre a bula e diretrizes atualizadas da SBP.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>

          {/* Referência à Diretriz */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="medical-card p-6 bg-white">
              <div className="flex items-start space-x-4">
                <img 
                  src="/logo-SBP.webp" 
                  alt="Logo SBP" 
                  className="w-16 h-16 object-contain flex-shrink-0"
                />
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">
                    Baseado nas Diretrizes da SBP
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Este cálculo segue as recomendações da Sociedade Brasileira de Pediatria 
                    para o tratamento de náuseas e vômitos associados à gastroenterite aguda em pediatria.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
