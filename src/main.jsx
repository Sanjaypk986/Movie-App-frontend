import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/root";
import './index.css'
import ErrorPage from './error-page';
import Home , { loader as homeLoader } from './routes/Home';
import Movies from './routes/Movies';
import Contact from './routes/Contact';
import Movie, { loader as movieLoader } from './routes/movie';
import Account from './routes/Account';
import Login from './routes/loginPage';
import Logout from './routes/components/logout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader:rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader
      },
      {
        path: "/movies",
        element: <Movies />,
      },   
      {
        path: "/movies/:movieId",
        element: <Movie />,
        loader: movieLoader
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
