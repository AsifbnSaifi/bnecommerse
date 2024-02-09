import React from "react";
import Bntech from "../Assets/Bntech.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setSearch } from "../slices/searchSlices.js";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <nav className="border-gray-200 px-2 mb-10">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <img className="w-40 h-20" src={Bntech} alt="not load" />
          <div className="flex md:order-2">
            <div
              className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
              id="mobile-menu-3">
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <p className="block pl-3 pr-4 py-2 md:p-0 cursor-pointer rounded">
                    Home
                  </p>
                </li>
                <li>
                  <button className="px-4 rounded-md">Login</button>
                </li>
                <li>
                  <div className="flex space-x-2 cursor-pointer">
                    <FaCartPlus size={20} />
                    <p>Cart</p>
                  </div>
                </li>
              </ul>
            </div>

            <button
              data-collapse-toggle="mobile-menu-3"
              type="button"
              className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
            >
              <RxHamburgerMenu />
            </button>
          </div>

          <div className="relative mr-3 md:mr-0 hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoMdSearch size={20} />
            </div>
            <input
              type="text"
              onChange={handleSearch}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] pl-10 p-2"
              placeholder="Search..."
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
