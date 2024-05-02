import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Start with menu closed for mobile view

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between py-5 bg-sky-700 shadow-lg sticky top-0 z-50">
      <div className="md:w-1/4 flex mb-4 md:mb-0 md:justify-center md:text-center sm:text-center">
        <h1 className="text-white text-2xl font-bold mx-4 ">Brand</h1>
      </div>
      <div className="md:w-3/4 flex md:items-center justify-end md:order-2">
        {/* Triple Equal Icon for Mobile */}
        <button
          className="md:hidden text-white text-lg px-4 focus:outline-none text-left"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        {/* Navigation Links (Visible only for mobile when menu is open) */}
        <ul
          className={`md:hidden flex flex-col mx-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          style={{ textAlign: "left" }}
        >
          <li className="py-2">
            <a href="#" className="text-white text-lg transition duration-300">
              Home
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white text-lg transition duration-300">
              About Us
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white text-lg transition duration-300">
              Products
            </a>
          </li>
          <li className="py-2">
            <a
              href="#"
              className="text-white text-lg transition duration-300 hover:bg-yellow-700 hover:rounded-lg hover:text-sm"
            >
              Query
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white text-lg transition duration-300">
              Login
            </a>
          </li>
        </ul>
        {/* Navigation Links (Visible only for desktop) */}
        <ul
          className="hidden md:flex flex-wrap mx-4 md:mx-0 md:px-0"
          style={{ textAlign: "left" }}
        >
          <li className="px-4">
            <a href="#" className="text-white text-lg transition duration-300">
              Home
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-white text-lg transition duration-300">
              About Us
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-white text-lg transition duration-300">
              Products
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-white text-lg transition duration-300\">
              Query
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-white text-lg transition duration-300">
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
