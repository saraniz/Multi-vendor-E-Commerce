import React from 'react'
import CategoryItem from './CategoryItem'

const categoryData = [
  { title: 'Frock', imageSrc: 'https://res.cloudinary.com/dggdmacdb/image/upload/v1756436352/WhatsApp_Image_2025-08-28_at_21.33.12_27bb3540_dse387.jpg' },
  { title: 'T-shirt', imageSrc: 'https://res.cloudinary.com/dggdmacdb/image/upload/v1756436329/WhatsApp_Image_2025-08-28_at_21.30.25_854fd4ff_lydtxr.jpg' },
  { title: 'Jeans', imageSrc: 'https://res.cloudinary.com/dggdmacdb/image/upload/v1756436319/WhatsApp_Image_2025-08-28_at_21.30.25_c4c524e0_wyhdq6.jpg' },
  { title: 'Skirt', imageSrc: 'https://res.cloudinary.com/dggdmacdb/image/upload/v1756436339/WhatsApp_Image_2025-08-28_at_21.30.24_e2fbfe82_dm3ejx.jpg' },
  { title: 'Premium', imageSrc: 'https://res.cloudinary.com/dggdmacdb/image/upload/v1756436308/WhatsApp_Image_2025-08-28_at_21.30.24_7df8adcd_gjow4h.jpg' }
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