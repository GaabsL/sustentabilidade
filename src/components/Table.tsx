import React from 'react';
import { Section, Card, PillBadge } from './ui';
import { TABLE_DATA } from '../data';
import { motion } from 'motion/react';

export function DetailTable() {
  return (
    <Section label="04 · Detalhamento" title="Tabela por rede e categoria">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left whitespace-nowrap">
                  Rede social
                </th>
                <th className="px-6 py-4 text-left whitespace-nowrap">
                  Categoria
                </th>
                <th className="px-6 py-4 text-left whitespace-nowrap">
                  Posts
                </th>
                <th className="px-6 py-4 text-left whitespace-nowrap">
                  Alcance / Views
                </th>
                <th className="px-6 py-4 text-left whitespace-nowrap">
                  Interações
                </th>
                <th className="px-6 py-4 text-left whitespace-nowrap">
                  Eng. médio
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {TABLE_DATA.map((row, idx) => (
                <tr 
                  key={idx} 
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-3.5 text-sm font-bold text-slate-700">
                    {row.network}
                  </td>
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: row.catColor }}></span>
                      <span className="text-sm font-bold text-slate-800">{row.category}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-sm font-medium text-slate-600">
                    {row.posts}
                  </td>
                  <td className="px-6 py-3.5 text-sm font-medium text-slate-600">
                    {row.reach}
                  </td>
                  <td className="px-6 py-3.5 text-sm font-medium text-slate-600">
                    {row.interactions}
                  </td>
                  <td className="px-6 py-3.5 text-sm font-bold italic text-green-600">
                    {row.engagement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </motion.div>
    </Section>
  );
}
