import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BASE_URL } from "../../utils/constants";

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async (_, thunkAPI) =>{
        try {
            const res = await axios(`${BASE_URL}/categories`);
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);   
        }
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list:[],
        isLoading: false
    },
    extraReducers: (builder) =>{
        builder.addCase(getCategories.fulfilled, (state, { payload }) =>{
            state.isLoading = false;
        });
        builder.addCase(getCategories.pending, (state, { payload }) =>{
            state.isLoading = true;
        });
        builder.addCase(getCategories.rejected, (state) =>{
            state.isLoading = false;
            console.log("Error")
        });


    }
})

export default categoriesSlice.reducer