import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="bg-[#E5F4FF] pt-20 mt-20">
                <div className=" bg-[#d5ebfa] border border-[#b6d8ee] shadow rounded-2xl w-8/12 mx-auto p-10">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-0 mx-auto">
                        <div className="lg:w-6/12">
                            <h2 className='lg:text-4xl text-xl lg:text-start text-center font-bold'>Subscribe Our Newsletter For Latest Updates</h2>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-6/12">
                            <div className="">
                                <label className="input validator lg:w-90 w-70 h-13 rounded-full bg-transparent flex items-center">
                                    <svg className="h-[1.50em] opacity-50 text-black font-extrabold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                                    <input type="email" className='text-[1.50em]' placeholder="mail@site.com" required />
                                </label>
                                <div className="validator-hint hidden ">Enter valid email address</div>
                            </div>
                            <button className='btn bg-[#3195EA]  h-13 w-40 text-white hover:bg-black rounded-full duration-500'>Subscribe Now</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <footer className="footer footer-horizontal footer-center text-base-content rounded p-10 gap-4">
                        <aside>
                            <img className='w-50' src="https://bdcallingacademy.com/images/logo.png" alt="" />
                            <p className="font-bold">
                                BDCalling Academy is an Innovative IT and Freelancing Training Center
                            </p>
                        </aside>
                        <nav>
                            <div className="grid grid-flow-col gap-4">
                                <a>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current hover:fill-[#2292E9]">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </a>
                                <a>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current hover:fill-[#2292E9]">
                                        <path
                                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                    </svg>
                                </a>
                                <a>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current hover:fill-[#2292E9]">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                    </svg>
                                </a>
                            </div>
                        </nav>
                        <nav className="grid grid-flow-col gap-4">
                            <Link className='hover:text-[#025FAD] border-b-1 border-transparent hover:border-[#0d89ef] px-2 rounded-full' to={"/"}>Home</Link>
                            <Link className='hover:text-[#025FAD] border-b-1 border-transparent hover:border-[#0d89ef] px-2 rounded-full' to={"/aboutUs"}>About Us</Link>
                            <Link className='hover:text-[#025FAD] border-b-1 border-transparent hover:border-[#0d89ef] px-2 rounded-full' to={"/successStory"}>Sucess Story</Link>
                            <Link className='hover:text-[#025FAD] border-b-1 border-transparent hover:border-[#0d89ef] px-2 rounded-full' to={"/contact"}>Contact</Link>
                        </nav>
                        <aside>
                            <p>Copyright © {new Date().getFullYear()} - All right reserved by BDCalling Academy ltd</p>
                        </aside>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;