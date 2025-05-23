import React from 'react';
import logo from '../../assets/ob.png';

const Logo = ({ color = 'currentColor' }) => {
  const textColor = color === 'white' ? 'text-white' : 'text-gray-900 dark:text-white';

  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="Logo" className="w-8 h-10" />
      <span className={`font-bold text-xl ${textColor}`}>
        Obsidium
      </span>
    </div>
  );
};

export default Logo;