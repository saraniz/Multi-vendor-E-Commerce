import React, { useEffect } from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import CustomerNavbar from "../Components/Body/CustomerNavbar";
import ProductList from "../Components/Body/Productlist";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites } from "../Storage/Favorite/favAction";

function Favourites() {
  const { auth, fav } = useSelector((state) => state);
  const dispatch = useDispatch();
 

  useEffect(() => {
    if (auth.user?.reg_id) {
      dispatch(fetchFavorites(auth.user?.reg_id));
    }
  }, [auth,fav.flag]);

  console.log("favourits ", fav);
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen pr-16">
        {/* Sidebar */}
        <CustomerNavbar />
        <div className="ml-14">
          {/* Conditional rendering of ProductList or message */}
          {fav?.favorites?.length > 0 ? (
            <ProductList products={fav.favorites} />
          ) : (
            <p>No Product</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Favourites;
