import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import LoginSignup from "./components/Login_Signup/Login_Signup";
import PatientDashboard from "./Pages/PatientDashboard";
import { useStateContext } from "./contexts/ContextProvider";
import HomePage from "./Pages/HomePage/HomePage";
import AdminLogin from "./components/AdminSide/AdminLogin";
import ApprovePatient from "./components/AdminSide/ApprovePatient";
import CreateDoctor from "./components/AdminSide/CreateDoctor";
import "./App.css";

function App() {
  const { loggedIn } = useStateContext();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/approve" element={<ApprovePatient />} />
      <Route path="/admin/Create-doctor" element={<CreateDoctor />} />
      <Route
        path="/login"
        element={!loggedIn ? <LoginSignup /> : <Navigate to="/" replace />}
      />
      {/* Dashboard */}
      <Route
        path="/dashboard/*"
        element={loggedIn ? <PatientDashboard /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;
