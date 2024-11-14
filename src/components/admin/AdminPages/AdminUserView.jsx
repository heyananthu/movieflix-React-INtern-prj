import React, { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import axios from 'axios';
import { FaEye } from "react-icons/fa";
function AdminUserView() {
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
            <AdminSidebar />
            <div className="absolute md:left-[18rem]">
                <table className="table-auto ">
                    <thead>
                        <tr className="text-slate-300 text-5xl h-20  font-serif">
                            <th className="px-4 text-left ">Name</th>
                            <th className="px-20 text-left">Email</th>
                            <th className="px-12 text-left">Password</th>
                            <th className="px-4"></th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        {userlist.map((obj, index) =>
                            <tr key={index} className="text-white h-16  hover:bg-slate-900 p-5">
                                <td className="px-4 ">{obj.name}</td>
                                <td className="px-20">{obj.email}</td>
                                <td className="px-24">{obj.password}</td>
                                <td className="px-12">
                                    <button
                                        className="bg-red-600 hover:bg-red-900 rounded-sm w-32 h-10 font-serif"
                                    >
                                        Delete User
                                    </button>
                                </td>
                                <td className='w-full'>
                                    <FaEye className='cursor-pointer hover:text-green-600 ml-5' size={20}/>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminUserView;