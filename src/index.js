import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Main';
import About from './About';
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
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFoundPage />
  },  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



reportWebVitals();
