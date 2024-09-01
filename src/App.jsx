import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Login from './components/login';
import Teste from './components/teste';
import ProtectedRoute from './components/ProtectRoutes';

export const LoginContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
      <LoginContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route
              path='/teste'
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Teste />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
    </LoginContext.Provider>
  )
}

export default App
