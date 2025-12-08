import React from 'react';

const ServiceCard = ({ icon, title, text, highlight }) => (
    <div
      className={`p-8 rounded-lg border ${
        highlight
          ? "bg-gray-900/40 border-primary relative overflow-hidden"
          : "bg-gray-900/40 border-gray-800 hover:border-primary transition-colors duration-300"
      }`}
    >
      {highlight && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent"></div>
      )}
  
      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-blue-400 text-3xl">
              {icon}
            </span>
          </div>
        </div>
  
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );

export default ServiceCard;