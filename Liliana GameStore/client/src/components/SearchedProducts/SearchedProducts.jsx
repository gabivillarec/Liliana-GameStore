import React from "react";
import { useSelector } from "react-redux";
import CardsContainer from "../../CardsContainer/CardsContainer";
import style from "./SearchedProducts.module.css";

const SearchedProducts = () => {
  const searchedProducts = useSelector((state) => state.products);

  return (
    <div>
      <h2>Productos Encontrados:</h2>
      <CardsContainer products={searchedProducts} />
    </div>
  );
};

export default SearchedProducts;