import style from "./AdminItem.module.css";

const Buttons = ({ handleFilter, subcategories, handleBtnFiltrar, brand }) => {
  return (
    <div className={style.productsContainer}>
      <div className="container d-flex flex-column mb-4">
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2 mt-4">
          <select className={style.selects} name="category" onChange={handleFilter} >
            <option key="all-categories" value="" >Categorías</option>
            <option key="accessories" value="Accessories" >Accesorios</option>
            <option key="hardware" value="Hardware" >Hardware</option>
            <option key="video-games" value="VideoGames" >Videojuegos</option>
          </select>
          <select className={style.selects} name="subcategory" onChange={handleFilter} >
            <option key="all-subcategories" value="">Sub-Categorías</option>
            {subcategories?.sort((a, b) => a.name.localeCompare(b.name)).map((subcategory) => (
              <option key={subcategory.id} value={subcategory.name}>
                {subcategory.name}
              </option>
            ))}
          </select>
          <select className={style.selects} name="brand" onChange={handleFilter} >
            <option key="all-brands" value="">Marcas</option>
            {brand?.sort((a, b) => a.name.localeCompare(b.name)).map((brand) => (
              <option key={brand.id} value={brand.name}>
                {brand.name}
              </option>
            ))}
          </select>
          <select className={style.selects} name="order" onChange={handleFilter} >
            <option value="">Precio</option>
            <option value="D">Min-Max</option>
            <option value="A">Max-Min</option>
          </select>
          <button
            className="btn btn-outline-info border-2"
            onClick={() => handleBtnFiltrar()}
          >
            Filtrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;