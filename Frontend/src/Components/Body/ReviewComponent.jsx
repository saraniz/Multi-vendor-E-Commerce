import { useState } from "react";

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Samantha D.",
      rating: 4.5,
      review: "I absolutely love it! The quality is amazing, and it feels so comfortable. It’s perfect for everyday use, and I’ve received so many compliments. Highly recommended! 😍👌",
      date: "August 14, 2023",
    },
    {
      name: "Alex M.",
      rating: 5,
      review: "Exceeded my expectations! The attention to detail is incredible, and it looks fantastic. I’ve been using it for a while now, and it still looks as good as new. Worth every penny! 💯✨",
      date: "August 15, 2023",
    },
    {
      name: "Ethan R.",
      rating: 4,
      review: "A great addition to my collection. The design is stylish, and it fits perfectly. It’s versatile and works well for different occasions. I’m really happy with my purchase! 👍😊",
      date: "August 16, 2023",
    },
  ]);

  const [newReview, setNewReview] = useState({ name: "", rating: 5, review: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review) {
      setReviews([...reviews, { ...newReview, date: new Date().toLocaleDateString() }]);
      setNewReview({ name: "", rating: 5, review: "" });
    }
  };

  return (
    <div className="pb-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Reviews Heading */}
      <h2 className="mb-6 text-2xl font-bold text-gray-900">All Reviews ({reviews.length})</h2>

      {/* Review Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((rev, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">{rev.name}</h3>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < Math.round(rev.rating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-4 text-gray-600">{rev.review}</p>
            <p className="mt-3 text-sm text-gray-400">Posted on {rev.date}</p>
          </div>
        ))}
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="mt-8 p-6 bg-white rounded-lg shadow-sm">
        <h3 className="mb-4 text-xl font-semibold text-gray-900">Write a Review</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <textarea
            placeholder="Your Review"
            value={newReview.review}
            onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
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