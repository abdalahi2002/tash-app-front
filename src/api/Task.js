export const createtaske = async (formData) => {
    console.log("ynhbv bvrctg");
    try {
        let response = await fetch("http://localhost:8083/app/tashe/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        
        let data = await response.json();
        console.log("gbrthb 5ynhvb",data);
        if (response.ok) {
            
          alert('Task created  successfully  !');

          // Vous pouvez ajouter des redirections ou des messages de succès ici
        } else {
          console.log('Task created  failed:', data);
          alert("Task created  failed")
          // Vous pouvez afficher des messages d'erreur ici
        }
      } catch (error) {
        console.error('An error occurred:', error);
        // Vous pouvez gérer les erreurs réseau ici
      }
}

export const fetchTasks = async () => {
  try {
    const response = await fetch('http://localhost:8083/app/tashe/'); // Assurez-vous que ce chemin est correct
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
    throw error; // Propagate the error to be handled in the component
  }
};

export const fetchTask = async (id) => {
  try {
    const response = await fetch(`http://localhost:8083/app/tashe/${id}`); // Assurez-vous que ce chemin est correct
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
    throw error; // Propagate the error to be handled in the component
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`http://localhost:8083/app/tashe/${id}`, {
      method: 'DELETE', // Spécifie que la méthode HTTP est DELETE
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    alert("la Tache est supprimer avec succes");
    return await response.json(); // Retourne les données de réponse, si nécessaire
  } catch (error) {
    console.error("Erreur lors de la suppression du tache :", error);
    throw error; // Propagation de l'erreur pour être gérée dans le composant
  }
};