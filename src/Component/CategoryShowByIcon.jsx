import React, { useEffect, useState } from 'react';
import { FaBolt } from 'react-icons/fa';

const CategoryShowByIcon = () => {
    const [categories, setCategory] = useState([])
    useEffect(() => {
        fetch("Category.json")
            .then(res => res.json())
            .then(data => setCategory(data)
            )
    }, [])
    return (
        <div>
            <div className="bg-[#F2F4F7] py-10">
                <div className="w-10/12 mx-auto flex items-center justify-center mb-2">
                    <div className="flex items-center bg-white gap-1.5 justify-center border px-1 pr-2 py-1 rounded-2xl border-gray-300">
                        <h1 className='bg-[#1631fd15] p-1 rounded-full'><FaBolt className='text-[#1696FD] ' /></h1>
                        <h1 className='font-semibold'>Top Categories</h1>
                    </div>
                </div>
                <div className="w-10/12 mx-auto text-center text-2xl md:text-3xl font-semibold">
                    <h1>Select The Industry Where You Want To Learn</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-10 items-center md:w-10/12 w-11/12 mx-auto mt-7">
                    {
                        categories.map(category => (
                            <div className="group">
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
        </div>
    );
};

export default CategoryShowByIcon;