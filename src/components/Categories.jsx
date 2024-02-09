import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../slices/searchSlices.js";

const Categories = ({ products }) => {
  const dispatch = useDispatch();

  const uniquedata = (data) => {
    let newValue = data.map((items) => {
      return items.category;
    });

    return (newValue = [...new Set(newValue)]);
  };
  const Categorydata = uniquedata(products);
  console.log(Categorydata);

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-10 lg:ml-20 mb-7">
        {Categorydata.map((specificCategories, index) => (
          <div key={index} onClick={() => handleCategoryClick(specificCategories)} 
               className="pt-4 h-12 md:ml-6 text-center w-36">
            <div className="bg-blue-400 rounded-lg py-2 font-bold hover:bg-blue-500 hover:text-white cursor-pointer">
              <h1>{specificCategories}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
