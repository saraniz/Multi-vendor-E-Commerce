import { useState } from "react";

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([
    { name: "Samantha D.", rating: 4.5, review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.", date: "August 14, 2023" },
    { name: "Alex M.", rating: 5, review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.", date: "August 15, 2023" },
    { name: "Ethan R.", rating: 4, review: "This t-shirt is a must-have for anyone who appreciates good design. The fit is perfect.", date: "August 16, 2023" },
  ]);

  const [newReview, setNewReview] = useState({ name: "", rating: 5, review: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review) {
      setReviews([...reviews, { ...newReview, date: new Date().toDateString() }]);
      setNewReview({ name: "", rating: 5, review: "" });
    }
  };

  return (
    <div className="pb-10 mx-auto max-w-7xl">
      <h2 className="mb-4 text-2xl font-bold">All Reviews ({reviews.length})</h2>

      {/* Review Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {reviews.map((rev, index) => (
          <div key={index} className="p-4 bg-white border rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{rev.name}</h3>
              <span className="text-yellow-500">{"⭐".repeat(Math.round(rev.rating))}</span>
            </div>
            <p className="my-2 text-gray-600">{rev.review}</p>
            <p className="text-sm text-gray-400">Posted on {rev.date}</p>
          </div>
        ))}
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="p-4 mt-6 bg-white border rounded-lg shadow-md">
        <h3 className="mb-2 text-lg font-semibold">Write a Review</h3>
        <input
          type="text"
          placeholder="Your Name"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <textarea
          placeholder="Your Review"
          value={newReview.review}
          onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <button type="submit" className="px-4 py-2 text-white bg-black rounded">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewComponent;
