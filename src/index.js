import React from 'react';
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//components
import Routes from './Components/Routes';
import ErrorPage from './Components/error-page';
import Blog from './Components/Blog';
import ConnectPage from './Components/ConnectPage';
import { rootLoader, blogLoader } from '../src/Functions/Data';
import NewBlogPage from './Components/NewBlogPage';
import NewPostPage from './Components/NewPostPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'blog/:id',
        element: <Blog />,
        loader: blogLoader,
      },
      {
        path: 'connect',
        element: <ConnectPage />
      },
      {
        path: 'createblog',
        element: <NewBlogPage />,
        loader: rootLoader
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);