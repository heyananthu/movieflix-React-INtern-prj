import React, { useState } from 'react'
import bgbanner from '../../assets/Netflix-Background.jpg'
import logoanim from '../../assets/logoanim.json'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Registration() {
    const navigate = useNavigate()
    const [name,setName] = useState()
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()

    const regHandler=(e)=>{
        e.preventDefault()

        axios.post('http://localhost:5000/userreg',{
            name,email,password
        }).then((res)=>{
            const result = res.data
            if(result === "sucess"){
                navigate('/userlogin')
            }else{
                alert("Registratioin failed")
            }
        })

    }
    return (
        <div className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgbanner})` }}>
            <div className='flex'>
                <div className='flex sm:ml-14 md:whitespace-nowrap item-center'>
                    <div className='md:ml-2'>
                        <Lottie animationData={logoanim} className='md:w-32' />
                    </div>
                    <div className='md:mt-11 '>
                        <h1 className='text-red-600 md:text-4xl md:font-bold'><span className='md:font-black md:text-5xl'>M</span>ovie<span className='md:font-black md:text-5xl'>F</span>lix</h1>
                    </div>
                </div>
                <div className='md:ml-[45rem] md:mt-14 font-mono'>
                    <button className='bg-red-600 md:rounded md:p-2 text-white md:h-9 hover:bg-red-700'>Sign In</button>
                </div>
            </div>
            <div>
                <section class="md:absolute md:top-10 md:left-[32rem] md:h-80">
                    <div class="flex flex-col items-center justify-center ">
                        <div class="md:w-[50rem] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-black bg-opacity-50 dark:border-gray-500">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-red-500">
                                    Create an account
                                </h1>
                                <form class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required=""
                                        value={name}
                                        onChange={(e)=>{
                                            setName(e.target.value)
                                        }}
                                        />
                                    </div>
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required=""
                                        value={email}
                                        onChange={(e)=>{
                                            setEmail(e.target.value)
                                        }}
                                        />
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" 
                                        value={password}
                                        onChange={(e)=>{
                                            setPassword(e.target.value)
                                        }}
                                        />
                                    </div>
                                    <div>
                                        <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-800 dark:focus:ring-primary-800" onClick={regHandler}>Create an account</button>
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={()=>{navigate('/userlogin')}}>Login here</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Registration
