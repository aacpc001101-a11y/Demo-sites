
import React, { useState } from 'react';
import { getTaxInsight } from '../services/geminiService';

export const TaxInsights: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const insight = await getTaxInsight(query);
    setResult(insight);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-50">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-2xl">🤖</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">AI Tax Assistant</h3>
          <p className="text-sm text-slate-500">Ask a quick question about Canadian taxes</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., What are the tax deadlines for 2025?"
          className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
        <button
          disabled={loading}
          type="submit"
          className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 disabled:bg-slate-300 transition-colors"
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : 'Ask'}
        </button>
      </form>

      {result && (
        <div className="bg-slate-50 rounded-xl p-6 text-slate-700 text-sm leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="whitespace-pre-wrap">{result}</p>
        </div>
      )}
      
      {!result && !loading && (
        <div className="text-center py-4">
          <p className="text-xs text-slate-400">Get instant answers to general inquiries.</p>
        </div>
      )}
    </div>
  );
};
