import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const adminSlice = createSlice({
    name: 'product',
    initialState:{
        name: "",
        size: "",
        product_price:"",
        url:"",
        color:"",
        gender:"",
    },
    reducers:{
        registerProduct: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
    },
});


export const {registerProduct} = adminSlice.actions

export const selectProduct = (state) => state.product

export default adminSlice.reducer;