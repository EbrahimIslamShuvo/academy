import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaBolt, FaFacebook, FaTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const InstructorHome = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-5 w-10/12 mx-auto bg-[#DAEDFF] rounded-xl mt-10 py-30">
                <div className="">
                    <div className="flex items-center bg-white gap-1.5 justify-center border px-1 pr-2 py-1 rounded-2xl border-gray-300 w-fit">
                        <h1 className='bg-[#1631fd15] p-1 rounded-full'><FaBolt className='text-[#1696FD] ' /></h1>
                        <h1 className='font-semibold'>Our Instructor</h1>
                    </div>
                </div>
                <div className="">
                    <h1 className='text-5xl font-semibold text-[#209bff] md:text-start text-center'>Our World's Class Instructor</h1>
                </div>
                <div className=" flex flex-col lg:grid-cols-4 md:grid md:grid-cols-2 gap-15 mt-5">
                    <div className="group w-60 bg-white flex flex-col items-center rounded-t-xl">
                        <div className="relative group">
                            <img
                                className="rounded-t-xl"
                                src="https://html.rrdevs.net/edcare/assets/img/team/team-1.png"
                                alt=""
                            />
                            <div className="bg-black absolute inset-0 opacity-0 group-hover:opacity-70 top-0 rounded-t-xl flex items-center justify-center gap-2">
                                <div className="text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300 delay-75 bg-white p-2 rounded-full hover:bg-[#209bff]">
                                    <FaFacebookF className='text-2xl text-[#209bff] hover:text-white hover:shadow-2xl hover:shadow-white duration-500 ' />
                                </div>
                                <div className="text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-400 delay-80 bg-white p-2 rounded-full hover:bg-[#209bff]">
                                    <FaTwitter className='text-2xl text-[#209bff] hover:text-white hover:shadow-2xl hover:shadow-white duration-500 ' />
                                </div>
                                <div className="text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-85 bg-white p-2 rounded-full hover:bg-[#209bff]">
                                    <RiInstagramFill className='text-2xl text-[#209bff] hover:text-white hover:shadow-2xl hover:shadow-white duration-500 ' />
                                </div>
                            </div>
                        </div>
                        <div className="py-3 text-center">
                            <h1 className="text-xl font-semibold">Zaramane Mass Likan</h1>
                            <p className="text-sm text-[#209bff]">Web Development Instructor</p>
                        </div>
                    </div>

                    <div className="group w-60 bg-white flex flex-col items-center rounded-t-xl">
                        <div className="relative group">
                            <img
                                className="rounded-t-xl"
                                src="https://html.rrdevs.net/edcare/assets/img/team/team-2.png"
                                alt=""
                            />
                            <div className="bg-black absolute inset-0 opacity-0 group-hover:opacity-70 top-0 rounded-t-xl flex items-center justify-center gap-2">
                                <div className="text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300 delay-75 bg-white p-2 rounded-full hover:bg-[#209bff]">
                                    <FaFacebookF className='text-2xl text-[#209bff] hover:text-white hover:shadow-2xl hover:shadow-white duration-500 ' />
                                </div>
                                <div className="text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-400 delay-80 bg-white p-2 rounded-full hover:bg-[#209bff]">
                                    <FaTwitter className='text-2xl text-[#209bff] hover:text-white hover:shadow-2xl hover:shadow-white duration-500 ' />
                                </div>
                                <div className="text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-85 bg-white p-2 rounded-full hover:bg-[#209bff]">
                                    <RiInstagramFill className='text-2xl text-[#209bff] hover:text-white hover:shadow-2xl hover:shadow-white duration-500 ' />
                                </div>
                            </div>
                        </div>
                        <div className="py-3 text-center">
                            <h1 className="text-xl font-semibold">Amelia Grace Lily</h1>
                            <p className="text-sm text-[#209bff]">Web Development Instructor</p>
                        </div>
                    </div>
                    <div className="group w-60 bg-white flex flex-col items-center rounded-t-xl ">
                        <div className="relative group">
                            <img
                                className="rounded-t-xl"
                                src="https://html.rrdevs.net/edcare/assets/img/team/team-3.png"
                                alt=""
                            />
                            <div className="bg-black absolute inset-0 opacity-0 group-hover:opacity-70 top-0 rounded-t-xl flex items-center justify-center gap-2">
                                <div className="text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300 delay-75 bg-white p-2 rounded-full hover:bg-[#209bff]">
                                    <FaFacebookF className='text-2xl text-[#209bff] hover:text-white hover:shadow-2xl hover:shadow-white duration-500 ' />
                                </div>
                                <div className="text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-400 delay-80 bg-white p-2 rounded-full hover:bg-[#209bff]">
                                    <FaTwitter className='text-2xl text-[#209bff] hover:text-white hover:shadow-2xl hover:shadow-white duration-500 ' />
                                </div>
                                <div className="text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-85 bg-white p-2 rounded-full hover:bg-[#209bff]">
                                    <RiInstagramFill className='text-2xl text-[#209bff] hover:text-white hover:shadow-2xl hover:shadow-white duration-500 ' />
                                </div>
                            </div>
                        </div>
                        <div className="py-3 text-center">
                            <h1 className="text-xl font-semibold">Mason Logan Dee</h1>
                            <p className="text-sm text-[#209bff]">Web Development Instructor</p>
                        </div>
                    </div>
                    <div className="group w-60 bg-white flex flex-col items-center rounded-t-xl ">
                        <div className="relative group">
                            <img
                                className="rounded-t-xl"
                                src="https://html.rrdevs.net/edcare/assets/img/team/team-4.png"
                                alt=""
                            />
                            <div className="bg-black absolute inset-0 opacity-0 group-hover:opacity-70 top-0 rounded-t-xl flex items-center justify-center gap-2">
                                <div className="text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300 delay-75 bg-white p-2 rounded-full hover:bg-[#209bff]">
                                    <FaFacebookF className='text-2xl text-[#209bff] hover:text-white hover:shadow-2xl hover:shadow-white duration-500 ' />
                                </div>
                                <div className="text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-400 delay-80 bg-white p-2 rounded-full hover:bg-[#209bff]">
                                    <FaTwitter className='text-2xl text-[#209bff] hover:text-white hover:shadow-2xl hover:shadow-white duration-500 ' />
                                </div>
                                <div className="text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-85 bg-white p-2 rounded-full hover:bg-[#209bff]">
                                    <RiInstagramFill className='text-2xl text-[#209bff] hover:text-white hover:shadow-2xl hover:shadow-white duration-500 ' />
                                </div>
                            </div>
                        </div>
                        <div className="py-3 text-center">
                            <h1 className="text-xl font-semibold">Isabella Charlotte</h1>
                            <p className="text-sm text-[#209bff]">Web Development Instructor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorHome;