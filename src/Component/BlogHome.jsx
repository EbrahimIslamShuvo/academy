import React from 'react';
import { FaBolt } from 'react-icons/fa6';

const BlogHome = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto">
                <div className="mt-10 flex flex-col items-center">
                    <div className="">
                        <div className="flex items-center bg-white gap-1.5 justify-center border px-1 pr-2 py-1 rounded-2xl border-gray-300 w-fit">
                            <h1 className='bg-[#1631fd15] p-1 rounded-full'><FaBolt className='text-[#1696FD] ' /></h1>
                            <h1 className='font-semibold'>News & Blogs</h1>
                        </div>
                    </div>
                    <div className="">
                        <h1 className='text-5xl font-semibold my-5'>Latest News Updates</h1>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-20 justify-center">
                    <div className="card bg-base-100 image-full lg:w-4/12  w-10/12 shadow-sm">
                        <figure>
                            <img
                                src="https://html.rrdevs.net/edcare/assets/img/blog/post-1.jpg"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <p></p>

                            <div className="flex flex-col gap-2">
                                <p className='bg-[#1696FD] w-fit px-3 rounded-full font-semibold py-0..5'>Passion</p>
                                <a href='#' className='text-2xl font-semibold'>Repurpose mission critical action life items rather total linkage suds</a>

                            </div>
                            <div className="card-actions justify-between items-center">
                                <p className='text-lg'>August 25,2025</p>
                                <button className="btn bg-[#1696FD] border border-[#1696FD] text-white hover:text-[#1696FD] hover:bg-white">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 image-full lg:w-4/12  w-10/12 shadow-sm">
                        <figure>
                            <img
                                src="https://html.rrdevs.net/edcare/assets/img/blog/post-2.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <p></p>

                            <div className="flex flex-col gap-2">
                                <p className='bg-[#1696FD] w-fit px-3 rounded-full font-semibold py-0..5'>Learning</p>
                                <a href='#' className='text-2xl font-semibold'>Strategies for Managing Stress and Preventing Burnout in Education</a>

                            </div>
                            <div className="card-actions justify-between items-center">
                                <p className='text-lg'>Novembar 25,2025</p>
                                <button className="btn bg-[#1696FD] border border-[#1696FD] text-white hover:text-[#1696FD] hover:bg-white">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHome;