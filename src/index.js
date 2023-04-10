import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import OneSection from './component/OneSection';
import SecondSection from './component/SecondSection';
import ContactSection from './component/ContactSection';

const router = createBrowserRouter([
  {
    path: "/",
    element:<OneSection/>
  },
  {
    path:"/skills",
    element:<SecondSection/>
  },
  {
    path:"/contact",
    element:<ContactSection/>
  }
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

