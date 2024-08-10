import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { deleteProjet, fetchProjet } from "../api/Projet";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../component/navbar";

export default function Projet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projet, setProjet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjet = async () => {
      try {
        const data = await fetchProjet(id);
        setProjet(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadProjet();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProjet(id);

        navigate("/projet"); // Redirection après suppression
      } catch (error) {
        setError(error);
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  

  return (
    <div className="">
      <NavBar />
      <div className="flex items-center justify-center min-h-screen">
    {error ? (
      <p className="text-3xl text-red-600">Erreur: {error.message}</p>
    ) : !projet ? (
      <p className="text-3xl text-gray-600">Aucun projet trouvé.</p>
    ) : loading ? (
      <p className="text-3xl text-gray-600">Loading...</p>
    ) : (
      <div>
        <ul className="min-w-screen bg-gray-200 min-h-screen flex flex-col items-center justify-center px-5 py-3 space-y-4">
        <li className="w-full lg:w-10/12 xl:w-3/4">
          <div className="bg-gray-200 text-gray-500 rounded shadow-xl py-5 px-5">
            <div className="flex flex-wrap -mx-3 items-center">
              <div className="w-1/4 px-3 text-center hidden md:block">
                <div className="p-5 xl:px-8 md:py-5">
                  <div className="h-14 w-14 bg-indigo-500 rounded-full flex flex-shrink-0 justify-center items-center text-gray-700 text-2xl font-mono">
                    P
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-2/4 px-3 text-left">
                <div className="p-5 xl:px-8 md:py-5">
                  <h3 className="text-2xl text-gray-800">{projet.name}</h3>
                  <h5 className="text-xl mb-3 text-gray-600">
                    {projet.description}
                  </h5>
                  <div className="flex flex-row space-x-4">
                    <p className="text-sm">{projet.start_date}</p>
                    <p className="text-sm ">{projet.end_date}</p>
                  </div>
                  <h5 className="text-xl mb-3 mt-3 text-gray-800">
                    Le chef de Projet :
                  </h5>
                  <div className="flex flex-row space-x-6">
                    <p className="text-sm text-gray-600">
                      {projet.my_user_data.nom}
                    </p>
                    <p className="text-sm">{projet.my_user_data.email}</p>
                  </div>
                  <h5 className="text-xl mb-3 mt-3 text-gray-800">Tâches :</h5>
                  <div>
                    {projet.tasks.map((tache) => (
                      <div key={tache.id} className="mb-4">
                        <h6 className="text-lg font-semibold">{tache.titre}</h6>
                        <p className="text-sm">{tache.description}</p>
                        <p className="text-sm">Début: {new Date(tache.start_date).toLocaleDateString()}</p>
                        <p className="text-sm">Fin: {tache.end_date ? new Date(tache.end_date).toLocaleDateString() : 'Non définie'}</p>
                        <p className="text-sm">Status: {tache.status}</p>
                        <p className="text-sm">Assigné à: {tache.my_user_data.nom} ({tache.my_user_data.email})</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
                <div className="p-5 xl:px-8 md:py-5">
                  <Link
                    className="block w-full py-2 px-4 rounded text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none transition duration-150 ease-in-out mb-3"
                    to={`/updateprojet/${projet.id}`}
                  >
                    Update
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="w-full py-2 px-4 rounded text-white bg-indigo-900 hover:bg-gray-900 focus:outline-none transition duration-150 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      </div>
    )}
  </div>
      
    </div>
  );
}
