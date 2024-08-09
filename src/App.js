import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/navbar';
import Login from './Table/login';
import SingUp from './Table/singup';
import { AuthProvider } from './Session';
import PrivateRoute from './PrivateRoute';
import CreateProject from './Table/createproject';
import ListeProjet from './Table/ListeProjet';
function App() {
  return (
    <Router>
      <AuthProvider>
        {/* <NavBar2/> */}
        <div>
          <div></div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/projet" element={<ListeProjet />} />
            <Route path="/createproject" element={<CreateProject/>}/>
            <Route path="/signup" element={<SingUp />} />
            
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
