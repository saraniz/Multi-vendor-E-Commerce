import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ currentRating, onRate }) => {
  const [rating, setRating] = useState(currentRating || 0);
  const [hover, setHover] = useState(0);

  const handleClick = (newRating) => {
    setRating(newRating);
    onRate(newRating); // Call the function to submit rating to backend
  };

  return (
    <div className="flex space-x-1 text-yellow-500">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`cursor-pointer transition-colors duration-200 ${
            (hover || rating) >= star ? "text-yellow-500" : "text-gray-300"
          }`}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => handleClick(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;