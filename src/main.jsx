import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root';
import Home from './Page/Home';
import AboutUs from './Page/AboutUs';
import Contact from './Page/Contact';
import SuccessStory from './Page/SuccessStory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs> ,
      },
      {
        path: "/contact",
        element: <Contact></Contact> ,
      },
      {
        path: "/successStory",
        element: <SuccessStory></SuccessStory> ,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
