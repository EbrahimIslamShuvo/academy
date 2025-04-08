import React from 'react';
import Home from './Page/Home';
import UpNav from './Component/UpNav';
import MainNav from './Component/MainNav';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer';

const Root = () => {
    return (
        <div>
            <UpNav></UpNav>
            <MainNav></MainNav>
            <Outlet></Outlet>
             
            <Footer></Footer>      
        </div>
    );
};

export default Root;