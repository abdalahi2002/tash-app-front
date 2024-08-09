import {  Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from './Session'

const  PrivateRoute = ({children}) => {
    let {user} = useContext(AuthContext);
    //const navigate = useNavigate();
    if (!user) {
        return <Navigate to="/login"/> // Redirection en cours, donc pas besoin de rendre les enfants
    }
    return children;
}

export default PrivateRoute;

