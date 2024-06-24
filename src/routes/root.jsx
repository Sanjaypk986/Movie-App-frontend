import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { changeLogginStatus } from "../features/login/loginSlice";

function Root() {
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/verify", {
          withCredentials: true,
        });
        const isLoggedIn = response.data.verified;
        dispatch(changeLogginStatus(isLoggedIn));  // Use the actual verification status
      } catch (error) {
        dispatch(changeLogginStatus(false));
      }
    };

    verifyUser();
  }, []); 

  return (
    <div>
      <header className="bg-emerald-900 flex justify-between items-center p-8">
        <Link to="#" className="text-white text-xl font-semibold">
          MovieMania
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="./Movies" className="text-white">
                Movies
              </Link>
            </li>
            <li>
              <Link to="./Contact" className="text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="./account" className="text-white">
                SignUp
              </Link>
            </li>
            {loggedIn ? (
              <li>
                <Link to="./logout" className="text-white">
                  Log Out
                </Link>
              </li>
            ) : (
              <li>
                <Link to="./login" className="text-white">
                  Log In
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default Root;
