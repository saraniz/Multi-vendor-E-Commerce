import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Header/Navbar";
import AdvertisementSlider from "../Components/Body/AddSlider";
import TabComponent from "../Components/Body/TabComponent";
import Footer from "../Components/Footer/Footer";
import Categories from "../Components/Body/Category/Categories";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../Storage/Product/productAction";
import { fetchCategoryProducts } from "../Storage/category/categoryaction";
import Loader from "./Loader";

function HomePage() {
  const tabRef = useRef(null);
  const { loading, auth, fav } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [categoryProducts, setCategoryProducts] = useState([]); // ✨ New state
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [pageloading, setPageloading] = useState(true)


  useEffect(() => {

    dispatch(fetchAllProducts())
    const timer = setTimeout(() => {
      setPageloading(false);
    }, 1000);

    return () => clearTimeout(timer);

  }, [fav.flag])

  const handleCategoryClick = async (category) => {
    try {
      const data = await fetchCategoryProducts(category);
      setCategoryProducts(data.products);
      setSelectedCategory(data.category);
      scrollToTabComponent();
    } catch (error) {
      console.error("Category fetch failed:", error);
    }
  };

  const scrollToTabComponent = () => {
    tabRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (pageloading) {
    return <Loader />
  }

  return (
    <div>
      <Navbar />
      <AdvertisementSlider />
      <div className="flex justify-center m-10">
        <button
          onClick={scrollToTabComponent}
          className="bg-gradient-to-l from-slate-900 via-blue-950 to-gray-900 text-white text-center text-[30px] py-3 px-6 font-semibold rounded-full w-80 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl
    hover:from-slate-800 hover:via-blue-900 hover:to-slate-800 shadow-lg shadow-blue-100"
        >
          SHOP NOW!
        </button>
      </div>
      <div className="flex justify-center">
        <div className="w-[90%] h-1 bg-slate-300"></div>
      </div>
      <Categories onCategoryClick={handleCategoryClick} />
      <div ref={tabRef}>
        <h2 className="my-5 text-2xl font-bold text-center">
          {selectedCategory ? `Products in ${selectedCategory}` : 'All Products'}
        </h2>

        {/* Show Category Products here if selected */}
        {categoryProducts.length > 0 && (
          <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3">
            {categoryProducts.map(product => (
              <div key={product.product_id} className="p-4 border rounded shadow">
                <img src={product.product_image} alt={product.name} className="object-cover w-full h-48 rounded" />
                <div className="mt-2 font-bold">{product.name}</div>
                <div>{product.price} LKR</div>
              </div>
            ))}
          </div>
        )}

        {/* If not selected, show all products from Redux (TabComponent) */}
        {categoryProducts.length === 0 && <TabComponent />}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
