import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SidebarAdmin from './SidebarAdmin'

const LayoutAdmin = () => {
    return (
        <div>
            <div className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
                {/* Sidebar */}
                <SidebarAdmin />
                {/* Navbar */}
                <div className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
                    <ul className="ml-auto flex items-center relative">
                    <NavLink to={`/register`}>
                        <button className="px-4 py-2 text-blue-500 border border-blue-500 bg-white hover:text-white hover:bg-blue-600 rounded-lg mr-3 transition-all duration-300">
                            Đăng ký
                        </button>
                        </NavLink>

                        {/* Nút Đăng nhập */}
                        <NavLink to={`/login`}>
                            <button className="px-4 py-2 text-green-500 border border-green-500 bg-white hover:text-white hover:bg-blue-600 rounded-lg mr-3 transition-all duration-300">
                                Đăng nhập
                            </button>
                        </NavLink>

                        {/* Nút Avatar (Giữ nguyên) */}

                    </ul>

                </div>
                {/* Nội dung chính */}
                <div className="p-4">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default LayoutAdmin
