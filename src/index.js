import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Blog from './components/Main_Pages/Blog';
import PlayerPage from './components/Main_Pages/PlayerDisplay';
import Compendium from './components/Main_Pages/Compendium';
import SessionManager from './components/Main_Pages/Session';
import ContactMe from './components/Main_Pages/ContactMe';
import Stories from './components/Main_Pages/Stories';
import Home from './components/Main_Pages/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [   
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/blog",
      element: <Blog />
    },
    {
      path: "/players",
      element: <PlayerPage />
    },
    {
      path: "/compendium",
      element: <Compendium />
    },
    {
      path: "/stories",
      element: <Stories />
    },
    {
      path: "/session",
      element: <SessionManager />
    },
    {
      path: "/contactme",
      element: <ContactMe />
    }]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();