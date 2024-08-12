import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [refresh, SetRefresh] = useState(() =>
    localStorage.getItem("refresh")
      ? JSON.parse(localStorage.getItem("refresh"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8083/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
      //   credentials: "include",
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data.access);
      SetRefresh(data.refresh);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data.access));
      localStorage.setItem("refresh", JSON.stringify(data.refresh));
      navigate("/");
    } else {
      alert(data.detail);
    }
  };

  let updateToken = async () => {
    let response = await fetch("http://127.0.0.1:8083/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: refresh }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data.access);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data.access));
    } else {
      logout();
    }
  };

  let checkToken = async () => {
    if (authTokens) {
      const currentTime = Date.now() / 1000;
      console.log("timenow : ",currentTime,"\n token exp :",user.exp)
      if (user.exp-3 < currentTime) {
        await updateToken();
      }
    } else {
      logout();
    }
  };

  console.log(refresh);
  let logout = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("refresh"); // Supprimer également refresh lors de la déconnexion
    navigate("/login");
  };
  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logout: logout,
    checkToken: checkToken,
  };

  useEffect(() => {
    if (user) {
      const now = Math.floor(Date.now() / 1000);
      console.log("now : ", now, " \n expire : ", user.exp);
      if (loading) {
        if (refresh) {
          checkToken();
          setLoading(false);
        } else {
          logout();
        }
      }

      let interval = setInterval(() => {
        setLoading(true);
      },1000 * 60 * 1);
      return () => clearInterval(interval);
    }
  }, [user,refresh, checkToken,loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
