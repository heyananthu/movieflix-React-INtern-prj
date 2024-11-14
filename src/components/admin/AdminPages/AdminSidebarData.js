import React from 'react'
// import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { BiMessageError } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { SlLogout } from "react-icons/sl";
export const AdminSidebarData = [
    {
        title: "Home",
        icon: <IoMdHome size={30} />,
        link: "/admindashboard"
    },
    {
        title: "Users",
        icon: <FaUsers size={30} />,
        link: "/adminuserview"
    },
    {
        title: "Movies",
        icon: <MdLocalMovies size={30} />,
        link: "/adminmovieview"
    },
    {
        title: "Complaints",
        icon: <BiMessageError size={30} />,
        link: "/admincomplaintview"
    },
    {
        title: "Subscriptions",
        icon: <MdSubscriptions size={30} />,
        link: "/adminsubcriptionview"
    },
    {
        title: "Reports",
        icon: <TbReportSearch size={30} />,
        link: "/adminreportview"
    },
    {
        title: "Logout",
        icon: <SlLogout
            size={30} />,
        link: "/adminlogin"
    },

]




