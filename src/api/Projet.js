export const createproject = async (formData, authToken) => {
  try {
    let response = await fetch("http://localhost:8083/app/projet/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}` // Ajout du token d'authentification
      },
      body: JSON.stringify(formData),
    });

    let data = await response.json();

    if (response.ok) {
      alert('Projet created successfully!');
    } else {
      console.error('Projet creation failed:', data);
      alert("Projet creation failed");
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

export const fetchProjets = async (authToken) => {
  try {
    const response = await fetch('http://localhost:8083/app/projet/', {
      headers: {
        "Authorization": `Bearer ${authToken}` // Ajout du token d'authentification
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

export const fetchProjet = async (id, authToken) => {
  try {
    const response = await fetch(`http://localhost:8083/app/projet/${id}`, {
      headers: {
        "Authorization": `Bearer ${authToken}` // Ajout du token d'authentification
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération du projet :", error);
    throw error;
  }
};

export const updateProjet = async (id, updatedProjet, authToken) => {
  try {
    const response = await fetch(`http://localhost:8083/app/projet/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${authToken}` // Ajout du token d'authentification
      },
      body: JSON.stringify(updatedProjet),
    });
    let data = await response.json();
    if (!response.ok) {
      console.log("HTTP error! Status:", data);
    }
    alert("Le projet a été mis à jour avec succès");
    return data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du projet :", error);
    throw error;
  }
};

export const deleteProjet = async (id, authToken) => {
  try {
    const response = await fetch(`http://localhost:8083/app/projet/${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${authToken}` // Ajout du token d'authentification
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    alert("Le projet a été supprimé avec succès");
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la suppression du projet :", error);
    throw error;
  }
};
