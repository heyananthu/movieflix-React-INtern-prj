import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminReportUser from './AdminReports/AdminReportUser'
import AdminReportMovies from './AdminReports/AdminReportMovies'
import AdminReportComplaints from './AdminReports/AdminReportComplaints'
function AdminReportView() {
    return (
        <div className='flex bg-slate-700'>
            <AdminSidebar />
            <div className='flex-1'>
                <h1 className='text-white text-center text-4xl'>Reports</h1>
                <div className='grid grid-cols-3 gap-2 ml-6'>
                    <AdminReportUser />
                    <AdminReportMovies/>
                    <AdminReportComplaints/>
                </div>
            </div>
        </div>
    )
}

export default AdminReportView
