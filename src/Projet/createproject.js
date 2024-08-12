import React, { useState, useContext } from 'react';
import { createproject } from '../api/Projet';
import AuthContext from '../Session';

export default function CreateProject() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [globalError, setGlobalError] = useState(null);
  const { authTokens, checkToken } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validate = () => {
    const errors = {};
    const today = new Date();
    const startDate = formData.start_date ? new Date(formData.start_date) : null;
    const endDate = formData.end_date ? new Date(formData.end_date) : null;

    if (startDate && endDate && endDate <= startDate) {
      errors.date = 'end_date must be greater than start_date.';
    } else if (!startDate && endDate && endDate <= today) {
      errors.date = 'end_date must be greater than today if start_date is not provided.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGlobalError(null); // Réinitialiser les erreurs globales
    if (!validate()) {
      return;
    }

    const preparedData = {
      ...formData,
      start_date: formData.start_date || new Date().toISOString().split('T')[0],
      end_date: formData.end_date ? new Date(formData.end_date).toISOString().split('T')[0] : null,
    };

    console.log('Formulaire de Projet:', preparedData);

    try {
      await checkToken();
      await createproject(preparedData, authTokens);
      alert("Projet créé avec succès !");
    } catch (error) {
      // Gestion des erreurs globales
      setGlobalError('Une erreur est survenue lors de la création du projet.');
      console.error('Error during creation:', error);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-gray-200 shadow shadow-gray-300 mx-8 md:mx-0 rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-indigo-500 rounded-full flex flex-shrink-0 justify-center items-center text-gray-500 text-2xl font-mono">P</div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-500">
                  <h2 className="leading-relaxed">Créer un Projet</h2>
                </div>
              </div>
              <form className="divide-y divide-gray-200" onSubmit={handleSubmit}>
                <div className="py-8 text-base leading-6 space-y-4 text-gray-500 sm:text-lg sm:leading-7">
                  {globalError && (
                    <p className="text-red-600">{globalError}</p>
                  )}
                  <div className="flex flex-col">
                    <label className="leading-loose">Nom Projet</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Nom du Projet"
                      required
                    />
                    {errors.name && <p className="text-red-600">{errors.name}</p>}
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Manager Projet</label>
                    <input
                      name="email"
                      onChange={handleChange}
                      type="email"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      required
                    />
                    {errors.email && <p className="text-red-600">{errors.email}</p>}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Start</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          onChange={handleChange}
                          type="text"
                          placeholder="26/02/2020"
                          name="start_date"
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        />
                        <div className="absolute left-3 top-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      </div>
                      {errors.date && <p className="text-red-600">{errors.date}</p>}
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">End</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          onChange={handleChange}
                          type="text"
                          name="end_date"
                          placeholder="26/02/2020"
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        />
                        <div className="absolute left-3 top-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      </div>
                      {errors.date && <p className="text-red-600">{errors.date}</p>}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Description</label>
                    <textarea
                      onChange={handleChange}
                      type="text"
                      name="description"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full h-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                    />
                  </div>
                </div>
                <div className="pt-4 flex items-center space-x-4">
                  <button
                    type="button"
                    className="flex justify-center items-center w-full bg-gray-200 shadow shadow-gray-300 px-4 py-3 rounded-md focus:outline-none"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>{' '}
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-indigo-500 flex justify-center items-center w-full hover:bg-indigo-600 text-gray-50 px-4 py-3 rounded-md focus:outline-none"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
