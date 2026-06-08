import React from 'react';
import { Section } from './ui';
import { ANALYSIS_DATA } from '../data';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function Analysis() {
  return (
    <Section label="05 · Análise e recomendações" title="Conclusões executivas">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ANALYSIS_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            className={cn(item.isWide && "md:col-span-2")}
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div 
              className="p-5 md:p-6 rounded-xl border flex flex-col h-full"
              style={{ backgroundColor: `${item.color}0D`, borderColor: `${item.color}26` }}
            >
              <h3 
                className="text-xs font-bold uppercase mb-2 italic underline underline-offset-4" 
                style={{ color: item.color }}
              >
                {item.title}
              </h3>
              <p className="text-[11px] md:text-xs text-slate-600 font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
