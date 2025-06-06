import React from 'react';

type AuthToggleProps = {
  mode: 'login' | 'signup';
  onToggle: () => void;
};

export default function AuthToggle({ mode, onToggle }: AuthToggleProps) {
  return (
    <div className="relative flex w-64 rounded-full bg-muted p-1 mx-auto h-8">
      {/* Sliding indicator - updated */}
      <div
        className={`absolute top-0 h-full w-[calc(50%-0.25rem)] rounded-full bg-primary transition-all duration-300 ${
          mode === 'login' ? 'left-1' : 'left-[calc(50%+0.25rem)]'
        }`}
      />
      <button
        onClick={onToggle}
        className={`relative z-10 w-1/2 text-center transition-colors duration-300 ${
          mode === 'login' ? 'text-white' : 'text-muted-foreground'
        }`}
      >
        Login
      </button>
      <button
        onClick={onToggle}
        className={`relative z-10 w-1/2 text-center transition-colors duration-300 ${
          mode === 'signup' ? 'text-white' : 'text-muted-foreground'
        }`}
      >
        Signup
      </button>
    </div>
  );
}