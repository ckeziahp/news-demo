// import React from 'react'

// // src/components/Header.jsx

// const Header = () => {
//     return (
//         <header className="bg-white shadow-md p-4 flex justify-between items-center">
//             <h1 className="text-2xl font-bold text-center">News-Demo</h1>
//             <nav>
//                 <ul className="flex space-x-4 overflow-x-auto text-sm border-t">
//                     <li><a href="/" className="text-gray-700 hover:text-blue-500">Home</a></li>

//                     <li><a href="/foryou" className="text-gray-700 hover:text-blue-500">For You</a></li>

//                     <li><a href="/following" className="text-gray-700 hover:text-blue-500">Following</a></li>

//                     <li><a href="/u.s" className="text-gray-700 hover:text-blue-500">U.S.</a></li>

//                     <li><a href="/world" className="text-gray-700 hover:text-blue-500">World</a></li>

//                     <li><a href="/health" className="text-gray-700 hover:text-blue-500">Health</a></li>

//                     <li><a href="/science" className="text-gray-700 hover:text-blue-500">Science</a></li>

//                     <li><a href="/local" className="text-gray-700 hover:text-blue-500">Local</a></li>

//                     <li><a href="/sports" className="text-gray-700 hover:text-blue-500">Sports</a></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// };

// export default Header



import React from "react";

const NavBar = () => {
    const navItems = [
      { name: "Home", path: "/" },
      { name: "For You", path: "/foryou" },
      { name: "Following", path: "/following" },
      { name: "Africa", path: "/africa" },
      { name: "World", path: "/world" },
      { name: "Local", path: "/local" },
      { name: "Business", path: "/business" },
      { name: "Technology", path: "/technology" },
      { name: "Entertainment", path: "/entertainment" },
      { name: "Sports", path: "/sports" },
      { name: "Science", path: "/science" },
      { name: "Health", path: "/health" },
    ];
  
    return (
      <div className="border-b bg-white sticky top-0 z-50">
        <div className="flex justify-between items-center px-4 py-2 lg:px-8">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-lg font-bold text-gray-600">
              <b className="text-blue-600">G</b>
              <b className="text-red-600">o</b>
              <b className="text-yellow-600">o</b>
              <b className="text-blue-600">g</b>
              <b className="text-green-600">l</b>
              <b className="text-red-600">e</b> News
            </a>
          </div>
  
          <div className="flex-grow mx-4">
            <input
              type="text"
              placeholder="Search for topics, locations & sources"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-question-circle"></i>
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-cog"></i>
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-th"></i>
            </button>
            {/* <button className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
              K
            </button> */}
          </div>
        </div>
  
        <div className="flex overflow-x-auto text-sm place-content-center items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="px-4 py-2 text-gray-700 hover:bg-gray-200 whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    );
  };

export default NavBar;
