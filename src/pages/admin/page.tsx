import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import NavBar from './layout/navbar';
import Header from './layout/header';
import Dashbord from './dashbord';

const LayoutAdmin = () => {
  return (
    <>
      <div className="text-gray-800 font-inter">
        {/* <!--sidenav --> */}
        <div className="fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform">
          <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">

            <h2 className="bg-[#f84525] text-black px-2 rounded-md">ACE<span className="font-bold text-2xl text-white">BADMINTION</span></h2>
          </a>
         
        <NavBar/>

        </div>
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
        {/* <!-- end sidenav --> */}

        <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
          {/* <!-- navbar --> */}
        <Header/>
        

          {/* <!-- Content --> */} 
          <div className="p-6">
            <Outlet/>
          </div>
        </main>
      </div>
    </>
  )
}

export default LayoutAdmin