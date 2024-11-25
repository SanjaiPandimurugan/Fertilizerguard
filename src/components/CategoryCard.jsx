import React from 'react';
import { getCategoryMetadata } from '../data/cropDatabase';

const CategoryCard = ({ category, image, selected, onClick }) => {
  const handleImageError = (e) => {
    e.target.src = '/images/placeholder.jpg';
  };
  
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-lg p-4 transition-all ${
        selected ? 'bg-green-100 border-2 border-green-500' : 'bg-white hover:bg-gray-50'
      }`}
    >
      <img 
        src={`/images/categories/${image}`}
        alt={category}
        onError={handleImageError}
        className="w-full h-32 object-cover rounded-md mb-3"
      />
      <h3 className="text-center font-medium text-gray-900">{category}</h3>
    </div>
  );
};

export default CategoryCard;