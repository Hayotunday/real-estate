import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

const FavoriteButton = () => {
  const [starred, setStarred] = useState(false);
  return (
    <>
      {starred ? (
        <FaStar
          onClick={(e) => {
            e.preventDefault();
            setStarred(!starred);
          }}
          className="w-6 h-6 text-red-400"
        />
      ) : (
        <FaRegStar
          onClick={(e) => {
            e.preventDefault();
            setStarred(!starred);
          }}
          className="w-6 h-6 text-blue-950"
        />
      )}
    </>
  );
};

export default FavoriteButton;
