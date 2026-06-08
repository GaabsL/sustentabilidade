import React from 'react';

export function Cover() {
  return (
    <div className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between px-8 py-12 md:px-16 md:py-16 bg-[#004A99] text-white overflow-hidden shadow-md">
      {/* Decorative Gradients */}
      <div 
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F26522 0%, transparent 70%)' }}
      />
      <div 
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)' }}
      />

      <header className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 relative z-10">
        <div className="bg-white rounded-xl shadow-inner p-2.5 h-14 md:h-16 flex items-center justify-center">
          <img 
            src="https://i.imgur.com/ihchsJt.png" 
            alt="Assaí Atacadista" 
            className="h-full w-auto object-contain" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <span className="block text-xl md:text-2xl font-black tracking-tight leading-none uppercase">
            Assaí Atacadista
          </span>
          <span className="block text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#FFB81C] mt-1.5">
            Performance Institucional
          </span>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col justify-center my-12 md:my-0">
        <h1 className="font-black uppercase tracking-tight text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.95] text-white mb-6 max-w-5xl">
          Relatório de<br/>
          <em className="text-[#FFB81C] not-italic">Performance</em><br/>
          Institucional
        </h1>
        <p className="text-base md:text-lg text-white/80 max-w-[540px] leading-relaxed font-medium">
          Resultados dos posts de Serviços Financeiros, Academia Assaí, Instituto Assaí, Sustentabilidade e Sacolas.
        </p>
      </main>

      <footer className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16 pt-8 border-t border-white/20">
        <div className="flex flex-wrap gap-8 md:gap-16">
          <Stat value="54" label="Posts analisados" />
          <Stat value="5" label="Categorias" />
        </div>
        
        <div className="md:text-right">
          <p className="text-xs uppercase font-medium opacity-80 tracking-widest text-white/80">Período de Análise</p>
          <p className="text-[17px] font-bold text-[#FFB81C] uppercase mt-1">Janeiro — Junho 2026</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string, label: string }) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-black text-white leading-none mb-2">
        {value}
      </div>
      <div className="text-[11px] text-white/70 uppercase font-bold tracking-widest">
        {label}
      </div>
    </div>
  );
}
