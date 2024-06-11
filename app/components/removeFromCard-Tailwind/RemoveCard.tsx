'use client';
import React from 'react'

const RemoveCard = () => {
  return (
    <div>
      <button className='p-4 mt-4 bg-red-500 border-2 rounded-md hover:bg-red-700 text-slate-200' onClick={()=>{console.log("the card is deleted")}}>Delete</button>
      <br />
      <button className='btn btn-primary w-40 rounded-lg mt-4'>button DaisyUI</button>
    </div>
  )
}

export default RemoveCard
