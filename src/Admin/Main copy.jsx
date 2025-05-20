import { createRoot } from "react-dom/client";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { StrictMode } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Produk from "./pages/Produk";
import Artikel from "./pages/Artikel";
import Karyawan from "./pages/Karyawan";
import JobApplicationPage from "./pages/JobApplicationPage";
import Layout from "./pages/Layout";
import React, { Suspense } from "react";
import Loading from "./components/Loading";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
    <Router>
      <Navbar />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" />} /> {/* Default Redirect */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/karyawan" element={<Karyawan />} />
            <Route path="/job-application" element={<JobApplicationPage />} />
          </Route>
        </Routes>
    </Router>
     </Suspense>
  );
};

createRoot(document.getElementById("root")).render(<App />);
