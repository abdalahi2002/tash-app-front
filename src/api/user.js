export const registerUser = async (formData) => {
    try {
      let response = await fetch("http://localhost:8083/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      let data = await response.json();
  
      if (response.ok) {
        console.log('User registered successfully:', data);
        // Vous pouvez ajouter des redirections ou des messages de succès ici
      } else {
        console.error('Registration failed:', data);
        // Vous pouvez afficher des messages d'erreur ici
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Vous pouvez gérer les erreurs réseau ici
    }
  };
  