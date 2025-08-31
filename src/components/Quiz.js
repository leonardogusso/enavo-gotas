import React, { useState } from 'react';

const questions = [
  {
    question: "Qual o sabor de Enavo Gotas, que facilita a aceitação pelas crianças?",
    options: ["Tutti-frutti", "Morango", "Laranja"],
    answer: "Morango"
  },
  {
    question: "Segundo a bula, qual a concentração de ondansetrona por gota?",
    options: ["0,2 mg / gota", "0,4 mg / gota", "0,8 mg / gota"],
    answer: "0,4 mg / gota"
  },
  {
    question: "A posologia recomendada por especialistas leva em consideração quais fatores da criança?",
    options: ["Apenas o peso", "Apenas a idade", "Idade e Peso"],
    answer: "Idade e Peso"
  }
];

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const whatsappMessage = encodeURIComponent("Concluí o quiz e ganhei meu selo de Médico Expert Enavo Gotas! 💧");
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  if (showResult) {
    return (
      <section className="mx-auto max-w-md px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-sky-900">Parabéns!</h2>
        <p className="text-emerald-600 font-semibold mt-2">Você acertou {score} de {questions.length} perguntas.</p>
        <div className="mt-6 border-2 border-dashed border-sky-300 rounded-xl p-6 bg-sky-50">
          <h3 className="text-xl font-bold text-emsblue">Selo de Médico Expert Enavo Gotas</h3>
          <img src="/logo-SBP.webp" alt="Logo Sociedade Brasileira de Pediatria" className="w-32 mx-auto my-4" />
          <p className="text-xs text-sky-700">Este selo reconhece seu conhecimento atualizado sobre as melhores práticas no manejo de náuseas e vômitos na pediatria.</p>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block px-5 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold shadow">
          Enviar selo para meu WhatsApp
        </a>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-md px-4 py-8">
      <h2 className="text-xl font-bold text-sky-900 text-center mb-4">Quiz Enavo Expert</h2>
      <div className="bg-white p-6 rounded-lg shadow-md border border-sky-100">
        <p className="font-semibold text-sky-800 mb-4">{questions[currentQuestion].question}</p>
        <div className="flex flex-col space-y-2">
          {questions[currentQuestion].options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)} className="w-full p-3 bg-sky-100 text-sky-900 rounded-lg text-left hover:bg-emsblue hover:text-white transition-colors">
              {option}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
