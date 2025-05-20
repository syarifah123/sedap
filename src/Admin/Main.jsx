import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

import React, { StrictMode } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

console.log("Aplikasi sedang dijalankan...");

createRoot(document.getElementById("root")).render(
  <div id="app-container" className="bg-gray-100 min-h-screen flex">
    <div id="layout-wrapper" className="flex flex-row flex-1">
      <Sidebar />
      <div id="main-content" className="flex-1 p-4 bg-[#9EC6F3]">
        <Header />
        <Dashboard />
      </div>
    </div>
  </div>
);
