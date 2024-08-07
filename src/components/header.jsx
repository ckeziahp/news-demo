import React from 'react'

// src/components/Header.jsx

const Header = () => {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-center">News-Demo</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-gray-700 hover:text-blue-500">Home</a></li>

                    <li><a href="/foryou" className="text-gray-700 hover:text-blue-500">For You</a></li>

                    <li><a href="/following" className="text-gray-700 hover:text-blue-500">Following</a></li>

                    <li><a href="/u.s" className="text-gray-700 hover:text-blue-500">U.S.</a></li>

                    <li><a href="/world" className="text-gray-700 hover:text-blue-500">World</a></li>

                    <li><a href="/health" className="text-gray-700 hover:text-blue-500">Health</a></li>

                    <li><a href="/science" className="text-gray-700 hover:text-blue-500">Science</a></li>

                    <li><a href="#" className="text-gray-700 hover:text-blue-500">Local</a></li>

                    <li><a href="#" className="text-gray-700 hover:text-blue-500">Sports</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header
