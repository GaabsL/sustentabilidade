import React from 'react';
import { Section, Card } from './ui';
import { KPIS, CATEGORIES } from '../data';
import { motion } from 'motion/react';

export function Overview() {
  return (
    <Section label="01 · Visão geral" title="Números consolidados">
      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {KPIS.map((kpi, idx) => (
          <motion.div 
            key={kpi.id} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <Card className="px-5 py-6 min-h-[140px] flex flex-col justify-between" borderLineColor={kpi.indicatorIndicatorColor} borderPosition="left">
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1 shadow-none">
                {kpi.label}
              </span>
              <div className="mt-1">
                <p className="text-4xl font-black text-[#004A99] leading-none mb-1">
                  {kpi.value}
                </p>
                <p className="text-xs font-medium text-slate-500">
                  {kpi.sub}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Category Pills Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {CATEGORIES.map((cat, idx) => (
          <motion.div 
            key={cat.id}
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 + (idx * 0.05), duration: 0.5 }}
          >
            <Card className="p-5 flex flex-col items-center text-center">
              <div 
                className="w-2 rounded-full h-2 mb-3 shadow-[0_0_8px_rgba(0,0,0,0.1)]"
                style={{ backgroundColor: cat.color }}
              />
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                {cat.name}
              </p>
              <div className="text-3xl font-black text-[#004A99] leading-none mb-1">
                {cat.count}
              </div>
              <p className="text-xs font-medium text-slate-400">
                {cat.networks}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
