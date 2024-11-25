import React from 'react';

const CropCard = ({ crop, selected, onClick }) => {
  const handleImageError = (e) => {
    e.target.src = '/images/placeholder.jpg'; // Fallback image
  };

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-lg p-4 transition-all ${
        selected ? 'bg-green-100 border-2 border-green-500' : 'bg-white hover:bg-gray-50'
      }`}
    >
      <div className="relative">
        <img 
          src={`/images/crops/${crop.category.toLowerCase().replace(' ', '-')}/${crop.image}`}
          alt={crop.name}
          onError={handleImageError}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
        <span className="absolute top-2 right-2 text-2xl">
          {crop.icon}
        </span>
      </div>
      <h3 className="font-medium text-gray-900">{crop.name}</h3>
      <p className="text-sm text-gray-500 italic">{crop.scientific}</p>
      <p className="text-sm text-gray-600 mt-2">
        NPK: {crop.npk.join('-')}
      </p>
    </div>
  );
};

export default CropCard; 