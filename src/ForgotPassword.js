import { useEffect, useState } from "react"
import React from 'react'
import { ToastContainer, toast } from "react-toastify";

function ForgotPassword() {

    const [statusquo, setStatusquo] = useState("");


    const handleClick = () => {

        toast.success
    }


    const statusChange = (e) => {

        setStatusquo(e.target.value);

        
    }

    useEffect(() => {
            
        console.log(statusquo);

    }, [statusquo]);
  return (
    <div className="flex flex-col items-center mt-20 gap-5">

        <p className="text-xl font-bold">Forgot Password</p>



        <div className="w-[400px] h-[250px] border border-slate-600 ml-9 pt-1 flex flex-col justify-around items-center rounded-xl"> 

            <input className = "border border-slate-600 h-20 w-[20rem] text-center  shadow-md shadow-gray-700 rounded-3xl" type = "text" value = {statusquo} onChange = {statusChange} placeholder = "Enter number"/>

            <button onClick={handleClick} className="border border-slate-600 h-16 w-[16rem] rounded-full" >Send Code</button>
        </div>

        <ToastContainer/>
    </div>
  )
}

export default ForgotPassword