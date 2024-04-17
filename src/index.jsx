import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

//import main pages.
import Blog from './components/Routes/Blog/Blog';
import PlayerPage, { playerLoader } from './components/Routes/Player/PlayerDisplay';
import Compendium from './components/Routes/Compendium/Compendium';
import SessionManager from './components/Routes/Session';
import ContactMe from './components/Routes/ContactMe';
import Stories from './components/Routes/Stories/Stories';
import Home from './components/Routes/Home';
import Error from './components/Routes/Error';
//blog routes and actions
import { blogLoader, action as addBlogAction } from './components/Routes/Blog/Blog';
import { action as blogEditAction } from './components/Routes/Blog/BlogPost/BlogAdd'
import { action as blogDeleteAction } from './components/Routes/Blog/BlogPost/BlogDelete';
import { action as blogAddAction } from './components/Routes/Blog/BlogPost/BlogAdd';
import BlogPostTest, {loader as postLoader} from './components/Routes/Blog/BlogPost/BlogPostTest';
import EditPost from './components/Routes/Blog/BlogPost/BlogEdit';
import DeletePost from './components/Routes/Blog/BlogPost/BlogDelete';
import AddPost from './components/Routes/Blog/BlogPost/BlogAdd';
//compendium routes and actions
import { compendiumLoader } from './components/Routes/Compendium/Compendium';
import { loader as cardLoader } from './components/Routes/Compendium/Card/Card';
import Card from './components/Routes/Compendium/Card/Card';
import {action as compendiumAddAction} from './components/Routes/Compendium/Compendium';
//player page routes and actions
import DisplayInventory from './components/Routes/Player/PlayerDisplayWindow/DisplayInventory';
import DisplayWindow from './components/Routes/Player/PlayerDisplayWindow/DisplayWindow';
import { loader as windowLoader } from './components/Routes/Player/PlayerDisplayWindow/DisplayWindow';
import { Navigate } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [   
    {
      path: "/",
      element: <Home />
    },
    { //for the blogs
      path: "/blog",
      element: <Blog />,
      loader: blogLoader,
      action: addBlogAction,
      children: [
        {//loads an individual blog for edit/delete
          path: ":blogid",
          element: <BlogPostTest />,
          loader: postLoader,
        },
        {
          path: ":blogid/edit",
          element: <EditPost />,
          loader: postLoader,
          action: blogEditAction,
        },
        {
          path: ":blogid/delete",
          element: <DeletePost />,
          loader: postLoader,
          action: blogDeleteAction,
        },
        {//for adding a new blog post
          path: "add",
          element: <AddPost />,
          action: blogAddAction,
        }

      ]
    },
    {//shows general player page
      path: "/players",
      element: <PlayerPage />,
      loader: playerLoader,
      children: [

        //loading individual player's stuff
        { index: true, element: <Navigate to="/players/player/1" replace />},
        {
          path: "player/:playerid",
          element: <DisplayWindow/>,
          loader: windowLoader,
        },
      ],
    },
    {
      path: "/compendium",
      element: <Compendium />,
      loader: compendiumLoader,
      action: compendiumAddAction,
      children: [
      ],
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