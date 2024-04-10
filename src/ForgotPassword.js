import { useEffect, useState } from "react"
import React from 'react'

function ForgotPassword() {

    const [statusquo, setStatusquo] = useState("");


    const statusChange = (e) => {

        setStatusquo(e.target.value);

        
    }

    useEffect(() => {
            
        console.log(statusquo);

    }, [statusquo]);
  return (
    <div className="flex flex-col items-center mt-3 gap-3">

        <p>Forgot Password</p>



        <div className="w-[400px] h-[300px] border border-slate-600 ml-9 pt-20 flex justify-center"> 

            <input className = "border border-slate-600 h-20 w-[20rem] text-center  shadow-md shadow-gray-700 rounded-3xl" type = "text" value = {statusquo} onChange = {statusChange} placeholder = "Enter number"/>
        </div>
    </div>
  )
}

export default ForgotPassword