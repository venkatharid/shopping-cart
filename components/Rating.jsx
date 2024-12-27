import React from "react";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";

const Rating = ({ rating }) => {
  const filledStars = Math.floor(rating); 
  const hasHalfStar = rating % 1 !== 0; 

  return (
    <div className="flex items-center">
      {Array.from({ length: filledStars }, (_, index) => (
        <RiStarFill key={`filled-${index}`} className="text-yellow-500" />
      ))}
      {hasHalfStar && <RiStarHalfFill className="text-yellow-500" />}
    </div>
  );
};

export default Rating;