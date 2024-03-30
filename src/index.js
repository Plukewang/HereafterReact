import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
//import main pages.
import Blog from './components/Main_Pages/Blog';
import PlayerPage from './components/Main_Pages/PlayerDisplay';
import Compendium from './components/Main_Pages/Compendium';
import SessionManager from './components/Main_Pages/Session';
import ContactMe from './components/Main_Pages/ContactMe';
import Stories from './components/Main_Pages/Stories';
import Home from './components/Main_Pages/Home';
//blog routes and actions
import { blogLoader, action as addBlogAction } from './components/Main_Pages/Blog';
import { action as blogEditAction } from './components/Page/BlogPost/BlogEdit';
import { action as blogDeleteAction } from './components/Page/BlogPost/BlogDelete';
import { action as blogAddAction } from './components/Page/BlogPost/BlogAdd';
import BlogPostTest, {loader as postLoader} from './components/Page/BlogPost/BlogPostTest';
import EditPost from './components/Page/BlogPost/BlogEdit';
import DeletePost from './components/Page/BlogPost/BlogDelete';
import AddPost from './components/Page/BlogPost/BlogAdd';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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