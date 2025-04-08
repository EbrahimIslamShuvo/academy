import React from 'react';
import { FaBolt, FaPhoneVolume } from 'react-icons/fa6';
import { FiUser } from 'react-icons/fi';
import { PiStudent } from 'react-icons/pi';

const AboutUsHome = () => {
    return (
        <div className='py-7'>
            <div className="w-10/12 lg:w-9/12 md:w-9/12 mx-auto flex flex-col lg:flex-row lg:gap-10 items-center justify-center">
                <div className="relative flex gap-5 md:w-9/12 mx-auto">
                    <div className="flex flex-col gap-3">
                        <div className="relative rounded-bl-[70px] rounded-tr-[70px] border p-0.5 border-gray-400">
                            <img className='rounded-bl-[70px] rounded-tr-[70px] ' src="/src/assets/ab-1.png" alt="" /></div>
                        <div className="relative">
                            <div className="flex justify-center items-center gap-1 bg-[#1696FD] text-white rounded-bl-[70px] rounded-tr-[70px] lg:p-5 p-4  px-10">
                                <div className=" bg-white p-2 rounded-full">
                                    <FaPhoneVolume className='text-2xl text-[#1696FD]' />
                                </div>
                                <div className="text-center">
                                    <p>Online Support</p>
                                    <p className='text-sm lg:text-md'>+880 1321231802</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-bl-[70px] rounded-tr-[70px] flex items-baseline-last">
                        <img className='rounded-tl-[70px] rounded-br-[70px]' src="/src/assets/ab-1.png" alt="" />
                    </div>
                </div>
                <div className="flex flex-col justify-start mt-10 lg:-mt-11">
                    <div className="flex items-center bg-white gap-1.5 justify-center border px-1 pr-2 py-1 rounded-2xl border-gray-300 w-fit">
                        <h1 className='bg-[#1631fd15] p-1 rounded-full'><FaBolt className='text-[#1696FD] ' /></h1>
                        <h1 className='font-semibold'>Get More About Us</h1>
                    </div>
                    <div className="mt-5">
                        <h1 className='font-bold text-[2.15em] md:text-[1.90em] lg:text-[3em] leading-12 lg:leading-15'>Over 10 Years in Distant learning for Skill Development</h1>
                        <p className='text-sm text-gray-400'>Compellingly procrastinate equity invested markets with efficient process improvements. actualize mission-critical partnerships with integrated portals. Authoritatively optimize low-risk high-yield metrics and plug-and-play potentialities.</p>
                    </div>
                    <div className="flex justify-between mt-5 md:w-10/12 lg:w-8/12">
                        <div className=" flex justify-center items-center gap-3">
                            <div className="bg-gray-100 p-2 rounded-full border border-gray-300">
                                <PiStudent className='text-6xl text-[#1696FD]' />
                            </div>
                            <div className="">
                                <h1 className='text-[#1696FD] font-bold text-4xl'>9.5k+</h1>
                                <p className='text-sm text-gray-400'>Total active students</p>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center gap-3">
                            <div className="bg-gray-100 p-2 rounded-full border border-gray-300">
                                <FiUser className='text-6xl text-[#1696FD]' />
                            </div>
                            <div className="">
                                <h1 className='text-[#1696FD] font-bold text-4xl'>6.7k+</h1>
                                <p className='text-sm text-gray-400'>Total active Employee</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className='btn bg-[#1696FD] text-white hover:bg-[#252D3F] duration-500 rounded-full text-xl px-8 py-6 font-medium'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsHome;