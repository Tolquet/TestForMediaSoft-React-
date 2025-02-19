import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        { id: 1, name: "Магическое зелье", categorySlug: "potions", price: 50 },
        { id: 2, name: "Эликсир маны", categorySlug: "potions", price: 75 },
        { id: 3, name: "Кожаный доспех", categorySlug: "clothing", price: 200 },
        { id: 4, name: "Стальной меч", categorySlug: "weapons", price: 500 },
        { id: 5, name: "Лук охотника", categorySlug: "weapons", price: 300 }
    ],
    searchTerm: "",
    sortOrder: "asc" // "asc" - по возрастанию, "desc" - по убыванию
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        sortProducts: (state) => {
            if (!state.list || !Array.isArray(state.list)) return; // Защита от ошибки
            
            state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
            state.list = [...state.list].sort((a, b) =>
                state.sortOrder === "asc" ? a.price - b.price : b.price - a.price
            );
        }
    }
});

export const { setSearchTerm, sortProducts } = productSlice.actions;
export default productSlice.reducer;
