import React from "react";
import { useSelector } from "react-redux";
import CardsContainer from "../CardsContainer/CardsContainer";
import style from "./SearchedProducts.module.css";

const SearchedProducts = () => {
  const searchedProducts = useSelector((state) => state.products);

  return (
      <article className={style.contenedor}>
          <div className={`d-flex justify-content-center ${style.blurFondoSearch}`}>
            <div>
              <h2>Productos Encontrados:</h2>
              <CardsContainer products={searchedProducts} />
            </div>
          </div>
      </article>
  );
};

export default SearchedProducts;