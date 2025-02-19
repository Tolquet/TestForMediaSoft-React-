import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSearchTerm, sortProducts } from "../store/reducers/ProductsSlice";

export default function ProductList() {
  
  const dispatch = useDispatch();
  const { slug } = useParams(); // Получаем категорию из URL

  const { list: products = [], sortOrder, searchTerm } = useSelector(state => state.products);

  // Фильтрация товаров по категории и поиску
  const filteredProducts = (products || [])
      .filter(product => product.categorySlug === slug)
      .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);

  // Если товаров нет — просто ничего не рендерим
  if (!products.length) return null;

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

          {/* Если товары найдены */}
          {filteredProducts.length > 0 ? (
              <ul className="space-y-2">
                  {filteredProducts.map(product => (
                      <li key={product.id} className="p-2 border rounded">
                          <div>{product.name}</div>
                          <div>{product.price} Золота</div>
                      </li>
                  ))}
              </ul>
          ) : (
              <p className="text-gray-500 text-center mt-4">Ничего не найдено</p>
          )}
      </div>
  );
}