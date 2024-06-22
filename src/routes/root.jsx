import axios from "axios";
import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

export async function loader() {
    try {
        const verifyResponse = await axios.get('http://localhost:3000/auth/verify',{withCredentials:true});
        const isLoggedIn = verifyResponse.data.verified
      return { isLoggedIn};
    } catch (error) {
      console.error('Verification failed:', error);
      return ;
    }
  }
function Root() {
  const { isLoggedIn } = useLoaderData();
  return (
    <div>
      <header className=" bg-emerald-900 flex justify-between items-center p-8">
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
           {
            isLoggedIn ? <li>
            <Link to="./logout" className='text-white' >Log Out</Link>
        </li>
        :<li>
        <Link to="./login" className='text-white' >Log In</Link>
    </li>
           }
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        
      </footer>
    </div>
  );
}

export default Root;
