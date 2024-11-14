import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SupportSideBar from './SupportSideBar'
import { FaEye } from "react-icons/fa";
function SupportUserView() {
    const [userlist, setUserList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/userview')
            .then((res) => {
                const result = res.data
                console.log(result)
                setUserList(result)
            })
    }, []);
    return (
        <div className='flex bg-slate-700'>
            <SupportSideBar />
            <div className="absolute md:left-72">
                <table className="table-auto ">
                    <thead>
                        <tr className="text-slate-300 text-5xl border-collapse border border-slate-500 h-20 font-serif">
                            <th className="px-4 text-left ">Name</th>
                            <th className="px-20 text-left">Email</th>
                            <th className="px-12 text-left">Password</th>
                            <th className="px-4"></th>
                        </tr>
                    </thead>
                    <tbody >
                        {userlist.map((obj, index) =>
                            <tr key={index} className="text-white h-16 hover:bg-slate-800">
                                <td className="px-4">{obj.name}</td>
                                <td className="px-20">{obj.email}</td>
                                <td className="px-24">{obj.password}</td>
                                <td className="px-32">
                                    <>
                                        <FaEye className='cursor-pointer hover:text-green-600' />
                                    </>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SupportUserView
