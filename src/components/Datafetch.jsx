import React, { useState, useEffect } from "react";
import MapProduct from "./MapProduct";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import Categories from "./Categories";

const Datafetch = () => {
  const [bndata, setBndata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const search = useSelector((state) => state.search.searchQuery);
  const categoriesSearch = useSelector(
    (state) => state.search.selectedCategory
  );

  const fetchData = async () => {
    try {
      //https://dummyjson.com/products
      //http://localhost:4000/data
      const response = await fetch("https://dummyjson.com/products");
      const responseData = await response.json();
      console.log(responseData);
      setBndata(responseData.products);
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProducts = bndata.filter((item) => {
    const titleMatches = item.title.toLowerCase().includes(search.toLowerCase());
    const categoryMatches = !categoriesSearch || item.category === categoriesSearch;
           return titleMatches && categoryMatches;
  });

  console.log(filteredProducts);

  //pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Categories products={bndata} />

      <div className="flex flex-wrap pl-14">
        {currentItems?.map((products) => (
          <MapProduct key={products.id} products={products} />
        ))}
      </div>
      {/* Pagination */}
      <Pagination itemsPerPage={itemsPerPage} totalItems={bndata.length} paginate={paginate}/>
    </>
  );
};

export default Datafetch;
