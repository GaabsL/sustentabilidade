import React from 'react';
import { cn } from '../lib/utils';

export function Section({ children, label, title, className }: { children: React.ReactNode, label: string, title: string, className?: string }) {
  return (
    <section className={cn("mb-12 md:mb-16", className)}>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 whitespace-nowrap">
          {label} • {title}
        </h2>
        <div className="flex-1 h-px bg-slate-200" />
      </div>
      {children}
    </section>
  );
}

export function Card({ children, className, borderLineColor, borderPosition = 'top' }: { children: React.ReactNode, className?: string, borderLineColor?: string, borderPosition?: 'top' | 'left' }) {
  return (
    <div className={cn("bg-white border border-slate-200 rounded-2xl shadow-sm relative overflow-hidden", className)}>
      {borderLineColor && borderPosition === 'top' && (
        <div 
          className="absolute top-0 left-0 right-0 h-1" 
          style={{ backgroundColor: borderLineColor }} 
        />
      )}
      {borderLineColor && borderPosition === 'left' && (
        <div 
          className="absolute top-0 left-0 bottom-0 w-1" 
          style={{ backgroundColor: borderLineColor }} 
        />
      )}
      {children}
    </div>
  );
}

export function PillBadge({ color, children }: { color: string, children: React.ReactNode }) {
  return (
    <span 
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap"
      style={{
        backgroundColor: `${color}1A`,
        color: color
      }}
    >
      {children}
    </span>
  );
}
