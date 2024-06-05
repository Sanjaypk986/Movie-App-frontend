import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import './index.css'
import ErrorPage from './error-page';
import Home , { loader as homeLoader } from './routes/Home';
import Movies from './routes/Movies';
import About from './routes/About';
import Contact from './routes/Contact';
import Movie, { loader as movieLoader } from './routes/movie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
