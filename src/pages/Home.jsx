import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage, languages } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Home = () => {
  const navigate = useNavigate();
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-end mb-4">
        <div className="inline-flex rounded-lg border border-gray-200 p-1">
          {Object.entries(languages).map(([code, lang]) => (
            <button
              key={code}
              onClick={() => setCurrentLanguage(code)}
              className={`px-3 py-1 rounded-md flex items-center space-x-2 ${
                currentLanguage === code ? 'bg-green-500 text-white' : 'text-gray-600'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        {t.title}
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* ML Soil Analysis Option */}
        <div 
          onClick={() => navigate('/soil-analysis')}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">{t.soilAnalysis}</h2>
            <span className="text-3xl">🔬</span>
          </div>
          
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-green-500/20 to-blue-500/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">📸</span>
            </div>
          </div>

          <p className="text-gray-600">
            {t.soilAnalysisDesc}
          </p>
        </div>

        {/* Manual Selection Option */}
        <div 
          onClick={() => navigate('/step1')}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">{t.manualSelection}</h2>
            <span className="text-3xl">📝</span>
          </div>
          
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-yellow-500/20 to-red-500/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">🌾</span>
            </div>
          </div>

          <p className="text-gray-600">
            {t.manualSelectionDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 