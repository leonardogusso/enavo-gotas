import React from 'react';
import { Calculator } from './components/Calculator';

const Header = () => (
  <header className="sticky top-0 z-30 backdrop-blur bg-white/90 border-b border-sky-100">
    <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
      <span className="font-bold text-emsblue">Enavo Gotas</span>
      <span className="text-[11px] text-sky-800">Ondansetrona em gotas</span>
    </div>
  </header>
);

const Introduction = () => (
  <section className="mx-auto max-w-md px-4 py-8 grid gap-4">
    <h1 className="text-2xl font-extrabold text-sky-900 leading-tight">Primeiro ondansetrona em gotas do Brasil.</h1>
    <p className="text-base text-sky-700">Precisão na dose. Facilidade na administração. Alívio em gotas.</p>
    <ul className="space-y-1.5 text-sky-800 text-[15px]">
      <li>🍓 Sabor morango</li>
      <li>💧 Não precisa de água</li>
      <li>🎯 1 gota = 0,4 mg</li>
    </ul>
  </section>
);

const VideoSection = () => (
  <section className="mx-auto max-w-md px-4 py-8 flex justify-center">
    <video src="/video-gota.mp4" autoPlay muted loop playsInline className="w-40 h-40 rounded-full border-2 border-sky-300 object-cover shadow-md" />
  </section>
);

const QRSection = () => {
  const QRCode = require("react-qr-code");
  const qrUrl = "https://www.enavogotas.com/landing?utm_source=kit&utm_medium=qrcode&utm_campaign=ativacao2025";
  return (
    <section className="mx-auto max-w-md px-4 py-6 flex flex-col items-center gap-2">
      <QRCode value={qrUrl} size={156} fgColor="#005BAB" />
      <p className="text-[12px] text-sky-600">Escaneie para acessar a página completa</p>
    </section>
  );
};

const CallToAction = () => (
  <section id="cta" className="mx-auto max-w-md px-4 py-6">
    <h3 className="text-lg font-semibold text-sky-900">Materiais para prática clínica</h3>
    <div className="mt-3 flex flex-col gap-2">
      <a href="/bula-enavo.pdf" className="px-4 py-2 bg-emsblue text-white rounded text-center text-sm">Baixar bula (PDF)</a>
      <a href="https://wa.me/5500000000000?text=Quero+receber+materiais+do+Enavo+Gotas&utm_source=kit&utm_medium=whatsapp&utm_campaign=ativacao2025" target="_blank" rel="noreferrer" className="px-4 py-2 bg-emerald-600 text-white rounded text-center text-sm">Receber via WhatsApp</a>
    </div>
    <p className="mt-3 text-[11px] text-slate-500">Conteúdo destinado exclusivamente a profissionais de saúde.</p>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-sky-100">
    <div className="mx-auto max-w-md px-4 py-6 text-[12px] text-sky-700">
      <span className="font-semibold text-emsblue">ENAVO GOTAS</span> — ondansetrona em gotas<br />
      <span className="text-[11px]">© {new Date().getFullYear()} • Uso profissional • Material promocional.</span>
    </div>
  </footer>
);


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-slate-800">
      <Header />
      <main>
        <Introduction />
        <VideoSection />
        <QRSection />
        <Calculator />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
