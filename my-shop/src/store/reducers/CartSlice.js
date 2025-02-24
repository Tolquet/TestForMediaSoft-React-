import { createSlice } from "@reduxjs/toolkit";


const loadCartFromLocalStorage = () => {
    try {
        const cartData = localStorage.getItem("cart");
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        console.error("Ошибка загрузки корзины:", error);
        return [];
    }
};

const saveCartToLocalStorage = (cartItems) => {
    try {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (error) {
        console.error("Ошибка сохранения корзины:", error);
    }
};

const initialState = {
    cartItems: loadCartFromLocalStorage(), 
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
            saveCartToLocalStorage(state.cartItems); 
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            saveCartToLocalStorage(state.cartItems); 
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find((p) => p.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
            saveCartToLocalStorage(state.cartItems); 
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find((p) => p.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter((p) => p.id !== action.payload);
            }
            saveCartToLocalStorage(state.cartItems); 
        },
        clearCart: (state) => {
            state.cartItems = [];
            saveCartToLocalStorage(state.cartItems); 
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
