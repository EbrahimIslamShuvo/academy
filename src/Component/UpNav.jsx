import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { MdMailOutline } from 'react-icons/md';

const UpNav = () => {
    return (
        <div>
            <div className="bg-[#EFF7FF] hidden md:block">
                <div className="flex justify-between items-center w-10/12 mx-auto py-2">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1">
                            <FaPhone className='text-sm text-[#211B52]' />
                            <p className='text-sm'>+880 1321231802</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <MdMailOutline className='text-sm font-semibold text-[#211B52]' />
                            <p className='text-sm'>info@bdcallingacademy.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="font-semibold text-sm">
                            <label className="swap">
                                <input type="checkbox" />
                                <div className="swap-on">ENG</div>
                                <div className="swap-off">BAN</div>
                            </label>
                        </div>
                        <div className="">
                            <label className="flex cursor-pointer gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <path
                                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                </svg>
                                <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpNav;