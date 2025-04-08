import React from 'react';
import UpNav from '../Component/UpNav';
import MainNav from '../Component/MainNav';
import { Outlet } from 'react-router-dom';
import Hero from '../Component/Hero';
import CategoryShowByIcon from '../Component/CategoryShowByIcon';
import PopularCourse from '../Component/PopularCourse';
import AboutUsHome from '../Component/AboutUsHome';
import Stat from '../Component/Stat';
import AllCourses from '../Component/AllCourses';
import FAQ from '../Component/FAQ';
import InstructorHome from '../Component/InstructorHome';
import BlogHome from '../Component/BlogHome';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <CategoryShowByIcon></CategoryShowByIcon>
            <AboutUsHome></AboutUsHome>
            <PopularCourse></PopularCourse>
            <Stat></Stat>
            <AllCourses></AllCourses>
            <FAQ></FAQ>
            <InstructorHome></InstructorHome>
            <BlogHome></BlogHome>
        </div>
    );
};

export default Home;