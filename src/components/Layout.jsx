import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">
            Crop Nutrient Calculator
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            Get the right amount of fertilizer for your crop
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout; 