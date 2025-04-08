import React from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { GiBackwardTime } from 'react-icons/gi';
import { MdOutlineAssignment, MdOutlineQuiz } from 'react-icons/md';
import { SiLevelsdotfyi } from 'react-icons/si';

const PopularCourseCard = ({ popularCourse }) => {
    return (
        <div className='group'>
            <div className="group-hover:shadow-2xl group-hover:shadow-black duration-500">
                <div className="card bg-base-100 group-hover:bg-gray-100 w-96 shadow-sm">
                    <figure>
                        <img
                            className='transition duration-700 hover:ease-in-out'
                            src={popularCourse.thumbnail}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h4 className='bg-[#E6F6F4] group-hover:bg-gray-700 group-hover:text-white text-[#1796FD] w-fit px-2 py-1 rounded-full font-semibold'>{popularCourse.category}</h4>
                        <h2 className="card-title group-hover:text-[#1796FD] font-bold">{popularCourse.name}</h2>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-1 text-gray-500">
                                <FaRegCopy />
                                <p>{popularCourse.live_class_count} lessons</p>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500">
                                <SiLevelsdotfyi />
                                <p>{popularCourse.course_level}</p>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500">
                                <GiBackwardTime />
                                <p>{popularCourse.course_duration}</p>
                            </div>
                        </div>

                    </div>
                    <div className="border-y border-gray-200 w-full">
                        <div className="card-body py-3 w-full">
                            <div className="flex items-center gap-2 w-full">
                                <div className="">
                                    <img className='w-13 rounded-full' src={popularCourse.main_instructor.image} alt="" />
                                </div>
                                <div className="w-full">
                                    <div className="flex justify-between w-full">
                                        <h1 className='font-semibold'>{popularCourse.main_instructor.name}</h1>
                                        <p className='text-sm flex items-center gap-1 justify-end'>
                                            {
                                                popularCourse.main_instructor.rating === 5 ? (<div className="rating">
                                                    <div className="mask mask-star w-4 bg-[#1796FD] " aria-label="1 star"></div>
                                                    <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="2 star"></div>
                                                    <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="3 star"></div>
                                                    <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="4 star"></div>
                                                    <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="5 star" aria-current="true"></div>
                                                </div>) :
                                                    popularCourse.main_instructor.rating === 4 ? (<div className="rating">
                                                        <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="1 star"></div>
                                                        <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="2 star"></div>
                                                        <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="3 star"></div>
                                                        <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="4 star" aria-current="true"></div>
                                                        <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="5 star"></div>
                                                    </div>) :
                                                        popularCourse.main_instructor.rating === 3 ? (<div className="rating">
                                                            <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="1 star"></div>
                                                            <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="2 star"></div>
                                                            <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="3 star" aria-current="true"></div>
                                                            <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="4 star"></div>
                                                            <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="5 star"></div>
                                                        </div>) :
                                                            popularCourse.main_instructor.rating === 2 ? (<div className="rating">
                                                                <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="1 star"></div>
                                                                <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="2 star" aria-current="true"></div>
                                                                <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="3 star"></div>
                                                                <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="4 star"></div>
                                                                <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="5 star"></div>
                                                            </div>) :
                                                                popularCourse.main_instructor.rating === 1 ? (<div className="rating">
                                                                    <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="1 star" aria-current="true"></div>
                                                                    <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="2 star"></div>
                                                                    <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="3 star"></div>
                                                                    <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="4 star"></div>
                                                                    <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="5 star"></div>
                                                                </div>) :
                                                                    (<div className="rating">
                                                                        <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="1 star"></div>
                                                                        <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="2 star"></div>
                                                                        <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="3 star"></div>
                                                                        <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="4 star"></div>
                                                                        <div className="mask mask-star w-4 bg-[#1796FD]" aria-label="5 star"></div>
                                                                    </div>)
                                            } {popularCourse.main_instructor.rating} Rating
                                        </p>
                                    </div>
                                    <p className='text-sm text-[#1796FD]'>Instructor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body py-3">

                        <div className="card-actions justify-end items-center">
                            <p className="">
                                {
                                    popularCourse.discount_price != popularCourse.price ?
                                        (<p className='text-[#1796FD] font-semibold text-xl'><del className='font-normal text-gray-300 mr-1.5'>${popularCourse.price}</del>${popularCourse.discount_price}</p>)
                                        :
                                        (<p className='text-[#1796FD] font-semibold text-xl'>${popularCourse.price}</p>)
                                }
                            </p>
                            <button className="btn bg-[#1796FD] text-white hover:bg-gray-700">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCourseCard;