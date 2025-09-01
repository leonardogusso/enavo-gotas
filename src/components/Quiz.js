// src/components/Quiz.js
import React, { useState } from 'react';
import { VideoSeparator } from './VideoSeparator';

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

// Componente para a tela de sucesso (100% de acertos)
const SuccessResult = ({ score }) => {
  const whatsappMessage = encodeURIComponent("Concluí o quiz e ganhei meu selo de Médico Expert Enavo Gotas! 💧");
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <section className="mx-auto max-w-md px-4 py-8 text-center">
      <h2 className="text-2xl font-bold text-sky-900">Parabéns!</h2>
      <p className="text-emerald-600 font-semibold mt-2">Você acertou {score} de {questions.length} e se tornou um Expert!</p>
      <div className="mt-6 border-2 border-dashed border-sky-300 rounded-xl p-6 bg-sky-50">
        <h3 className="text-xl font-bold text-emsblue">Selo de Médico Expert Enavo Gotas</h3>
        {/* TODO: Quando tiver a imagem final do selo, coloque na pasta 'public' e atualize o nome do arquivo aqui */}
        <img src="/logo-SBP.webp" alt="Logo Sociedade Brasileira de Pediatria" className="w-32 mx-auto my-4" />
        <p className="text-xs text-sky-700">Este selo reconhece seu conhecimento atualizado sobre as melhores práticas no manejo de náuseas e vômitos na pediatria.</p>
      </div>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block px-5 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold shadow">
        Enviar selo para meu WhatsApp
      </a>
    </section>
  );
};

// Componente para a tela de revisão (com respostas erradas)
const ReviewResult = ({ userAnswers }) => {
  return (
    <section className="mx-auto max-w-md px-4 py-8 text-center">
      <h2 className="text-2xl font-bold text-sky-900">Obrigado por participar!</h2>
      <p className="text-sky-700 mt-2">Confira o gabarito abaixo para rever as respostas.</p>
      <div className="mt-6 text-left space-y-4">
        {questions.map((q, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-sky-100">
            <p className="font-semibold text-sky-800">{q.question}</p>
            <p className="text-sm text-gray-500 mt-2">Sua resposta: <span className={userAnswers[index] === q.answer ? 'text-emerald-600' : 'text-red-600'}>{userAnswers[index]}</span></p>
            <p className="text-sm text-emerald-600">Resposta correta: <span className="font-bold">{q.answer}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswer = (option) => {
    const newAnswers = [...userAnswers, option];
    setUserAnswers(newAnswers);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowResult(true);
      }, 1500);
    }
  };

  if (isLoading) {
    return <VideoSeparator />;
  }

  if (showResult) {
    // Calcula o score final com base nas respostas
    const finalScore = userAnswers.reduce((score, answer, index) => {
      return answer === questions[index].answer ? score + 1 : score;
    }, 0);

    // Mostra a tela de sucesso ou a de revisão com base no score
    return finalScore === questions.length ? <SuccessResult score={finalScore} /> : <ReviewResult userAnswers={userAnswers} />;
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
