import React from 'react'
import { FaCartPlus } from "react-icons/fa6";

const MapProduct = ({ products }) => {
    const { title, price, images, discountPercentage ,rating } = products;


  return (
    <>
      <div className="relative ml-10 mb-5 flex w-60 max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <span className="relative mx-3 mt-3 flex h-40 overflow-hidden">
          <img className="object-cover" src={images[0]} alt="product"/>
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{discountPercentage}% OFF</span>
        </span>
        <div className="mt-4 px-5 pb-5">
          <h5 className="tracking-tight text-slate-900">{title}</h5>

          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">{price}</span>
            </p>
            <div className="flex items-center">
              <span>Rating</span>
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating}</span>
            </div>
          </div>
          <div>
            <button className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <FaCartPlus size={20} />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default MapProduct