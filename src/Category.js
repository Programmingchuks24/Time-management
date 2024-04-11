import React from 'react'


function Category() {
  return (
    <div className="flex flex-col gap-3 items-center">

      <h1>Category</h1>


      <div className="border border-slate-600 h-[35rem] w-[25rem] flex flex-col justify-evenly items-center text-center">
        <p className="border border-slate-600 w-[20rem] h-14 shadow-md shadow-gray-700 rounded-3xl pt-3">School</p>
        <p className="border border-slate-600 w-[20rem] h-14 shadow-md shadow-gray-700 rounded-3xl pt-3">Work</p>
        <p className="border border-slate-600 w-[20rem] h-14 shadow-md shadow-gray-700 rounded-3xl pt-3">Add New Category</p>
      </div>
      
    </div>
  )
}

export default Category