import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

//import main pages.
import Blog from './components/Routes/Blog/Blog';
import PlayerPage from './components/Routes/Player/PlayerDisplay';
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
    {
      path: "/blog",
      element: <Blog />,
      loader: blogLoader,
      action: addBlogAction,
      children: [
        {
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
        {
          path: "add",
          element: <AddPost />,
          action: blogAddAction,
        }

      ]
    },
    {
      path: "/players",
      element: <PlayerPage />
    },
    {
      path: "/compendium",
      element: <Compendium />,
      loader: compendiumLoader,
      children: [
        {
          path: ":cardId",
          element: <Card />,
          loader: cardLoader,
        }
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