import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSearchTerm, sortProducts } from "../store/reducers/ProductsSlice";
import { addToCart } from "../store/reducers/CartSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const { slug } = useParams(); 

  const {
    list: products = [],
    sortOrder,
    searchTerm,
  } = useSelector((state) => state.products);


  const filteredProducts = (products || [])
    .filter((product) => product.categorySlug === slug)
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  if (!products.length) return null;

  return (
    <div className="product-list">
      <div className="search">
        <div className="catalog">
          <p>каталог</p>
        </div>
        <input
          type="text"
          placeholder="Поиск по названию..."
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className="w-full p-2 border rounded mb-4"
        />
      </div>

      <button onClick={() => dispatch(sortProducts())} className="sort-butt">
        Сортировать по цене ({sortOrder === "asc" ? "⬆" : "⬇"})
      </button>

      {filteredProducts.length > 0 ? (
        <ul className="products">
          {filteredProducts.map((product) => (
            <li key={product.id} className="product">
              <img className="img-product" src={product.imag} alt="" />
              <div>

                <div>{product.name}</div>
                <div>{product.price} Золота</div>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Добавить в корзину
              </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center mt-4">Ничего не найдено</p>
      )}
    </div>
  );
}
