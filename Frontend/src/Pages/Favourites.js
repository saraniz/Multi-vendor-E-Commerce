import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import CustomerNavbar from "../Components/Body/CustomerNavbar";
import ProductList from "../Components/Body/Productlist";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites } from "../Storage/Favorite/favAction";
import { toast } from "react-toastify";

function Favourites() {
  const { auth, fav } = useSelector((state) => state);
  const dispatch = useDispatch();
  const prevFavLength = useRef(fav?.favorites?.length || 0);

  // Fetch favorites on load or when flag updates
  useEffect(() => {
    if (auth.user?.reg_id) {
      dispatch(fetchFavorites(auth.user?.reg_id));
    }
  }, [auth.user?.reg_id, fav.flag]);

  // Show toast when item added
  useEffect(() => {
    const currentLength = fav?.favorites?.length || 0;
    const previousLength = prevFavLength.current;

    console.log("Previous fav length:", previousLength);
    console.log("Current fav length:", currentLength);

    if (Array.isArray(fav.favorites) && currentLength > previousLength) {
      toast.success("Product added to favorites!");
    }

    prevFavLength.current = currentLength;
  }, [fav.favorites]);

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen pr-16">
        {/* Sidebar */}
        <CustomerNavbar />
        <div className="ml-14">
          {/* Product List or empty message */}
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
