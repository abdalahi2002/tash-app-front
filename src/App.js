import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import UpdateTasks from './Task/UpdateTask';
import Profile from './User/Profile';
import NavBar from './component/navbar';
import ProtectedProject from './ProtectedProjet';
import ProtectedTask from './ProtectedTask';
import Error403 from './Error403';
import Home from './component/Home';

const AppWrapper = () => {
  const location = useLocation();

  // Définir les routes où la NavBar ne doit pas apparaître
  const noNavBarRoutes = ["/login", "/signup"];

  return (
    <>
      {/* Afficher la NavBar seulement si la route actuelle n'est pas dans noNavBarRoutes */}
      {!noNavBarRoutes.includes(location.pathname) && <NavBar />}
      <div>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/projet" element={<PrivateRoute><ListeProjet /></PrivateRoute>} />
          <Route path="/projets/:id" element={<PrivateRoute><Projet /></PrivateRoute>} />
          <Route path="/createproject" element={<ProtectedProject><CreateProject/></ProtectedProject>}/>
          <Route path="/updateprojet/:id" element={<ProtectedProject> <Updateprojet/></ProtectedProject>}/>
          <Route path="/signup" element={<SingUp />} />
          <Route path="/createtache" element={<ProtectedTask><CreateTask/></ProtectedTask>} />
          <Route path="/tasks/" element={<PrivateRoute><ListeTask/></PrivateRoute>} />
          <Route path="/tasks/:id" element={<Task />} />
          <Route path="/updatetache/:id" element={<ProtectedTask><UpdateTasks/></ProtectedTask>}/>
          <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>} />
          <Route path="*" element={<Error404 />} />
          <Route path="/error403" element={<PrivateRoute><Error403 /></PrivateRoute>}/>
        </Routes>
      </div>
    </>
  );
}

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppWrapper />
      </AuthProvider>
    </Router>
  );
}

export default App;
