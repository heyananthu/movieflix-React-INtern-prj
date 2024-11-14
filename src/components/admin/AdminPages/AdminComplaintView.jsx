import React from 'react'
import AdminSidebar from './AdminSidebar'
function AdminComplaintView() {
    return (
        <div className='flex bg-slate-700'>
            <AdminSidebar />
            <div className='flex-1'>
                <h1 className='text-white text-center text-4xl'>Complaints</h1>
            </div>
        </div>
    )
}

export default AdminComplaintView
