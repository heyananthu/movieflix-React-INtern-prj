import React from 'react'
import bgbanner from '../../../assets/Netflix-Background.jpg'
import Lottie from 'lottie-react'
import Movieicon from '../../../assets/MovieFlix Logo.json'
function UserProfile() {
    return (
        <div className='h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${bgbanner})` }}>
            <div className='flex'>
                <div className='w-[30rem] ml-40'>
                    <Lottie animationData={Movieicon} />
                    <h1 className='text-red-600 font-black absolute left-[17rem] top-[22rem] text-5xl font-serif'>MovieFlix</h1>
                </div>
                <div className='ml-44'>
                    <div class="flex items-center h-screen w-full justify-center">
                        <div class="max-w-xs">
                            <div class="bg-black opacity-75 shadow-xl rounded-lg py-3 w-[30rem] h-[33rem]">
                                <div class="photo-wrapper p-2">
                                    <img class="w-32 h-32 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="John Doe"/>
                                </div>
                                <div class="p-2">
                                    <h3 class="text-center text-xl text-white font-medium leading-8">Joh Doe</h3>
                                    <table class="text-xs my-3 mt-12 ml-32">
                                        <tbody className='' ><tr>
                                            <td class="px-2 py-2 text-white font-semibold">Address</td>
                                            <td class="px-2 py-2 text-white">Chatakpur-3, Dhangadhi Kailali</td>
                                        </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-white font-semibold">Phone</td>
                                                <td class="px-2 py-2 text-white">+977 9955221114</td>
                                            </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-white font-semibold">Email</td>
                                                <td class="px-2 py-2 text-white">john@exmaple.com</td>
                                            </tr>
                                        </tbody></table>
                                    <div class="text-center my-3 mt-24">
                                        <button className='bg-green-600 rounded-lg p-2 w-[10rem] text-white hover:bg-green-800'>Edit Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserProfile
