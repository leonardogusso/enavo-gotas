import React, { useState, useMemo } from "react";
import QRCode from "react-qr-code";

export default function App() {
  const [peso, setPeso] = useState("");
  const [ageGroup, setAgeGroup] = useState("6-23m");
  const [showBadge, setShowBadge] = useState(false);

  const pesoNum = useMemo(() => {
    const n = parseFloat(peso.replace(",", "."));
    return isNaN(n) ? 0 : n;
  }, [peso]);

  const posologia = useMemo(() => {
    const mgPorGota = 0.4;
    if (pesoNum <= 0) return null;
    if (ageGroup === "6-23m") {
      const mgMin = 0.2 * pesoNum;
      const mgMax = 0.4 * pesoNum;
      const gotasMin = Math.max(1, Math.round(mgMin / mgPorGota));
      const gotasMax = Math.max(gotasMin, Math.round(mgMax / mgPorGota));
      return { regime: "SBP 0,2–0,4 mg/kg (≥6 meses)", mgMin, mgMax, gotasMin, gotasMax };
    } else {
      const gotas = Math.min(10, Math.round(pesoNum));
      const mg = gotas * mgPorGota;
      return { regime: "Bula: 1 gota/kg até 10 gotas (máx. 4 mg)", mgMin: mg, mgMax: mg, gotasMin: gotas, gotasMax: gotas };
    }
  }, [ageGroup, pesoNum]);

  const qrUrl = "https://www.enavogotas.com/landing?utm_source=kit&utm_medium=qrcode&utm_campaign=ativacao2025";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-slate-800">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/90 border-b border-sky-100">
        <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
          <span className="font-bold text-emsblue">Enavo Gotas</span>
          <span className="text-[11px] text-sky-800">Ondansetrona em gotas</span>
        </div>
      </header>

      <section className="mx-auto max-w-md px-4 py-8 grid gap-4">
        <h1 className="text-2xl font-extrabold text-sky-900 leading-tight">Primeiro ondansetrona em gotas do Brasil.</h1>
        <p className="text-base text-sky-700">Precisão na dose. Facilidade na administração. Alívio em gotas.</p>
        <ul className="space-y-1.5 text-sky-800 text-[15px]">
          <li>🍓 Sabor morango</li>
          <li>💧 Não precisa de água</li>
          <li>🎯 1 gota = 0,4 mg</li>
        </ul>
      </section>

      <section className="mx-auto max-w-md px-4 py-8 flex justify-center">
        <video src="/video-gota.mp4" autoPlay muted loop playsInline className="w-40 h-40 rounded-full border-2 border-sky-300 object-cover shadow-md" />
      </section>

      <section className="mx-auto max-w-md px-4 py-6 flex flex-col items-center gap-2">
        <QRCode value={qrUrl} size={156} fgColor="#005BAB" />
        <p className="text-[12px] text-sky-600">Escaneie para acessar a página completa</p>
      </section>

      <section id="posologia" className="bg-white/80 border-y border-sky-100">
        <div className="mx-auto max-w-md px-4 py-6">
          <h2 className="text-xl font-bold text-sky-900">Posologia rápida</h2>
          <label className="text-sky-800 text-sm">Peso (kg)</label>
          <input value={peso} onChange={(e) => setPeso(e.target.value)} inputMode="decimal" placeholder="Ex.: 8,5" className="mt-1 w-full border border-sky-300 rounded px-3 py-2 text-sm" />

          {posologia && (
            <div className="mt-3 bg-sky-50 border border-sky-200 rounded p-3 text-sky-800 text-sm">
              {posologia.regime} → {posologia.gotasMin}-{posologia.gotasMax} gotas ({posologia.mgMin.toFixed(1)}-{posologia.mgMax.toFixed(1)} mg)
              <div className="text-[11px] text-sky-700 mt-1">Limite: máx. 10 gotas (4 mg) em crianças.</div>

              <button onClick={() => setShowBadge(true)} className="mt-3 px-3 py-1.5 bg-emerald-600 text-white rounded text-sm">Gerar Badge Enavo Expert</button>
            </div>
          )}
        </div>
      </section>

      {showBadge && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center max-w-sm">
            <h3 className="text-lg font-bold text-sky-900">✔️ Enavo Expert</h3>
            <p className="mt-2 text-sky-700 text-sm">Você gerou a posologia corretamente.</p>
            <div className="mt-4 border border-sky-200 rounded-lg p-4 bg-sky-50">
              <span className="text-sky-800 text-sm">Badge Digital — compartilhe com seus contatos</span>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <a href="https://wa.me/5500000000000?text=Acabei+de+gerar+meu+Badge+Enavo+Expert!" target="_blank" rel="noreferrer" className="px-4 py-2 bg-emerald-600 text-white rounded text-sm">Compartilhar no WhatsApp</a>
              <button onClick={() => setShowBadge(false)} className="px-4 py-2 bg-sky-800 text-white rounded text-sm">Fechar</button>
            </div>
          </div>
        </div>
      )}

      <section id="cta" className="mx-auto max-w-md px-4 py-6">
        <h3 className="text-lg font-semibold text-sky-900">Materiais para prática clínica</h3>
        <div className="mt-3 flex flex-col gap-2">
          <a href="/bula-enavo.pdf" className="px-4 py-2 bg-emsblue text-white rounded text-center text-sm">Baixar bula (PDF)</a>
          <a href="https://wa.me/5500000000000?text=Quero+receber+materiais+do+Enavo+Gotas&utm_source=kit&utm_medium=whatsapp&utm_campaign=ativacao2025" target="_blank" rel="noreferrer" className="px-4 py-2 bg-emerald-600 text-white rounded text-center text-sm">Receber via WhatsApp</a>
        </div>
        <p className="mt-3 text-[11px] text-slate-500">Conteúdo destinado exclusivamente a profissionais de saúde.</p>
      </section>

      <footer className="bg-white border-t border-sky-100">
        <div className="mx-auto max-w-md px-4 py-6 text-[12px] text-sky-700">
          <span className="font-semibold text-emsblue">ENAVO GOTAS</span> — ondansetrona em gotas<br />
          <span className="text-[11px]">© {new Date().getFullYear()} • Uso profissional • Material promocional.</span>
        </div>
      </footer>
    </div>
  );
}