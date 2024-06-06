import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
        <header className=' bg-emerald-900 flex justify-between items-center p-8'>
            <Link to="#" className='text-white text-xl font-semibold' >MovieMania</Link>
            <nav>
                <ul className='flex items-center gap-4'>
                    <li>
                        <Link to="/" className='text-white' >Home</Link>
                    </li>
                    <li>
                        <Link to="./Movies" className='text-white' >Movies</Link>
                    </li>
                    <li>
                        <Link to="./Contact" className='text-white' >Contact</Link>
                    </li>
                    <li>
                        <Link to="./account" className='text-white' >SignUp</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <Outlet />
        <footer>

        </footer>
    </div>
  )
}

export default Root