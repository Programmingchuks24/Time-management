import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {

        if(email === "" || password === "") {

            toast.error("Please fill all the fields", {
                autoClose:2000,
                closeOnClick:true,
                pauseOnHover:true,
            });

            return;
        }

        else {

            toast.success("Signup Successful", {
                autoClose:2000,
                closeOnClick:true,
                pauseOnHover:true,
            });

            setTimeout(() => {
                navigate("/category")
            }, 3000);

        }

        
    }
    const textChange = (e) => {
      setEmail(e.target.value);
    };

    const Passwordchange = (e) => {
      setPassword(e.target.value);
    };

  return (
    <div>

        <div className = "flex flex-col gap-5 items-center">
            <h1 className = " italic text-3xl font-bold text-center">Sign up</h1>

            <div className="border border-slate-800 w-[500px] h-[400px]
            bg-gray-200 rounded-2xl text-center flex flex-col gap-4 pt-6 shadow-lg shadow-gray-500 sm:w-[400px] sm:ml-2 ">

                <p className="text-xl">Email address or Phone Number</p>
                <input value={email} onChange={textChange}  className = "border border-slate-600 h-16 shadow-md shadow-gray-700 rounded-3xl" type="text"/>

                <p>Password</p>
                <input value = {password} onChange={Passwordchange} className = "border border-slate-600 h-16 shadow-md shadow-gray-700 rounded-3xl" type="password"/>

                <button className = "border border-slate-600 h-16 rounded-3xl shadow-md shadow-gray-700 mt-5" onClick = {handleSubmit}>Sign Up</button>

                <Link to="/forgot"><p>Forgotten Password?</p></Link>
            </div>
        </div>

        <ToastContainer/>

    </div>
  )
}

export default Signup