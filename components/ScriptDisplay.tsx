
import React, { useState, useEffect } from 'react';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';


interface ScriptDisplayProps {
  script: string;
  isLoading: boolean;
  error: string | null;
}

export const ScriptDisplay: React.FC<ScriptDisplayProps> = ({ script, isLoading, error }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    if (script) {
      navigator.clipboard.writeText(script);
      setCopied(true);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-slate-700 rounded w-1/4"></div>
          <div className="h-4 bg-slate-700 rounded w-full"></div>
          <div className="h-4 bg-slate-700 rounded w-5/6"></div>
          <div className="h-4 bg-slate-700 rounded w-full"></div>
          <div className="h-4 bg-slate-700 rounded w-3/4"></div>
          <div className="mt-8 h-4 bg-slate-700 rounded w-1/4"></div>
          <div className="h-4 bg-slate-700 rounded w-full"></div>
          <div className="h-4 bg-slate-700 rounded w-full"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center text-red-400">
          <p className="font-semibold">Oops! Something went wrong.</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      );
    }
    
    if (!script) {
      return (
        <div className="text-center text-slate-500">
          <p>Your generated script will appear here.</p>
        </div>
      );
    }

    return (
      <pre className="whitespace-pre-wrap text-slate-300 font-mono text-sm leading-relaxed">
        {script}
      </pre>
    );
  };
  
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-slate-100">2. Generated Script</h2>
        {script && !isLoading && (
          <button
            onClick={handleCopy}
            className="flex items-center text-sm bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium py-1 px-3 rounded-md transition-colors"
          >
            {copied ? <CheckIcon className="w-4 h-4 mr-2 text-green-400" /> : <ClipboardIcon className="w-4 h-4 mr-2" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>
      <div className="bg-slate-900/70 p-4 rounded-md min-h-[300px] max-h-[500px] overflow-y-auto custom-scrollbar">
        {renderContent()}
      </div>
       <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #1e293b;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #475569;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #64748b;
          }
        `}</style>
    </div>
  );
};
