import style from './AdminItem.module.css'


const Buttons =  ({handleFilter ,subcategories , handleBtnFiltrar, brand}) => {
    return(
        <div className={style.productsContainer}>
                <div className="container d-flex flex-column">
                    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2 mt-4">
                        <select className={style.selects} name="category" onChange={handleFilter}>
                            <option value="">All Categories</option>
                            <option value="Hardware">Hardware</option>
                            <option value="VideoGames">VideoGames</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                        <select className={style.selects} name="subcategory" onChange={handleFilter}>
                            <option value="">All Subcategories</option>
                            {subcategories?.map((subcategory) => (
                                <option value={subcategory.name}>
                                {subcategory.name}
                                </option>
                            ))}
                        </select>
                        <select className={style.selects} name="brand" onChange={handleFilter}>
                            <option value="">All brands</option>
                            {brand?.map((brand) => (
                                <option value={brand.name}>
                                {brand.name}
                                </option>
                            ))}
                        </select>
                        <select className={style.selects} name="order" onChange={handleFilter}>
                            <option value="D">Min-Max</option>
                            <option value="A">Max-Min</option>
                        </select>
                        <button className="btn btn-outline-info border-2" onClick={() => handleBtnFiltrar()}>Filtrar</button>
                    </div>
                </div>
            </div>
    )
}

export default Buttons