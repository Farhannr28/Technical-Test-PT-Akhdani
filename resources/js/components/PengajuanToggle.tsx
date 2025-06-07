import React from 'react';

type PengajuanToggleProps = {
  mode: 'baru' | 'history';
  onToggle: () => void;
};

export default function PengajuanToggle({ mode, onToggle }: PengajuanToggleProps) {
  return (
    <div className="relative flex w-80 rounded-full bg-muted p-1 mx-auto h-8">
      <div
        className={`absolute top-0 h-full w-[calc(50%-0.25rem)] rounded-full bg-primary transition-all duration-300 ${
          mode === 'baru' ? 'left-1' : 'left-[calc(50%+0.25rem)]'
        }`}
      />
      <button
        onClick={onToggle}
        className={`relative z-10 w-1/2 text-center transition-colors duration-300 ${
          mode === 'baru' ? 'text-white' : 'text-muted-foreground'
        }`}
      >
        Pengajuan Baru
      </button>
      <button
        onClick={onToggle}
        className={`relative z-10 w-1/2 text-center transition-colors duration-300 ${
          mode === 'history' ? 'text-white' : 'text-muted-foreground'
        }`}
      >
        History Pengajuan
      </button>
    </div>
  );
}