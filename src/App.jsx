import React, { useState } from "react";
import Signup from "./authentication/signup";
import Login from "./authentication/login";
import "./App.css";
import Dashboard from "./dashboard";
import ForgotPassword from "./authentication/forgot-password";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ResetPassword from "./authentication/reset-password";
import Navbar from "./Navbar";
import ProtectedRoute from "./authentication/ProtectedRoute";

const App = () => {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({});

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar logged={logged} setLogged={setLogged} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute isLogged={logged}>
                  <Dashboard user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={<Login setLogged={setLogged} setUser={setUser} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resetpassword/:token" element={<ResetPassword />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
