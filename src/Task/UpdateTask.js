import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTask, updateTask } from "../api/Tache.js"; 
import { fetchProjets } from "../api/Projet";
import AuthContext from "../Session.js";
export default function UpdateTasks() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    titre: "",
    description: "",
    start_date: "",
    end_date: "",
    email: "",
    projet_: "",
    status: "PENDING",
  });
  const [projets, setProjets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const { authTokens, checkToken } = useContext(AuthContext);
  useEffect(() => {
    const loadProjet = async () => {
      try {
        await checkToken();
        const data = await fetchTask(id, authTokens);
        setTask({
          ...data,
          email: data.my_user_data?.email || "",
          projet_: data.my_Projec_data?.id || "",
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const loadProjets = async () => {
      const cachedProjets = localStorage.getItem("projets");
      if (cachedProjets) {
        setProjets(JSON.parse(cachedProjets));
        setLoading(false);
      } else {
        try {
          await checkToken();
          const data = await fetchProjets(authTokens);
          setProjets(data);
          localStorage.setItem("projets", JSON.stringify(data));
        } catch (error) {
          console.error("Erreur lors de la récupération des projets :", error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadProjets();
    loadProjet();
  }, [id, authTokens, checkToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const validate = () => {
    const errors = {};
    const today = new Date();
    const startDate = task.start_date ? new Date(task.start_date) : null;
    const endDate = task.end_date ? new Date(task.end_date) : null;

    if (startDate && endDate && endDate <= startDate) {
      errors.date = "end_date must be greater than start_date.";
    } else if (!startDate && endDate && endDate <= today) {
      errors.date =
        "end_date must be greater than today if start_date is not provided.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const preparedData = {
      ...task,
      start_date: task.start_date || new Date().toISOString().split("T")[0],
      end_date: task.end_date
        ? new Date(task.end_date).toISOString().split("T")[0]
        : null,
    };

    try {
      await checkToken();
      await updateTask(id, preparedData, authTokens);
      navigate(`/tasks/${id}`);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {error ? (
        <p className="text-3xl text-red-600">Erreur: {error.message}</p>
      ) : loading ? (
        <p className="text-3xl text-gray-600">Loading...</p>
      ) : (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-gray-200 shadow shadow-gray-300 mx-8 md:mx-0 rounded-3xl sm:p-10">
              <div className="max-w-md mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="h-14 w-14 bg-indigo-500 rounded-full flex flex-shrink-0 justify-center items-center text-gray-500 text-2xl font-mono">
                    P
                  </div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-500">
                    <h2 className="leading-relaxed">Update Tache</h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed"></p>
                  </div>
                </div>
                <form
                  className="divide-y divide-gray-200"
                  onSubmit={handleSubmit}
                >
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-500 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label className="leading-loose">Nom Projet</label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="titre"
                        value={task.titre || ""}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Nom du Projet"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Manager Projet</label>
                      <input
                        name="email"
                        value={task.email || ""}
                        onChange={handleChange}
                        type="email"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Projet</label>
                      <select
                        id="projet"
                        name="projet_"
                        required
                        value={task.projet_}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option value=""> </option>
                        {projets.map((projet) => (
                          <option key={projet.id} value={projet.id}>
                            {projet.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col">
                        <label className="leading-loose">Start</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            onChange={handleChange}
                            type="text"
                            name="start_date"
                            value={task.start_date || ""}
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          />
                          <div className="absolute left-3 top-2">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">End</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            onChange={handleChange}
                            name="end_date"
                            type="text"
                            value={task.end_date || ""}
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          />
                          <div className="absolute left-3 top-2">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Status</label>
                      <select
                        id="status"
                        name="status"
                        required
                        value={task.status}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option value="PENDING">En attente</option>
                        <option value="IN_PROGRESS">En cours</option>
                        <option value="COMPLETED">Terminée</option>
                        <option value="ON_HOLD">En suspens</option>
                        <option value="CANCELLED">Annulée</option>
                      </select>
                    </div>
                  </div>
                  {errors.date && <p className="text-red-600">{errors.date}</p>}
                  <div className="pt-4 flex items-center space-x-4">
                    <button
                      className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
