import React from 'react';
import { Route, Routes } from "react-router-dom";
import NoMatchPage from '../pages/NoMatchPage';
import LandingPage from '../pages/LandingPage';
import HomePage from '../pages/HomePage';
import AutoTestPage from '../pages/AutoTestPage';

const Router = () => (
  <Routes>
    <Route 
        exact path="/" 
        element={
            <LandingPage />
        } 
    />
    <Route 
        path="/home" 
        element={
            <HomePage />
        } 
    />
    <Route 
        path="/autotest" 
        element={
            <AutoTestPage />
        } 
    />
    <Route 
        path="*" 
        element={
            <NoMatchPage />
        } 
    />
  </Routes>
);

export default Router;