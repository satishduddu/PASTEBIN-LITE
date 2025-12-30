import React, { ReactNode } from 'react';

interface GlossyButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function GlossyButton({ 
  children, 
  className = '', 
  onClick, 
  style,
  type = 'button',
  disabled = false
}: GlossyButtonProps) {
  const handleKey = (e: React.KeyboardEvent) => {
    if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick?.();
    }
  };

  // If type is 'submit' or contains click handler, render as button
  if (type === 'submit' || type === 'reset') {
    return (
      <button
        type={type}
        disabled={disabled}
        style={style}
        className={`neon-btn px-6 py-3 rounded-md text-base font-semibold shadow-lg transition ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      >
        {children}
      </button>
    );
  }

  // Otherwise render as accessible div for anchor children
  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      onClick={!disabled ? onClick : undefined}
      onKeyDown={!disabled ? handleKey : undefined}
      style={style}
      className={`neon-btn px-6 py-3 rounded-md text-base font-semibold shadow-lg transition ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
