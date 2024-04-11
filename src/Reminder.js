import React from 'react';

function Reminder() {
  return (

    <section className="flex flex-col gap-6 md:overflow-auto h-[90rem]">
      <div className="flex gap-4 text-center justify-center mt-5">

        <p className="w-[100px] h-14 border border-slate-600 rounded-3xl pt-3">School</p>
        <p className="w-[100px] h-14 border border-slate-600 rounded-3xl pt-3">Work</p>
        <p className="w-[100px] h-14 border border-slate-600 rounded-3xl pt-3">All</p>
        <p className="w-[100px] h-14 border border-slate-600 rounded-3xl pt-3">Search</p>

      </div>

      <section className="flex flex-col items-center gap-4">

        <p> Work Reminders</p>
        <div className = "w-[30rem] h-[40rem] border border-slate-800 rounded-xl flex flex-col justify-around">

          <div className="flex gap-2">
            <span className="inline-block w-14 h-14 border border-slate-600 rounded-full"></span>
            <p className="w-[25rem] h-[70px] border border-slate-800 rounded-2xl text-center pt-4">Work Reminder 1</p>
          </div>

          <div className="flex gap-2">
          <span className="inline-block w-14 h-14 border border-slate-600 rounded-full"></span>
            <p className="w-[25rem] h-[70px] border border-slate-800 rounded-2xl text-center pt-4" >Work Reminder 1</p>
          </div>

          <div className = "flex gap-2">
          <span className="inline-block w-14 h-14 border border-slate-600 rounded-full"></span>
            <p className="w-[25rem] h-[70px] border border-slate-800 rounded-2xl text-center pt-4">Work Reminder 1</p>
          </div>

          <div className="flex gap-2">
          <span className="inline-block w-14 h-14 border border-slate-600 rounded-full"></span>
            <p className="w-[25rem] h-[70px] border border-slate-800 rounded-2xl text-center pt-4">Work Reminder 1</p>
          </div>

        </div>

        <p className="w-[20rem] h-[60px] border border-slate-800 rounded-2xl text-center pt-4 shadow-lg shadow-black hover:shadow-none cursor-pointer">Add Reminders</p>

      </section>

    </section>
    
  )
}

export default Reminder