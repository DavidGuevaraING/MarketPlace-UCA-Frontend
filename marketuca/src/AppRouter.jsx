import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./modules/home/page/home";
import Dashboard from "./modules/dashboard/page/dashboard";
import FavoritesPage from "./modules/dashboard/page/FavoritesPage";
import Login from "./modules/login/page/login.jsx";
import Register from "./modules/register/page/register.jsx";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />} />
    </Routes>
  );
};