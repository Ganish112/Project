import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield, ChartBar, Settings } from 'lucide-react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Slight delay to prevent immediate popup
      const timer = setTimeout(() => setShowConsent(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
    localStorage.setItem('cookieConsent', 'all');
    setShowConsent(false);
  };

  const handleRejectAll = () => {
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
    localStorage.setItem('cookieConsent', 'necessary');
    setShowConsent(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowConsent(false);
    setShowCustomize(false);
  };

  const toggleCustomize = () => {
    setShowCustomize(!showCustomize);
  };

  const cookieTypes = [
    {
      id: 'necessary',
      icon: <Shield className="w-5 h-5 text-green-500" />,
      title: 'Necessary Cookies',
      description: 'Required for the website to function properly',
      disabled: true
    },
    {
      id: 'analytics',
      icon: <ChartBar className="w-5 h-5 text-blue-500" />,
      title: 'Analytics Cookies',
      description: 'Help us improve our website'
    },
    {
      id: 'marketing',
      icon: <Cookie className="w-5 h-5 text-purple-500" />,
      title: 'Marketing Cookies',
      description: 'Used for personalized advertisements'
    },
    {
      id: 'preferences',
      icon: <Settings className="w-5 h-5 text-orange-500" />,
      title: 'Preference Cookies',
      description: 'Remember your preferences and settings'
    }
  ];

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700"
        >
          <div className="max-w-7xl mx-auto">
            {!showCustomize ? (
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <Cookie className="w-6 h-6 text-obsidium-500" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Cookie Settings
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    Select your preferences below or click "Accept All" to consent to all cookies.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors w-full sm:w-auto"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={toggleCustomize}
                    className="px-4 py-2 text-sm font-medium text-obsidium-600 dark:text-obsidium-400 hover:bg-obsidium-50 dark:hover:bg-obsidium-900/30 rounded-lg transition-colors w-full sm:w-auto"
                  >
                    Customize
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 text-sm font-medium text-white bg-obsidium-600 hover:bg-obsidium-700 rounded-lg transition-colors w-full sm:w-auto"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={toggleCustomize}
                  className="absolute right-0 top-0 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Close cookie settings"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="pt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Cookie className="w-6 h-6 text-obsidium-500" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Cookie Preferences
                    </h3>
                  </div>
                  <div className="grid gap-6 mb-6">
                    {cookieTypes.map((cookie) => (
                      <div
                        key={cookie.id}
                        className="flex items-start justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1">{cookie.icon}</div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                              {cookie.title}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {cookie.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            checked={preferences[cookie.id]}
                            disabled={cookie.disabled}
                            onChange={(e) =>
                              setPreferences({
                                ...preferences,
                                [cookie.id]: e.target.checked
                              })
                            }
                            className="w-4 h-4 rounded border-gray-300 text-obsidium-600 focus:ring-obsidium-500 disabled:opacity-50"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row justify-end gap-3">
                    <button
                      onClick={handleRejectAll}
                      className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleSavePreferences}
                      className="px-4 py-2 text-sm font-medium text-white bg-obsidium-600 hover:bg-obsidium-700 rounded-lg transition-colors"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;