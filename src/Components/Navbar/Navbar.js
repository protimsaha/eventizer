import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ open, setOpen }) => {
    return (
        <nav className=''>
            <ul className={` absolute  text-xl min-w-full  ${open && 'h-[100vh]'}  bg-white duration-500 ease-in ${open ? 'top-0' : 'top-[-150px]'}`}>
                <span className=' flex justify-end'>
                    {
                        open &&
                        <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 m-2 text-violet-600">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>

                    }
                </span>
                <div className={`flex flex-col items-center ${open && 'h-[100vh]'}  bg-white text-violet-600`}>
                    <Link to='/'>Home</Link>
                    <Link>About us</Link>
                    <Link>Contact</Link>
                    <Link>Login</Link>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;