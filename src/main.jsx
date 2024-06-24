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
import Contact from './routes/Contact';
import Movie, { loader as movieLoader } from './routes/movie';
import Account from './routes/Account';
import Login from './routes/loginPage';
import Logout from './routes/components/logout';
import store from './app/store'
import { Provider } from 'react-redux'

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
