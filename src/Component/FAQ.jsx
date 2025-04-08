import React from 'react';
import { FaBolt } from 'react-icons/fa6';

const FAQ = () => {
    return (
        <div className='mt-15'>
            <div className="flex flex-col md:flex-col lg:flex-row gap-12 w-8/12 mx-auto">
                <div className="relative">
                    <div className="">
                        <img className='rounded-2xl' src="/src/assets/faq.png" alt="" />
                    </div>
                    <div className="absolute bottom-25 -left-15 shadow-xl bg-white rounded-xl p-5">
                        <p className='font-semibold'>Total Students</p>
                        <div className="avatar-group -space-x-8">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-12">
                                    <span>+99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-5 lg:w-7/12 ">
                    <div className="">
                        <div className="flex items-center bg-white gap-1.5 justify-center border px-1 pr-2 py-1 rounded-2xl border-gray-300 w-fit">
                            <h1 className='bg-[#1631fd15] p-1 rounded-full'><FaBolt className='text-[#1696FD] ' /></h1>
                            <h1 className='font-semibold'>Most Asked Question</h1>
                        </div>
                    </div>
                    <h1 className='lg:text-5xl md:text-4xl text-2xl font-bold'>Powerful Dashboard And High Performance Framework</h1>
                    <div className="">
                        <div className="collapse collapse-arrow bg-base-100">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">
                                <p className='flex gap-3'><span className='text-gray-400'>01</span>
                                    What courses do you offer?</p>
                            </div>
                            <div className="collapse-content text-sm pt-3 border-t border-gray-300"> We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.</div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">
                                <p className='flex gap-3'><span className='text-gray-400'>02</span>
                                    How Can Teachers Effectively Manage a Diverse Classroom?</p>
                            </div>
                            <div className="collapse-content text-sm pt-3 border-t border-gray-300"> We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.</div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">
                                <p className='flex gap-3'><span className='text-gray-400'>03</span>
                                    How Is Special Education Delivered in Inclusive Classrooms?</p>
                            </div>
                            <div className="collapse-content text-sm pt-3 border-t border-gray-300"> We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;