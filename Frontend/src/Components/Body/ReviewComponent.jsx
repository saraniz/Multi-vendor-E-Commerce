import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { submitReview, fetchReviews } from "../../Storage/Review/reviewAction";
import Swal from "sweetalert2";

const ReviewComponent = () => {
  const { product_id } = useParams(); // Extract product_id from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { reviews, loading, error } = useSelector((state) => state.review);
  const auth = useSelector((state) => state.auth);

  const [newReview, setNewReview] = useState({
    userName: "",
    content: "",
  });

  // Fetch reviews on component mount
  useEffect(() => {
    dispatch(fetchReviews(product_id));
  }, [dispatch, product_id]);

  // Check authentication on component mount
  useEffect(() => {
    if (!auth.user) {
      Swal.fire({
        title: "Login Required",
        text: "You need to log in to submit a review.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/LoginPage", { state: { from: window.location.pathname } });
        } else {
          navigate("/HomePage");
        }
      });
    }
  }, [auth, navigate]);

  const handleLoginPrompt = (e) => {
    e.preventDefault(); // Prevent form submission

    if (!auth.user) {
      Swal.fire({
        title: "Login Required",
        text: "You need to log in to submit a review.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/LoginPage", { state: { from: window.location.pathname } });
        } else {
          navigate("/HomePage");
        }
      });
    } else {
      // Submit the review if logged in
      handleSubmit(e); // Pass the event object to handleSubmit
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    if (!newReview.userName || !newReview.content) {
      Swal.fire({
        title: "Error",
        text: "All fields are required.",
        icon: "error",
      });
      return;
    }

    const reviewData = {
      product_id: parseInt(product_id), // Ensure product_id is a number
      userName: newReview.userName,
      content: newReview.content,
    };

    console.log("Submitting review with data:", reviewData); // Debugging

    dispatch(submitReview(reviewData))
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Review submitted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setNewReview({ userName: "", content: "" }); // Clear the form
        dispatch(fetchReviews(product_id)); // Refresh reviews after submission
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message || "Something went wrong.",
          icon: "error",
        });
      });
  };

  return (
    <div className="pb-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Reviews Heading */}
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        All Reviews ({reviews.length})
      </h2>

      {/* Review Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <p>Loading reviews...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">{review.userName}</h3>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < Math.round(review.rating) ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-gray-600">{review.content}</p>
              <p className="mt-3 text-sm text-gray-400">
                Posted on {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to review this product!</p>
        )}
      </div>

      {/* Review Form */}
      <form onSubmit={handleLoginPrompt} className="mt-8 p-6 bg-white rounded-lg shadow-sm">
        <h3 className="mb-4 text-xl font-semibold text-gray-900">Write a Review</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.userName}
            onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <textarea
            placeholder="Your Review"
            value={newReview.content}
            onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            rows="4"
            required
          />
          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-black rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewComponent;
