export const createproject = async (formData) => {
    try {
        let response = await fetch("http://localhost:8083/app/projet/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
    
        let data = await response.json();
    
        if (response.ok) {
            
          alert('projet created  successfully  !');

          // Vous pouvez ajouter des redirections ou des messages de succès ici
        } else {
          console.error('projet created  failed:', data);
          alert("projet created  failed")
          // Vous pouvez afficher des messages d'erreur ici
        }
      } catch (error) {
        console.error('An error occurred:', error);
        // Vous pouvez gérer les erreurs réseau ici
      }
}


export const fetchProjets = async () => {
    try {
      const response = await fetch('http://localhost:8083/app/projet/'); // Assurez-vous que ce chemin est correct
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