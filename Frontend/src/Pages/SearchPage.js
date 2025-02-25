import React from 'react'
import Navbar from '../Components/Header/Navbar'
import Footer from '../Components/Footer/Footer'
import ProductList from '../Components/Body/Productlist';

const SearchResult = ({ searchTerm, itemCount }) => {
    return (
      <div className="p-20 pt-5 pb-5">
        <h1 className="text-3xl font-bold">{searchTerm}</h1>
        <p className="p-6 text-xl text-gray-600">{itemCount} items found for “{searchTerm}”</p>
      </div>
    );
  };
  
  const SearchPage = () => {
    // Example values (Replace with dynamic values from backend)
    const searchTerm = "Laptops";
    const itemCount = 1024;
  
    return (
      <div>
        <Navbar/>
        <SearchResult searchTerm={searchTerm} itemCount={itemCount} />
        <ProductList/>
        <Footer/>
      </div>
    );
  };

export default SearchPage