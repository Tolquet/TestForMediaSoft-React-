import { createSlice } from "@reduxjs/toolkit";

// Функция для загрузки корзины из LocalStorage
const loadCartFromLocalStorage = () => {
    try {
        const cartData = localStorage.getItem("cart");
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        console.error("Ошибка загрузки корзины:", error);
        return [];
    }
};

// Функция для сохранения корзины в LocalStorage
const saveCartToLocalStorage = (cartItems) => {
    try {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (error) {
        console.error("Ошибка сохранения корзины:", error);
    }
};

const initialState = {
    cartItems: loadCartFromLocalStorage(), // Загружаем корзину при старте
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find((p) => p.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            saveCartToLocalStorage(state.cartItems); // Сохраняем в LocalStorage
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            saveCartToLocalStorage(state.cartItems); // Сохраняем в LocalStorage
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find((p) => p.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
            saveCartToLocalStorage(state.cartItems); // Сохраняем в LocalStorage
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find((p) => p.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter((p) => p.id !== action.payload);
            }
            saveCartToLocalStorage(state.cartItems); // Сохраняем в LocalStorage
        },
        clearCart: (state) => {
            state.cartItems = [];
            saveCartToLocalStorage(state.cartItems); // Очищаем LocalStorage
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
