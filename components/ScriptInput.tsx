import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';
import { ScriptType } from '../App';

interface ScriptInputProps {
  topic: string;
  setTopic: (topic: string) => void;
  points: string;
  setPoints: (points: string) => void;
  scriptType: ScriptType;
  setScriptType: (type: ScriptType) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

export const ScriptInput: React.FC<ScriptInputProps> = ({
  topic,
  setTopic,
  points,
  setPoints,
  scriptType,
  setScriptType,
  onGenerate,
  isLoading,
}) => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700">
      <h2 className="text-2xl font-semibold mb-4 text-slate-100">1. Your Video Idea</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Script Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setScriptType('long')}
              className={`px-4 py-2 text-sm font-semibold text-center rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-blue-500 ${
                scriptType === 'long'
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Long Video
            </button>
            <button
              type="button"
              onClick={() => setScriptType('short')}
              className={`px-4 py-2 text-sm font-semibold text-center rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-blue-500 ${
                scriptType === 'short'
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Short Video
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-slate-300 mb-2">
            Video Topic
          </label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., How to Master YouTube Scriptwriting"
            className="w-full bg-slate-900/70 border border-slate-600 rounded-md px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
        <div>
          <label htmlFor="points" className="block text-sm font-medium text-slate-300 mb-2">
            Key Points to Explain
          </label>
          <textarea
            id="points"
            rows={8}
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            placeholder="- The importance of a good hook&#10;- How to structure the video body&#10;- Common mistakes to avoid"
            className="w-full bg-slate-900/70 border border-slate-600 rounded-md px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
        <button
          onClick={onGenerate}
          disabled={isLoading}
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              <SparklesIcon className="w-5 h-5 mr-2" />
              Generate Script
            </>
          )}
        </button>
      </div>
    </div>
  );
};