import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/navbar';
import Login from './Table/login';
import SingUp from './Table/singup';
import { AuthProvider } from './Session';
import PrivateRoute from './PrivateRoute';
import CreateProject from './Projet/createproject';
import ListeProjet from './Projet/ListeProjet';
import Projet from './Projet/projet';
import Updateprojet from './Projet/updateprojet';
import Error404 from './Error404';
import CreateTask from './Task/createtache';
import ListeTask from './Task/ListeTask';
import Task from './Task/Task';
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
            <Route path="/projets/:id" element={<Projet />} />
            <Route path="/createproject" element={<CreateProject/>}/>
            <Route path="/updateprojet/:id" element={<Updateprojet/>}/>
            <Route path="/signup" element={<SingUp />} />
            <Route path="/createtache" element={<CreateTask/>} />
            <Route path="/tasks/" element={<ListeTask/>} />
            <Route path="/tasks/:id" element={<Task />} />
            <Route path="*" element={<Error404 />} />
            
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
