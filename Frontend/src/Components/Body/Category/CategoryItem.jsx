import React from 'react'

function CategoryItem({ title, imageSrc, onClick }) {
  return (
    <div onClick={() => onClick(title.toLowerCase())} className="cursor-pointer">
      <div className="relative">
        <div className='flex justify-center transition-all duration-300 ease-in-out hover:scale-125'>
          <img
            src={imageSrc}
            alt={title}
            className="object-cover rounded-full w-[100px] h-[100px]"
          />
        </div>
        <div className='flex justify-center'>
          <div className='text-[20px] p-5 font-semibold'>{title}</div>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem