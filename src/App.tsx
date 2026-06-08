/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Cover } from './components/Cover';
import { Overview } from './components/Overview';
import { CategoryCards } from './components/CategoryPerformance';
import { Charts } from './components/Charts';
import { DetailTable } from './components/Table';
import { Analysis } from './components/Analysis';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-[#F26522] selection:text-white flex flex-col">
      <Cover />
      
      <main className="max-w-[1100px] w-full mx-auto px-6 py-10 md:px-10 md:py-16 flex-1">
        <Overview />
        <CategoryCards />
        <Charts />
        <DetailTable />
        <Analysis />
      </main>

      <footer className="px-8 py-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center sm:text-left">
          Documento Gerado para Gestão Executiva • Jan–Jun 2026
        </p>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Confidencialidade</span>
              <span className="bg-slate-200 text-slate-600 text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Uso Interno</span>
           </div>
           <p className="text-[10px] font-bold text-[#004A99] uppercase tracking-widest hidden sm:block">Assaí Atacadista BI Unit</p>
        </div>
      </footer>
    </div>
  );
}
