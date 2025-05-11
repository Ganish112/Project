import React from 'react';
import logo from '../../assets/ob.png'; // Adjust the path if needed

const Logo = ({ color = 'currentColor' }) => {
  const textColor = color === 'white' ? 'text-white' : 'text-gray-900 dark:text-white';

  return (
    <div className="flex items-center">
      <img src={logo} alt="Logo" className="w-12 h-12 mr-2" /> {/* w-7 = 28px */}
      <span className={`font-bold text-xl ${textColor}`}>
        Obsidium
      </span>
    </div>
  );
};

export default Logo;
