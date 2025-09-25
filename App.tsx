import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ScriptInput } from './components/ScriptInput';
import { ScriptDisplay } from './components/ScriptDisplay';
import { generateScript } from './services/geminiService';

export type ScriptType = 'long' | 'short';

const App: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const [points, setPoints] = useState<string>('');
  const [scriptType, setScriptType] = useState<ScriptType>('long');
  const [script, setScript] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateScript = useCallback(async () => {
    if (!topic || !points) {
      setError('Please provide a topic and key points.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setScript('');

    try {
      const generatedScript = await generateScript(topic, points, scriptType);
      setScript(generatedScript);
    } catch (err) {
      console.error(err);
      setError('Failed to generate script. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  }, [topic, points, scriptType]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
            <p className="text-center text-slate-400 mb-8">
              Provide your video topic and key points. Our AI will craft a high-impact script using a proven dual-persona style.
            </p>
          </div>
          <ScriptInput
            topic={topic}
            setTopic={setTopic}
            points={points}
            setPoints={setPoints}
            scriptType={scriptType}
            setScriptType={setScriptType}
            onGenerate={handleGenerateScript}
            isLoading={isLoading}
          />
          <ScriptDisplay
            script={script}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
    </div>
  );
};

export default App;