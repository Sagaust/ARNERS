import React, { useState } from 'react';

const LanguageDropdown = () => {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Here, you'd typically update the website language
  };

  return (
    <div className="language-dropdown">
      <select value={language} onChange={handleLanguageChange}>
        <option value="English">English</option>
        <option value="Spanish">Español</option>
        {/* Add more languages here */}
      </select>
    </div>
  );
};

export default LanguageDropdown;
