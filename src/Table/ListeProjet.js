import React, { useState, useEffect } from "react";
import NavBar from "../component/navbar";
import { fetchProjets } from "../api/Projet";

export default function ListeProjet() {
  const [projets, setProjets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjets = async () => {
      try {
        const data = await fetchProjets();
        setProjets(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadProjets();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erreur: {error.message}</p>;

  return (
    <div>
      <NavBar />
      <div className="min-w-screen min-h-screen  flex flex-col items-center justify-center px-5 py-5 space-y-4">
        <div className="flex flex-row justify-between  items-center w-full max-w-3xl">
          <h4 className="text-gray-700 text-xl font-semibold">
            Projet Manager
          </h4>
          <a
            href="/createproject"
            className="inline-flex items-center justify-center gap-1 py-2 px-3 font-medium text-sm text-center text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            Projet
          </a>
        </div>
        <ul className="min-w-screen min-h-screen flex flex-col items-center justify-center px-5 py-5 space-y-4">
        {projets.map((projet) => (
            <li key={projet.id} className="w-full md:w-9/12 lg:w-6/12 xl:w-7/12">
              <div className="bg-gray-200 text-gray-700 rounded shadow-xl py-5 px-5">
                <div className="flex flex-wrap -mx-3 items-center">
                  <div className="w-1/4 px-3 text-center hidden md:block">
                    <div className="p-5 xl:px-8 md:py-5">
                      <div className="h-14 w-14 bg-indigo-500 rounded-full flex flex-shrink-0 justify-center items-center text-gray-200 text-2xl font-mono">
                        P
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-2/4 px-3 text-left">
                    <div className="p-5 xl:px-8 md:py-5">
                      <h3 className="text-2xl">{projet.name}</h3>
                      <h5 className="text-xl mb-3">{projet.description}</h5>
                      <p className="text-sm text-gray-500">
                        {projet.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
                    <div className="p-5 xl:px-8 md:py-5">
                      <a
                        className="block w-full py-2 px-4 rounded text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none transition duration-150 ease-in-out mb-3"
                        href={`/projets/${projet.id}`}
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
