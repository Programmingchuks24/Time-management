import React from 'react'

function Login() {
  return (
    <>
        <div className = "flex flex-col gap-5 items-center">
            <h1 className = " italic text-3xl font-bold text-center">Login</h1>

            <div className="border border-slate-800 w-[500px] h-[500px]
            bg-gray-200 rounded-2xl text-center flex flex-col justify-between pt-6 shadow-lg shadow-gray-500">

                <p className="text-xl">Email address or Phone Number</p>
                <input className = "border border-slate-600 h-16" type="text"/>

                <p>Password</p>
                <input className = "border border-slate-600 h-16" type="password"/>

                <button className = "border border-slate-600 h-16">Log In</button>

                <p>Forgotten Password?</p>
            </div>
        </div>

        <div className="mt-3 font-bold text-xl">
            <p>Don't have an account</p>
            <p className="text-blue-200">SignUp instead</p>
        </div>
        
    </>
    
  )
}

export default Login