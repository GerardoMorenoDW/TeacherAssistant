import React from 'react';
import Sidebar from './SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return(
        <>
            <div className="flex h-screen w-screen">
                <Sidebar />
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
      </>
    )
}
export default Layout;