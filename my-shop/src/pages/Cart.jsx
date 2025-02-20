import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../store/reducers/CartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart);

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return <p className="cart-empty">Корзина пуста 🛒</p>;
    }

    return (
        <div className="cart-container">
            <h2 className="cart-title">🛒 Ваша корзина</h2>
            <ul className="cart-list">
                {cartItems.map((item) => (
                    <li key={item.id} className="cart-item">
                        <img className="cart-item-img" src={item.imag} alt={item.name} />
                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-price">{item.price} золота</div>
                            <div className="cart-item-quantity">
                                <button onClick={() => dispatch(decreaseQuantity(item.id))} className="cart-btn-minus">
                                    ➖
                                </button>
                                <span className="cart-item-count">{item.quantity}</span>
                                <button onClick={() => dispatch(increaseQuantity(item.id))} className="cart-btn-plus">
                                    ➕
                                </button>
                            </div>
                        </div>
                        <button onClick={() => dispatch(removeFromCart(item.id))} className="cart-btn-remove">
                            ❌
                        </button>
                    </li>
                ))}
            </ul>

            <div className="cart-summary">
                <div className="cart-total">Итого: {totalPrice} золота</div>
                <button onClick={() => dispatch(clearCart())} className="cart-btn-clear">
                    🗑 Очистить корзину
                </button>
            </div>

            <div className="cart-checkout">
                <Link to="/order" className="cart-btn-order">🛍 Оформить заказ</Link>
            </div>
        </div>
    );
}
