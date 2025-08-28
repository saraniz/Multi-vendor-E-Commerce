// File: src/Pages/CategoryPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { fetchCategoryProducts } from "../Storage/category/categoryaction"; // ✨ API function for fetching category products
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import ProductCard from "../Components/Body/ProductCard";
import Loader from "./Loader";

function CategoryPage() {
  const { categoryName } = useParams(); // ✨ Capture category name from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategory = async () => {
      try {
        const data = await fetchCategoryProducts(categoryName); // ✨ API call
        setProducts(data.products); // ✨ Store fetched products
        setLoading(false);
      } catch (error) {
        console.error("❌ Failed to fetch category products:", error);
        setLoading(false);
      }
    };
    loadCategory();
  }, [categoryName]); // ✨ Refetch when category changes

  if (loading) return <Loader />; // ✨ Show loading spinner until done

  return (
    <div>
      <Navbar /> {/* ✨ Navbar on top */}
      <div className="text-center text-3xl font-bold my-5">
        {categoryName.toUpperCase()} {/* ✨ Show category name */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-5">
        {products.map((product) => (
          <ProductCard key={product.product_id} product={product} /> 
        ))}
      </div>

      <Footer /> 
    </div>
  );
}

export default CategoryPage;
