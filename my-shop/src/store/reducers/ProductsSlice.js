import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        { id: 1,name: "Магическое зелье", categorySlug: "potions", price: 50,imag: "/src/assets/products/фласка хп.svg"  },
        { id: 2,name: "Эликсир маны", categorySlug: "potions", price: 75 ,imag: "/src/assets/products/фласка мп.svg" },
        { id: 3,name: "Шляпа", categorySlug: "clothing", price: 200,imag: "/src/assets/products/Шляпасол.svg"  },
        { id: 4,name: "Стальной меч", categorySlug: "weapons", price: 500,imag: "/src/assets/products/Меч.svg" },
        { id: 5,name: "Двойные Катаны", categorySlug: "weapons" , price: 1000,imag: "/src/assets/products/катана.svg" },
        { id: 6,name: "Зелье Скорости", categorySlug: "potions", price: 150,imag: "/src/assets/products/Фласка на скр.svg"  },
        { id: 7,name: "Соломенная шляпа(Пиратская)", categorySlug: "clothing", price:105 ,imag: "/src/assets/products/Шляпасол.svg"},
        
    ],
    searchTerm: "",
    sortOrder: "asc" 
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        sortProducts: (state) => {
            if (!state.list || !Array.isArray(state.list)) return; 
            
            state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
            state.list = [...state.list].sort((a, b) =>
                state.sortOrder === "asc" ? a.price - b.price : b.price - a.price
            );
        }
    }
});

export const { setSearchTerm, sortProducts } = productSlice.actions;
export default productSlice.reducer;
