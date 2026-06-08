import React from 'react';
import { Section, Card } from './ui';
import { CATEGORIES, ENGAGEMENT_CHART_DATA } from '../data';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, ErrorBar, Legend
} from 'recharts';
import { motion } from 'motion/react';

export function Charts() {
  const barData = CATEGORIES.map(c => ({
    name: c.name,
    reach: c.reach,
    color: c.color
  }));

  const pieData = CATEGORIES.map(c => ({
    name: c.name,
    value: c.count,
    color: c.color
  }));

  return (
    <Section label="03 · Visualizações" title="Alcance e engajamento">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        
        {/* Reach Chart */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Card className="p-6 md:p-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Alcance total por categoria</h3>
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9E9B94' }} dy={10} />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 11, fill: '#9E9B94' }} 
                    tickFormatter={(val) => val >= 1000000 ? `${(val/1000000).toFixed(1)}M` : val >= 1000 ? `${(val/1000).toFixed(0)}K` : val}
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(26,24,20,0.04)' }}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="reach" radius={[4, 4, 0, 0]}>
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* Posts Pie Chart */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Card className="p-6 md:p-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Posts por categoria</h3>
            <div className="h-[280px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="45%"
                    innerRadius="50%"
                    outerRadius="80%"
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    iconType="circle"
                    formatter={(value) => <span className="text-[12px] text-text-muted ml-1.5">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* Engagement Horizontal Chart */}
        <motion.div className="lg:col-span-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Card className="p-6 md:p-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Engajamento médio por rede e categoria</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={ENGAGEMENT_CHART_DATA} 
                  layout="vertical"
                  margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
                >
                  <XAxis 
                    type="number" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 11, fill: '#9E9B94' }}
                    domain={[0, 6]}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <YAxis 
                    type="category" 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 11, fill: '#6B6860', width: 200 }} 
                    width={200}
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(26,24,20,0.04)' }}
                    formatter={(value: number) => [`${value.toFixed(2)}%`, 'Engajamento']}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                    {ENGAGEMENT_CHART_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
