import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'


function Category() {

  const navigate = useNavigate();

  const RevertToReminder_work = () => {

    navigate("/reminder");
    

  }


  const RevertToReminder_school = () => {


    navigate("/reminder")
    

  }

  const NewCategroy = () => {

    console.log("New Category");

  }
  return (
    <motion.div 
    initial={{opacity:0, y:-100}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.5}}
    exit={{opacity:0, y:-100}}
    className="flex flex-col gap-5 items-center pt-5">

      <h1 className="font-bold text-2xl">All Categories</h1>


      <div className="border border-slate-600 h-[35rem] w-[25rem] flex flex-col justify-evenly items-center text-center rounded-3xl">
        <p className="border border-slate-600 w-[20rem] h-14 shadow-md shadow-gray-700 rounded-3xl pt-3 hover:shadow-none cursor-pointer" onClick={RevertToReminder_school}>School</p>
        <p className="border border-slate-600 w-[20rem] h-14 shadow-md shadow-gray-700 rounded-3xl pt-3 hover:shadow-none cursor-pointer" onClick={RevertToReminder_work}>Work</p>
        <p className="border border-slate-600 w-[20rem] h-14 shadow-md shadow-gray-700 rounded-3xl pt-3 hover:shadow-none cursor-pointer" onClick={NewCategroy}>Add New Category</p>
      </div>
      
    </motion.div>
  )
}

export default Category