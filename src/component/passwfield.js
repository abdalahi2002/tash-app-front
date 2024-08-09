import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'; 

function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password" // Utiliser le libellé comme identifiant pour le champ de mot de passe
          name="password" // Utiliser le libellé comme nom pour le champ de mot de passe
          
          required
          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" // Aligner toujours le texte à droite
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 px-3 py-2"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <EyeOffIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <EyeIcon className="h-5 w-5 text-gray-500" />
          )}
        </button>
      </div>
    </div>
  );
}

export default PasswordField;
