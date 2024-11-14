import React from 'react'
import SupportSideBar from './SupportSideBar'
function SupportComplaintView() {
    return (
        <div className='flex bg-slate-700'>
            <SupportSideBar />
            <div className='flex-1'>
                <h1 className='text-white text-center text-4xl'>Support Complaints</h1>
            </div>
        </div>
    )
}

export default SupportComplaintView
