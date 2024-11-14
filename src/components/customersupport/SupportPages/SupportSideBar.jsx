import React from 'react'
import { SupportSideBarData } from './SupportSideBarData'
import { Link } from 'react-router-dom'
function SupportSideBar() {
    return (
        <div className="h-screen w-72 bg-slate-800 shadow-sm shadow-white   ">
            <h1 className="h-16 bg-red-600 flex justify-center items-center font-sans text-2xl font-black text-gray-200">
                Customer Support
            </h1>
            <div>
                <ul>
                    {SupportSideBarData.map((obj, key) => (
                        <li
                            key={key}
                            className="h-16 w-full hover:bg-slate-700 text-gray-200 text-lg font-semibold"
                        >
                            <Link
                                to={obj.link}
                                className="flex items-center space-x-4 w-full h-full px-4"
                            >
                                <div className="text-gray-200">{obj.icon}</div>
                                <span className="flex-1">{obj.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SupportSideBar
