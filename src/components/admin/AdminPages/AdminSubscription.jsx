import React from 'react'
import AdminSidebar from './AdminSidebar'
function AdminSubscription() {
    return (
        <div className='flex bg-slate-700'>
            <AdminSidebar/>
            <div className='flex-1'>
                <h1 className='text-white text-center text-4xl'>Subscription</h1>
            </div>
        </div>
    )
}

export default AdminSubscription