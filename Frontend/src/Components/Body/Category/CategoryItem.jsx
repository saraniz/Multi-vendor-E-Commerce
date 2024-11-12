import React from 'react'

function CategoryItem() {
  return (
    <div>
    {/* Product Image */}
    <div className="relative">
     <div className='flex justify-center transition-all 
    duration-300 ease-in-out  hover:scale-125 '><button> <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyiXYQlJYE6rBuS5BqGgFtNZmDvfjF5snFw&s"
        alt="Product"
        className="object-cover rounded-full w-[100px] h-[100px]"
      /></button></div>
      <div className='flex justify-center'><div className='text-[20px] p-5 font-semibold'>Category</div></div>
    </div>
    </div>
    
  )
}

export default CategoryItem