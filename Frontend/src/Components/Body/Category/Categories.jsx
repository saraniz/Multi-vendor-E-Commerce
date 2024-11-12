import React from 'react'
import CategoryItem from './CategoryItem'

function Categories() {
  return (
    <div><div className='text-center text-[50px] p-10 font-semibold'>Categories</div>
    <div className='flex justify-center'>
    <div className='flex justify-center gap-20 CategoryBox w-[80%] pb-10'>
        
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/></div>
        </div>
        <div className='flex justify-center'><div className="w-full h-1 bg-slate-300"></div></div>
        </div>
  )
}

export default Categories