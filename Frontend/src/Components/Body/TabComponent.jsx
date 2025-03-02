import React, { useState } from 'react';
import ProductList from './Productlist';
import { useSelector } from 'react-redux';

function TabComponent() {
  const [activeTab, setActiveTab] = useState('All');
  const {products} = useSelector(store => store)
  console.log("producttab:",products)

  return (
    <div>
      <div className='text-[50px] pt-10 font-semibold pl-[120px]'>Best Sales</div>
      <div className="flex flex-col items-center">
        {/* Tab Headers */}
        <div className="flex p-5 mt-4 space-x-72">
          <button
            className={`px-4 py-2 rounded transition-all duration-300 ease-in-out ${
              activeTab === 'All'
                ? 'bg-blue-500 text-white scale-105 shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-200 hover:text-blue-800'
            }`}
            onClick={() => setActiveTab('All')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded transition-all duration-300 ease-in-out ${
              activeTab === 'Following'
                ? 'bg-blue-500 text-white scale-105 shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-200 hover:text-blue-800'
            }`}
            onClick={() => setActiveTab('Following')}
          >
            Following
          </button>
          <button
            className={`px-4 py-2 rounded transition-all duration-300 ease-in-out ${
              activeTab === 'Premium'
                ? 'bg-blue-500 text-white scale-105 shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-200 hover:text-blue-800'
            }`}
            onClick={() => setActiveTab('Premium')}
          >
            Premium
          </button>
        </div>

        {/* Tab Content */}
        <div className="w-full p-6 bg-wh rounded max-w-7xl">
          {activeTab === 'All' && <div><ProductList products={products.allproducts} /></div>}
          {activeTab === 'Following' && <div><ProductList /></div>}
          {activeTab === 'Premium' && (
    <div>
      <ProductList products={products.allproducts.filter(product => product.isPremium )} />
    </div>
  )}        </div>
      </div>
    </div>
  );
}

export default TabComponent;
