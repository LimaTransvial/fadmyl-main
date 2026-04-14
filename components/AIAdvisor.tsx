import React, { useState } from 'react';
import { SectionId } from '../types';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getRecommendation } from '../services/geminiService';

export const AIAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null);
    const result = await getRecommendation(query);
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <section id={SectionId.AI_ADVISOR} className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 mb-6">
            <Sparkles size={14} className="text-brand-gold" />
            <span className="text-xs font-sans tracking-widest uppercase">Powered by Google Gemini</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Asistente Inteligente FADMYL</h2>
          <p className="text-gray-400 text-lg">
            ¿No estás seguro de qué modelo elegir? Cuéntanos tu proyecto (ej: "Quiero armar un complejo de glamping en la montaña") y nuestra IA te recomendará la mejor opción.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
          <form onSubmit={handleAsk} className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Describe tu proyecto aquí..."
              className="w-full bg-black/30 border border-white/20 text-white placeholder-gray-500 rounded-xl px-4 py-4 pr-14 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="absolute right-2 top-2 bottom-2 bg-brand-gold text-brand-dark rounded-lg px-4 flex items-center justify-center hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
            </button>
          </form>

          {response && (
            <div className="mt-8 animate-fade-in-up">
              <div className="bg-white/10 rounded-xl p-6 border-l-4 border-brand-gold">
                <h4 className="font-serif text-xl mb-2 text-brand-gold">Recomendación:</h4>
                <p className="text-gray-200 leading-relaxed">
                  {response}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};