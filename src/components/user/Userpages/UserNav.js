import React, { useState } from 'react';
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function UserNav() {
    const navigate = useNavigate()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);

    };
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <div>
            <div className="flex items-center justify-between px-4 py-4 bg-black bg-opacity-0 fixed w-full z-10">
                <h1 className="text-red-600 text-3xl font-bold">Movieflix</h1>
                <div className="flex  items-center space-x-12 text-white">
                    <FaSearch className="w-5 h-5 cursor-pointer"onClick={toggleSearch}/>
                    {isSearchOpen && (
                        <input
                            type="text"
                            placeholder="Search..."
                            className="absolute top-4 left-[59rem] w-52 p-1 bg-white opacity-60  text-black rounded-lg shadow-lg focus:outline-none"
                        />
                    )}
                    <FaBell className="w-5 h-5 cursor-pointer" />
                    <div className="relative">
                        <FaUser className="w-5 h-5 cursor-pointer" onClick={toggleDropdown} />
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-4 w-40 text-center bg-black opacity-85 p-4 rounded-xl  z-20">
                                <ul className="py-2 text-white font-bold">
                                    <li className="px-4 py-2 hover:bg-red-600 cursor-pointer" onClick={()=>{navigate('/userprofile')}}>Profile</li>
                                    <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Subscription</li>
                                    <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Complaint</li>
                                    <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Settings</li>
                                    <li className="px-4 py-2 hover:bg-red-600 cursor-pointer" onClick={() => { navigate('/') }}>Logout</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserNav;
