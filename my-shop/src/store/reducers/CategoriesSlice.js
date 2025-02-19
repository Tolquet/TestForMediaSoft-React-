import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        { id: 1, name: "Зелья", slug: "potions" },
        { id: 2, name: "Одежда", slug: "clothing" },
        { id: 3, name: "Оружие", slug: "weapons" }
    ]
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {}
});

export default categoriesSlice.reducer;
