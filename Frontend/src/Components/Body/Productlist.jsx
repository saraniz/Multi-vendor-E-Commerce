import { useEffect } from "react"; // Only import 'useEffect' here
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../Storage/Product/productAction";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  console.log("products", products);

  return (


    <div className="w-full flex flex-wrap justify-between">
    {products && products.length > 0 ? (
      products.map((product) => (
        <div key={product.id} className="w-[23%] mb-5">
          <ProductCard product={product} />
        </div>
      ))
    ) : (
      <p className="w-full text-center">No products available</p>
    )}
  </div>
  

    // <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //   {products ? (
    //     products.map((product) => (
    //       <ProductCard key={product.id} product={product} />
    //     ))
    //   ) : (
    //     <p>No products available</p>
    //   )}
    // </div>
  );
}

export default ProductList;

// import { useEffect } from 'react'; // Only import 'useEffect' here
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllProducts } from '../../Storage/Product/productAction';
// import ProductCard from './ProductCard';

// function ProductList() {

//     // Use the selector with a default value in case the state is undefined
//     const { products } = useSelector((state) => state );
//     console.log("products",products)

//     // You can add a loading check if you're fetching data asynchronously
//     const { loading = false } = useSelector((state) => state.products || { loading: false });

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//   return (
//     <div>
//     <div className="p-10">
//         <div className='flex justify-center'>
//       <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {products?.allproducts.length > 0 ? (
//             products?.allproducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//           ) : (
//             <p>No products available</p>
//           )}
//       </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default ProductList
