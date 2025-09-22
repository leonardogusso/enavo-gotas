import React from 'react';

export function CourseCTA() {
  const courseLink = "https://www.medicoexponencialems.com.br/video/eficacia-da-ondansetrona-na-sindrome-do-intestino-irritavel-tipo-diarreica-sii--d";
  return (
    <section id="course-cta" className="mx-auto max-w-md px-4 text-center scroll-mt-24">
      <h2 className="font-serif text-3xl font-bold text-sky-900">Educação Médica Continuada</h2>
      <p className="mt-2 text-slate-700 max-w-prose mx-auto">Aprofunde seu conhecimento com os conteúdos exclusivos do Médico Exponencial EMS.</p>
      <a href={courseLink} target="_blank" rel="noreferrer" className="mt-6 inline-block px-8 py-3 bg-emsblue text-white rounded-lg text-base font-semibold shadow-lg hover:bg-sky-800 transition-transform hover:scale-105">Acessar Cursos</a>
    </section>
  );
}
