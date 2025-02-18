
import { useSelector, useDispatch } from "react-redux";
import { sortProducts, setSearchTerm } from "../store/reducers/ProductsSlice";


export default function ProductsList() {
  const dispatch = useDispatch();
  const { products, sortOrder, searchTerm } = useSelector((state) => state.products);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Поле поиска */}
      <input
        type="text"
        placeholder="Поиск по названию..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        className="w-full p-2 border rounded mb-4"
      />

      {/* Кнопка сортировки */}
      <button
        onClick={() => dispatch(sortProducts())}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        Сортировать по цене ({sortOrder === "asc" ? "⬆" : "⬇"})
      </button>

      {/* Список товаров */}
      <ul className="space-y-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="p-2 border rounded">
              <div>{product.name}</div>
              <div>{product.price} ₽</div>
            </li>
          ))
        ) : (
          <p className="text-gray-500">Ничего не найдено</p>
        )}
      </ul>
    </div>
  );
}