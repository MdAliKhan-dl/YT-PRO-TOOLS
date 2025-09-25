
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 text-center border-b border-slate-700/50">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        AI YouTube Scriptwriter
      </h1>
      <p className="mt-2 text-slate-400">Your personal scriptwriting genius.</p>
    </header>
  );
};
