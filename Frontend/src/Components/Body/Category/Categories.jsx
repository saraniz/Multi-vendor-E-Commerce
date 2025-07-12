import React from 'react'
import CategoryItem from './CategoryItem'

const categoryData = [
  { title: 'Frock', imageSrc: 'https://res.cloudinary.com/dggdmacdb/image/upload/v1751814732/download_1_jo8sza.jpg' },
  { title: 'T-shirt', imageSrc: 'https://res.cloudinary.com/dggdmacdb/image/upload/v1751814732/download_2_qd8gcr.jpg' },
  { title: 'Jeans', imageSrc: 'https://res.cloudinary.com/dggdmacdb/image/upload/v1751814732/download_3_lempex.jpg' },
  { title: 'Skirt', imageSrc: 'https://res.cloudinary.com/dggdmacdb/image/upload/v1751814733/images_quwpe7.jpg' },
  { title: 'Premium', imageSrc: 'https://res.cloudinary.com/dggdmacdb/image/upload/v1751814732/download_vvklhs.jpg' }
];


function Categories({ onCategoryClick }) {
  return (
    <div>
      <div className='text-center text-[35px] p-10 font-semibold'>Shop by categories</div>
      <div className='flex justify-center'>
        <div className='flex justify-center gap-20 CategoryBox w-[80%] pb-10'>
          {categoryData.map((cat, idx) => (
            <CategoryItem key={idx} {...cat} onClick={onCategoryClick} />
          ))}
        </div>
      </div>
      <div className='flex justify-center'><div className="w-full h-1 bg-slate-300"></div></div>
    </div>
  );
}

export default Categories