import React from 'react';

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  withLine = true,
  as = 'h2'
}) => {
  // Alignment styles
  const alignStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  // Dynamic heading element
  const Heading = as;

  return (
    <div className={`max-w-3xl mb-12 ${alignStyles[align]} ${className}`}>
      <Heading className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
        {title}
      </Heading>

      {withLine && (
        <div
          className={`h-1 w-24 bg-blue-600 mb-6 ${
            align === 'center'
              ? 'mx-auto'
              : align === 'right'
              ? 'ml-auto'
              : ''
          }`}
        ></div>
      )}

      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
