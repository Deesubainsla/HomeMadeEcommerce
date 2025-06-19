import React from 'react'
import { Link } from 'react-scroll'
import { useLocation, Link as routerlink } from 'react-router-dom'

function Navbar() {
    const { pathname } = useLocation();
    const isHome = pathname === '/';

    return <div>
        <div className="navbar bg-base-200 shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            isHome ?
                                (<>
                                    <li>
                                        <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="products" smooth={true} duration={500} className="cursor-pointer">Products</Link>
                                    </li>
                                    <li>
                                        <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
                                    </li>
                                </>) :
                                (
                                    <routerlink to='/'>Back to Home</routerlink>
                                )
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-xl">HomeMade</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        isHome ?
                            (<>
                                <li>
                                    <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
                                </li>
                                <li>
                                    <Link to="products" smooth={true} duration={500} className="cursor-pointer">Products</Link>
                                </li>
                                <li>
                                    <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
                                </li>
                            </>) :
                            (
                                <routerlink to='/'>Back to Home</routerlink>
                            )
                    }

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    </div>
}

export default Navbar