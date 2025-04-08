import React, { useEffect, useState } from 'react';
import { FaBolt } from 'react-icons/fa6';
import PopularCourseCard from './PopularCourseCard';
import { IoMdDoneAll } from 'react-icons/io';

const AllCourses = () => {
    const [courses, setCourse] = useState([])
    const [filterCAtegory, setFilterCategory] = useState(null)
    const [filterCAtegoryy, setFilterCategoryy] = useState(null)

    useEffect(() => {
        fetch("Courses.json")
            .then(res => res.json())
            .then(data => {
                setCourse(data.courses);
            })
    }, [])

    const [categories, setCategory] = useState([])
    useEffect(() => {
        fetch("Category.json")
            .then(res => res.json())
            .then(data => setCategory(data)
            )
    }, [])

    const filterCategory = (filterCategory) => {
        setFilterCategory(filterCategory)
    }

    const filterCategoryy = (filterCategoryy) => {
        setFilterCategoryy(filterCategoryy)
    }



    let filterCourses = filterCAtegory === "all" ? courses : filterCAtegory ? courses.filter(course => course.category === filterCAtegory) : courses
    let filterCoursess = filterCAtegoryy === "all" ? courses : filterCAtegoryy ? courses.filter(course => course.category === filterCAtegoryy) : courses

    return (
        <div>
            <div className="flex flex-col items-center w-10/12 mx-auto mt-10">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center bg-white gap-1.5 justify-center border px-1 pr-2 py-1 rounded-2xl border-gray-300 w-fit">
                        <h1 className='bg-[#1631fd15] p-1 rounded-full'><FaBolt className='text-[#1696FD] ' /></h1>
                        <h1 className='font-semibold'>Top Classes Courses</h1>
                    </div>
                    <div className="">
                        <h1 className='lg:text-5xl text-4xl font-bold'>Explore Your desire Courses</h1>
                    </div>
                </div>
                <div className=" hidden lg:block">
                    <div className="flex flex-wrap justify-center gap-10 items-center lg:w-full md:w-10/12 w-11/12 mx-auto mt-7">
                        <div className="group" onClick={() => filterCategory("all")}>
                            <div className="bg-white flex items-center gap-3 rounded-full group-hover:bg-sky-400 group-hover:text-white shadow-md border border-sky-400 duration-500 pr-3">
                                <div className="bg-[#F2F4F7] group-hover:bg-white rounded-l-full p-2">
                                    <IoMdDoneAll className='group-hover:text-sky-400 text-3xl' />
                                </div>
                                <div className="text-xl text-center font-semibold py-3 px-3">All</div>
                            </div>
                        </div>
                        {
                            categories.map(category => (
                                <div className="group" onClick={() => filterCategory(category.name)}>
                                    <div className="bg-white flex items-center gap-3 rounded-full group-hover:bg-sky-400 group-hover:text-white shadow-md border border-sky-400 duration-500 pr-3">
                                        <div className="bg-[#F2F4F7] group-hover:bg-white rounded-l-full p-2">
                                            <img className='w-10 p-2' src={category.icon} alt="" />
                                        </div>
                                        <div className="text-xl text-center font-semibold">{category.name}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-2 mt-5">
                    <p onClick={() => filterCategoryy("all")} className='btn hover:bg-[#1696FD] hover:text-white hover:shadow-2xl hover:shadow-black duration-700 hover:border-0'>
                        ALL
                    </p>
                    {
                        categories.map(category => (
                            <p onClick={() => filterCategoryy(category.name)} className='btn hover:bg-[#1696FD] hover:text-white hover:shadow-2xl hover:shadow-black duration-700 hover:border-transparent'>
                                {category.name}
                            </p>
                        ))
                    }
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-6 lg:hidden">
                    {
                        filterCoursess.map(filterCourse => (
                            <PopularCourseCard popularCourse={filterCourse}></PopularCourseCard>
                        ))
                    }
                </div>
                <div className=" hidden lg:block">
                    <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-6">
                        {
                            filterCourses.map(filterCourse => (
                                <PopularCourseCard popularCourse={filterCourse}></PopularCourseCard>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllCourses;