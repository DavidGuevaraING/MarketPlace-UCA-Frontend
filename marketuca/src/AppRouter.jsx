import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./modules/home/page/home";
import Dashboard from "./modules/dashboard/page/dashboard";
import FavoritesPage from "./modules/dashboard/page/FavoritesPage";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};