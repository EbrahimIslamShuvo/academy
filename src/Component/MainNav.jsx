import React, { useEffect, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { LiaBookSolid } from 'react-icons/lia';
import { Link, Outlet } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

const MainNav = () => {
    const [categories, setCategory] = useState([])
    useEffect(() => {
        fetch("Category.json")
            .then(res => res.json())
            .then(data => setCategory(data)
            )
    }, [])
    return (
        <div>
            <div className="">
                <div className="bg-base-100 shadow-sm">
                    <div className="navbar w-10/12 mx-auto">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost rounded-full lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 gap-2 w-60 p-2 shadow h-screen bg-[url('/src/assets/side-bg.jpg')] bg-cover bg-center">
                                    <li>
                                        <Link className='hover:bg-[#2491EA] hover:text-white rounded-3xl px-5 duration-500 text-xl bg-white hover:shadow-2xl hover:shadow-black' to={"/"}>Home</Link>
                                    </li>
                                    <li>
                                        <details>
                                            <summary className='hover:bg-[#2491EA] hover:text-white rounded-3xl px-5 duration-500 text-xl bg-white hover:shadow-2xl hover:shadow-black' >Category</summary>
                                            <ul className="p-2">
                                            <li><a className='mb-1 bg-white hover:bg-[#2491ea] hover:text-white hover:font-semibold hover:shadow-2xl hover:shadow-black duration-800'>All</a></li>
                                                {
                                                    categories.map(category => (
                                                        <li><a className='mb-1 bg-white hover:bg-[#2491ea] hover:text-white hover:font-semibold hover:shadow-2xl hover:shadow-black duration-800'>{category.name}</a></li>
                                                    ))
                                                }
                                            </ul>
                                        </details>
                                    </li>
                                    <li><Link className='hover:bg-[#2491EA] hover:text-white rounded-3xl px-5 duration-500 text-xl bg-white hover:shadow-2xl hover:shadow-black' to={"/aboutUs"}>About Us</Link></li>
                                    <li><Link className='hover:bg-[#2491EA] hover:text-white rounded-3xl px-5 duration-500 text-xl bg-white hover:shadow-2xl hover:shadow-black' to={"/successStory"}>Success Story</Link></li>
                                    <li><Link className='hover:bg-[#2491EA] hover:text-white rounded-3xl px-5 duration-500 text-xl bg-white hover:shadow-2xl hover:shadow-black' to={"/contact"}>Contact</Link></li>
                                </ul>
                            </div>
                            <Link to={'/'}>
                                <img className='w-33' src="https://bdcallingacademy.com/images/logo.png" alt="" />
                            </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-lg font-semibold gap-3">
                                <li>
                                    <Link className='hover:bg-[#2491EA] hover:text-white rounded-3xl px-5 duration-500 text-xl bg-white hover:shadow-2xl hover:shadow-black' to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <details>
                                        <summary className='hover:bg-[#2491EA] hover:text-white rounded-3xl px-5 duration-500 text-xl bg-white hover:shadow-2xl hover:shadow-black' >Category</summary>
                                        <ul className="p-2 min-w-max relative z-50">
                                        <li><a className='mb-1 bg-white hover:bg-[#2491ea] hover:text-white hover:font-semibold hover:shadow-2xl hover:shadow-black duration-800'>All</a></li>
                                            {
                                                categories.map(category => (
                                                    <li><a className='mb-1 bg-white hover:bg-[#2491ea] hover:text-white hover:font-semibold hover:shadow-2xl hover:shadow-black duration-800'>{category.name}</a></li>
                                                ))
                                            }
                                        </ul>
                                    </details>
                                </li>
                                <li><Link className='hover:bg-[#2491EA] hover:text-white rounded-3xl px-5 duration-500 text-xl bg-white hover:shadow-2xl hover:shadow-black' to={"/aboutUs"}>About Us</Link></li>
                                <li><Link className='hover:bg-[#2491EA] hover:text-white rounded-3xl px-5 duration-500 text-xl bg-white hover:shadow-2xl hover:shadow-black' to={"/successStory"}>Success Story</Link></li>
                                <li><Link className='hover:bg-[#2491EA] hover:text-white rounded-3xl px-5 duration-500 text-xl bg-white hover:shadow-2xl hover:shadow-black' to={"/contact"}>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <div className="">
                                <ul className='menu menu-horizontal m-0 p-0 border-transparent'>
                                    <li>
                                        <details>
                                            <summary className='flex items-center gap-1 md:text-xl text-[15px] font-semibold hover:bg-[#2491ea] hover:text-white px-3 py-2 roounded-none hover:rounded-none border-transparent rounded-l-3xl hover:rounded-l-3xl border-r border-l-black' >
                                                <LiaBookSolid className='md:text-2xl text-xl' />
                                                <p>Courses</p>
                                            </summary>
                                            <ul className="p-2 min-w-max hover:bg-white">
                                                <li className='hover:bg-white bg-white'>
                                                    hi
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <div className="dropdown dropdown-hover">
                                <button className="" onClick={() => document.getElementById('signinIcon').showModal()}>
                                    <div tabIndex={0} role="button" className="flex items-center gap-1 md:text-xl font-semibold hover:bg-[#2491ea] hover:text-white px-3 py-2 rounded-r-3xl border-l">
                                        <FaRegUser />
                                        <p>Log In</p>
                                    </div>
                                </button>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm gap-1">
                                    <li>
                                        <button className="" onClick={() => document.getElementById('signinIcon').showModal()}>
                                            <a className='hover:bg-[#2491ea] hover:text-white hover:font-semibold hover:shadow-2xl hover:shadow-black duration-700'>Sign In</a>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="" onClick={() => document.getElementById('signupIcon').showModal()}>
                                            <a className='hover:bg-[#2491ea] hover:text-white hover:font-semibold hover:shadow-2xl hover:shadow-black duration-700'>Sign Up</a>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <dialog id="signinIcon" className="modal">
                                <div className="modal-box w-8/12">
                                    <SignIn></SignIn>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                            <dialog id="signupIcon" className="modal">
                                <div className="modal-box">
                                    <SignUp></SignUp>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNav;




