import React from 'react'
import ProductCard from './ProductCard'

function ProductList() {
  return (
    <div>    
    <div className="p-10">
        <div className='flex justify-center'>
      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Render multiple ProductCard components */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      </div>
    </div>
    </div>
  )
}

export default ProductList