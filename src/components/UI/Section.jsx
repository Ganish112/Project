import React from 'react';

const Section = ({
  children,
  className = '',
  id,
  background = 'white',
  spacing = 'lg'
}) => {
  const backgroundStyles = {
    white: 'bg-white dark:bg-gray-900',
    light: 'bg-obsidium-50 dark:bg-gray-800',
    dark: 'bg-obsidium-900 text-white',
    primary: 'bg-obsidium-600 text-white',
    gradient: 'bg-gradient-to-br from-obsidium-600 to-obsidium-800 text-white'
  };

  const spacingStyles = {
    none: 'py-0',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-20',
    xl: 'py-20 md:py-32'
  };

  return (
    <section 
      id={id}
      className={`${backgroundStyles[background]} ${spacingStyles[spacing]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;