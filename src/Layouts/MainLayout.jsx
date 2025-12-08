import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='bg-black'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;