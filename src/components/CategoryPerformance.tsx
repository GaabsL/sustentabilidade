import React from 'react';
import { Section, Card } from './ui';
import { CATEGORY_PERFORMANCE } from '../data';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function CategoryCards() {
  return (
    <Section label="02 · Desempenho por categoria" title="Métricas individuais">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {CATEGORY_PERFORMANCE.map((cat, idx) => (
          <motion.div
            key={cat.id}
            className={cn(cat.isWide && "lg:col-span-2")}
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <Card className="h-full flex flex-col">
              {/* Header */}
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">{cat.name}</h3>
                </div>
                <span className="text-xs font-medium text-slate-400 border border-slate-200 bg-white shadow-sm px-2.5 py-0.5 rounded-full">
                  {cat.badge}
                </span>
              </div>
              
              {/* Body */}
              <div className={cn("px-6 py-2 flex-1", cat.isWide ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-2 border-t border-slate-100" : "")}>
                {cat.stats && (
                  <div className="flex flex-col divide-y divide-slate-100">
                    {cat.stats.map((stat, i) => (
                      <Row key={i} label={stat.label} value={stat.value} />
                    ))}
                  </div>
                )}
                
                {cat.statsBlocks && cat.statsBlocks.map((block, i) => (
                  <div key={i} className="flex flex-col divide-y divide-slate-100">
                    {block.map((stat, j) => (
                      <Row key={j} label={stat.label} value={stat.value} />
                    ))}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Row({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center py-3">
      <span className="text-sm font-medium text-slate-500">{label}</span>
      <span className="text-sm font-bold text-[#004A99] ml-4 text-right">{value}</span>
    </div>
  );
}
