import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Main';
import NotFoundPage from './NotFoundPage';
import Reservations from './Reservations';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFoundPage />
  },  
  {
    path: "/reservations",
    element: <Reservations />,    
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
