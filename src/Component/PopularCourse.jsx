import React, { useEffect, useState } from 'react';
import { FaBolt } from 'react-icons/fa6';
import PopularCourseCard from './PopularCourseCard';

const PopularCourse = () => {
    const [courses, setCourse] = useState([])
    const [favouriteCourses, setfavouriteCourses] = useState([]);
    useEffect(() => {
        fetch("Courses.json")
            .then(res => res.json())
            .then(data => {
                setCourse(data.courses);
                const sortedCourses = data.courses.sort((a, b) => b.selling_count - a.selling_count);
                const top4Courses = sortedCourses.slice(0, 4);
                setfavouriteCourses(top4Courses);
            })
    }, [])

    return (
        <div>
            <div className="flex flex-col items-center w-10/12 mx-auto mt-10">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center bg-white gap-1.5 justify-center border px-1 pr-2 py-1 rounded-2xl border-gray-300 w-fit">
                        <h1 className='bg-[#1631fd15] p-1 rounded-full'><FaBolt className='text-[#1696FD] ' /></h1>
                        <h1 className='font-semibold'>Popular courses</h1>
                    </div>
                    <div className="">
                        <h1 className='text-5xl font-bold'>Explore Most Popular Courses</h1>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-6">
                    {
                        favouriteCourses.map(favouriteCourse =>(
                            <PopularCourseCard popularCourse={favouriteCourse}></PopularCourseCard>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularCourse;