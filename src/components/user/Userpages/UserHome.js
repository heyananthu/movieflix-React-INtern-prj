import React from 'react'
import MovieRow from './HomeMovieRow'
import UserNav from './UserNav';
function UserHome() {
    return (
        <div  className='bg-black h-100%'>
            <UserNav/>
            <div className="relative h-[60vh] md:h-[80vh] w-full md:bg-cover md:bg-center " style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp9049883.jpg')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-70"></div>
                <div className="absolute bottom-10 px-4 md:px-8 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold">Movie</h1>
                    <p className="text-sm md:text-lg mt-2">New One</p>
                    <div className="mt-4">
                        <button className="bg-red-600 px-6 py-2 text-sm md:text-lg font-bold rounded hover:bg-red-700">Play</button>
                        <button className="bg-gray-600 px-6 py-2 text-sm md:text-lg font-bold rounded ml-4 hover:bg-gray-700">More Info</button>
                    </div>
                </div>
            </div>
        <MovieRow/>
        </div>
    )
}

export default UserHome
