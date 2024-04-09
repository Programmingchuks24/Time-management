import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <div className = "flex flex-col gap-5 items-center">
            <h1 className = " italic text-3xl font-bold text-center">Login</h1>

            <div className="border border-slate-800 w-[500px] h-[400px]
            bg-gray-200 rounded-2xl text-center flex flex-col gap-4 pt-6 shadow-lg shadow-gray-500 sm:w-[400px] sm:ml-2 ">

                <p className="text-xl">Email address or Phone Number</p>
                <input className = "border border-slate-600 h-16 shadow-md shadow-gray-700 rounded-3xl" type="text"/>

                <p>Password</p>
                <input className = "border border-slate-600 h-16 shadow-md shadow-gray-700 rounded-3xl" type="password"/>

                <button className = "border border-slate-600 h-16 rounded-3xl shadow-md shadow-gray-700 mt-5">Log In</button>

                <p>Forgotten Password?</p>
            </div>
        </div>

        <div className="mt-3 font-bold text-xl">
            <p>Don't have an account</p>
            <Link to = "/signup"><p className="text-blue-200">SignUp instead</p></Link> 
        </div>
        
    </>
    
  )
}

export default Login