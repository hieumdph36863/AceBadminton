import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarAdmin = () => {
  return (
    <>
       <div className="fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform">
                    <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
                        <h2 className="font-bold text-2xl">
                            LOREM{" "}
                            <span className="bg-[#f84525] text-white px-2 rounded-md">IPSUM</span>
                        </h2>
                    </a>
                    <ul className="mt-4">
                        
                        <li className="mb-1 group">
                            <NavLink
                                to=""
                                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md"
                            >
                                <i className="ri-home-2-line mr-3 text-lg" />
                                <span className="text-sm">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="mb-1 group">
                            <NavLink
                                to={`/admin/products`}
                                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md"
                            >
                                <i className="ri-task-line mr-3 text-lg" />
                                <span className="text-sm">Products</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
    </>
  )
}

export default SidebarAdmin
