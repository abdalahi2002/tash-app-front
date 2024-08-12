import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./Session";

const ProtectedTask = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Vous pouvez rediriger vers une page de chargement ou attendre que l'utilisateur soit chargé
    return <Navigate to="/login" />;
  }

  // if (!user.is_staff || !user.chef) {
  //   return <Navigate to="/error403" />;
  // }

  return children;
};

export default ProtectedTask;
