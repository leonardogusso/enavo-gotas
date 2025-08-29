import React, { useState, useMemo } from "react";

// Modal do Badge com a nova mensagem de compartilhamento
const BadgeModal = ({ onClose, posologia }) => {
    // Mensagem de compartilhamento mais completa e profissional
    const posologiaCompleta = `Referência profissional - Enavo Gotas (ondansetrona): Para um paciente com ${posologia.peso} kg, a posologia sugerida (${posologia.regime}) é de ${posologia.gotasMin}-${posologia.gotasMax} gotas (${posologia.mgMin.toFixed(1)}-${posologia.mgMax.toFixed(1)} mg). Consulte a bula para mais informações.`;
    const encodedMessage = encodeURIComponent(posologiaCompleta);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center max-w-sm w-full">
                <h3 className="text-lg font-bold text-sky-900">✔️ Enavo Expert</h3>
                <p className="mt-2 text-sky-700 text-sm">Posologia calculada com sucesso.</p>
                <div className="mt-4 border border-sky-200 rounded-lg p-4 bg-sky-50">
                    <span className="text-sky-800 text-sm">Compartilhe o resultado com seus contatos.</span>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="px-4 py-2 bg-emerald-600 text-white rounded text-sm">Compartilhar no WhatsApp</a>
                    <button onClick={onClose} className="px-4 py-2 bg-sky-800 text-white rounded text-sm">Fechar</button>
                </div>
            </div>
        </div>
    );
};

export function Calculator() {
    const [peso, setPeso] = useState("");
    const [showBadge, setShowBadge] = useState(false);

    // Função de validação para o campo de peso
    const handlePesoChange = (e) => {
        const valor = e.target.value;
        // Permite apenas números e um único separador (vírgula ou ponto)
        const valorLimpo = valor.replace(/[^0-9,.]/g, '').replace(/([,.])[,.]+/g, '$1');
        setPeso(valorLimpo);
    };

    const pesoNum = useMemo(() => {
        const n = parseFloat(peso.replace(",", "."));
        return isNaN(n) ? 0 : n;
    }, [peso]);

    // LÓGICA ORIGINAL da calculadora, conforme solicitado
    const posologia = useMemo(() => {
        const mgPorGota = 0.4;
        if (pesoNum <= 0) return null;
        
        // Mantida a lógica original do seu primeiro arquivo App.js
        const mgMin = 0.2 * pesoNum;
        const mgMax = 0.4 * pesoNum;
        const gotasMin = Math.max(1, Math.round(mgMin / mgPorGota));
        const gotasMax = Math.max(gotasMin, Math.round(mgMax / mgPorGota));
        
        return { 
            regime: "SBP 0,2–0,4 mg/kg (≥6 meses)", 
            mgMin, 
            mgMax, 
            gotasMin, 
            gotasMax,
            peso: peso // Adicionado para uso na mensagem do WhatsApp
        };

    }, [pesoNum, peso]);

    return (
        <section id="posologia" className="bg-white/80 border-y border-sky-100">
            <div className="mx-auto max-w-md px-4 py-6">
                <h2 className="text-xl font-bold text-sky-900">Posologia rápida</h2>
                <label htmlFor="peso" className="text-sky-800 text-sm">Peso (kg)</label>
                <input 
                    id="peso"
                    value={peso} 
                    onChange={handlePesoChange} 
                    inputMode="decimal" 
                    placeholder="Ex.: 8,5" 
                    className="mt-1 w-full border border-sky-300 rounded px-3 py-2 text-sm" 
                />

                {posologia && (
                    <div className="mt-3 bg-sky-50 border border-sky-200 rounded p-3 text-sky-800 text-sm">
                        {posologia.regime} → **{posologia.gotasMin}-{posologia.gotasMax} gotas** ({posologia.mgMin.toFixed(1)}-{posologia.mgMax.toFixed(1)} mg)
                        <div className="text-[11px] text-sky-700 mt-1">Limite: máx. 10 gotas (4 mg) em crianças.</div>
                        <button onClick={() => setShowBadge(true)} className="mt-3 px-3 py-1.5 bg-emerald-600 text-white rounded text-sm">Gerar Badge Enavo Expert</button>
                    </div>
                )}
            </div>

            {showBadge && posologia && <BadgeModal onClose={() => setShowBadge(false)} posologia={posologia} />}
        </section>
    );
}
