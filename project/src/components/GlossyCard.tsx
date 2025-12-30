import React, { ReactNode, CSSProperties } from 'react';

interface GlossyCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function GlossyCard({ children, className = '', style }: GlossyCardProps) {
  return (
    <div className={`glass-card p-6 ${className}`} style={style}>
      {children}
    </div>
  );
}
