import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchCartItems } from '../../../Storage/Cart/cartAction';
import { fetchProductDetails } from '../../../Storage/Product/productAction';
import { useNavigate } from 'react-router-dom'
import { deleteFromCart } from '../../../Storage/Cart/cartAction';
import Swal from 'sweetalert2';

const CartItem = ({id,cart_id, name, price, quantity,  onQuantityChange,image,description }) => {



    // Handle increase in quantity
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleIncrease = () => {
        onQuantityChange(quantity + 1);
    };

    // Handle decrease in quantity
    const handleDecrease = () => {
        if (quantity > 1) {
            onQuantityChange(quantity - 1);
        }
    };

    // Navigate to product page
    const handleProductClick = () => {
        if (id) {
            navigate(`/productPage/${id}`);
        } else {
            console.error("Product ID is missing!");
        }
    };
    
     // Access userLogin state from Redux store
     const userLogin = useSelector(state => state.userLogin);
    console.log("userLogin", userLogin);  // Add this to check state

    const handleCancel = async () => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              dispatch(deleteFromCart(cart_id, id));
                
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item removed from cart",
                showConfirmButton: false,
                timer: 1500,
              });
              
            } catch (error) {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Failed to remove item",
                text: error.message,
                showConfirmButton: true,
              });
            }
          }
        });
      };
      
      

    return (
        <div className="flex items-center px-8 py-4 border-b border-gray-200">
            {/* Product image placeholder */}
            <img src={image} 
            className="w-16 h-16 bg-gray-200 rounded-md cursor-pointer"
            onClick={handleProductClick}
            alt={name}
            />
            

            {/* Product details */}
            <div className="flex-1 ml-4 cursor-pointer" onClick={handleProductClick}>
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="mt-1 text-sm text-gray-500">{description}</p>
                <p className="mt-2 font-bold">Rs.{price}</p>
            </div>

            {/* Cancel button */}
            <button
                className="px-4 py-2 ml-4 text-white bg-black rounded-md"
                onClick={handleCancel}
            >
                Cancel
            </button>

            {/* Quantity controls */}
            <div className="flex items-center ml-4">
                <button
                    className="px-2 py-1 text-white bg-gray-500 rounded-l-md"
                    onClick={handleDecrease}
                    disabled={quantity <= 1}
                >
                    -
                </button>
                <div className="px-4 py-1 border-t border-b">{quantity} PCS</div>
                <button
                    className="px-2 py-1 text-white bg-gray-500 rounded-r-md"
                    onClick={handleIncrease}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default CartItem;