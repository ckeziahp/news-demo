import React from 'react'
import Header from './header';


const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
          <Header/>
            <main className="p-4">{children}</main>
        </div>
    );
};
export default Layout
