import React, { useState } from "react";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-yellow-600 rounded-md shadow-md w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 m-4 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image */}
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.o3mu6piTxeTjPbXZMzMO7gHaFY&pid=Api&P=0&h=180"
        alt=""
        className="rounded-lg w-full h-full"
      />
      {/* Overlay for Text and Button */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 bg-gray-800 bg-opacity-75 rounded-lg ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-white text-center">
          <h1 className="text-lg font-bold mb-1">Category Name</h1>
          <p className="text-sm px-2 mx-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          {/* Shop Now Button */}
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-2 transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
