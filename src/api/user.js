export const registerUser = async (formData) => {
  try {
      const response = await fetch("http://localhost:8083/users/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
          console.log('User registered successfully:', data);
          return { success: true, data }; // Retourne une réponse de succès
      } else {
          // Retourne l'erreur en cas d'échec
          return { success: false, error: data };
      }
  } catch (error) {
      console.error('An error occurred:', error);
      // Retourne une erreur générale en cas de problème réseau
      return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
};

  export const fetchUser = async (email, authToken) => {
    try {
      const response = await fetch(`http://localhost:8083/users/${email}`, {
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
      console.error("Erreur lors de la récupération de profil :", error);
      throw error; // Propagation de l'erreur pour être gérée dans le composant
    }
  };
  
  
  