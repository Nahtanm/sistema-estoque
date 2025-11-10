import React from 'react'

const Options = ({children, text, onClick}) => {
  return (
    <div className='flex items-center h-8 w-4/5 gap-2 mt-4 px-6 rounded-2xl cursor-pointer hover:bg-slate-500'
    onClick={onClick}>
        {children}
        <span className='text-gray-950 font-medium text-sm'>{text}</span>
    </div>
  )
}

export default Options