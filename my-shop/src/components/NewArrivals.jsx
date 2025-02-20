import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/reducers/CartSlice";
import { Link } from "react-router-dom";

export default function NewArrivals() {
    const dispatch = useDispatch();
    const { list = [] } = useSelector(state => state.products);
    const latestProducts = list.slice(-5).reverse();

    if (latestProducts.length === 0) {
        return <p className="text-gray-500 text-center">Новинок пока нет</p>;
    }

    return (
        <div className="news-box">
            <h2 className="news-title"> Новинки</h2>
            <ul className="news-items">
                {latestProducts.map(product => (
                    <li key={product.id} className="news-item">
                        <img 
                            className="news-img" 
                            src={product.imag} 
                            alt={product.name} 
                        />
                        <div className="news-info">
                            <Link to={`/product/${product.id}`} className="news-name">
                                {product.name}
                            </Link>
                            <div className="news-category">
                                Категория: {product.categorySlug}
                            </div>
                            <div className="news-price">💰 {product.price} золота</div>
                        </div>
                        <button 
                            onClick={() => dispatch(addToCart(product))}
                            className="news-btn"
                        >
                            🛒 В корзину
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

