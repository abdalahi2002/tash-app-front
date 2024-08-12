
export const createtaske = async (formData,authTokens) => { // Utilisez le contexte d'auth

  try {// Vérifie et rafraîchit le token si nécessaire
    let response = await fetch("http://localhost:8083/app/tashe/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authTokens}` // Utilisation du token
      },
      body: JSON.stringify(formData),
    });

    let data = await response.json();
    if (response.ok) {
      alert("Task created successfully!");
    } else {
      console.log("Task creation failed:", data);
      alert("Task creation failed");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

// Récupération des tâches
export const fetchTasks = async (authTokens) => { // Utilisez le contexte d'auth

  try {// Vérifie et rafraîchit le token si nécessaire
    const response = await fetch("http://localhost:8083/app/tashe/", {
      headers: {
        "Authorization": `Bearer ${authTokens}` // Utilisation du token
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
    throw error;
  }
};

// Récupération d'une tâche spécifique
export const fetchTask = async (id,authTokens) => { // Utilisez le contexte d'auth

  try { // Vérifie et rafraîchit le token si nécessaire
    const response = await fetch(`http://localhost:8083/app/tashe/${id}`, {
      headers: {
        "Authorization": `Bearer ${authTokens}` // Utilisation du token
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération de la tâche :", error);
    throw error;
  }
};

// Suppression d'une tâche
export const deleteTask = async (id,authTokens) => {// Utilisez le contexte d'auth

  try { // Vérifie et rafraîchit le token si nécessaire
    const response = await fetch(`http://localhost:8083/app/tashe/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${authTokens}` // Utilisation du token
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    alert("La tâche est supprimée avec succès");
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la suppression de la tâche :", error);
    throw error;
  }
};

// Mise à jour d'une tâche
export const updateTask = async (id, updatedTask,authTokens) => {

  try {// Vérifie et rafraîchit le token si nécessaire
    const response = await fetch(`http://localhost:8083/app/tashe/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authTokens}` // Utilisation du token
      },
      body: JSON.stringify(updatedTask),
    });
    let data = await response.json();
    if (!response.ok) {
      console.log("HTTP error! Status: ", data);
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      alert("La tâche est mise à jour avec succès");
      return data;
    }
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la tâche :", error);
    throw error;
  }
};
