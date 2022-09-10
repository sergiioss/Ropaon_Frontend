import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const adminSlice = createSlice({
    name: 'product',
    initialState: {
        name: "",
        size: "",
        product_price: "",
        url: "",
        color: "",
        gender: "",
        id: ""
    },
    reducers: {
        registerProduct: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        newId: (state, action) => {
            state.id = action.payload
            state.name = action.payload
        },
    },
});

export const idProduct = (event) => async (dispatch) => {
    try {
        dispatch(newId({
            id: event.id,
            name: event.name
        }))

    } catch (error) {
        console.log(error)
    }
}

export const { registerProduct, newId } = adminSlice.actions

export const selectProduct = (state) => state.product

export default adminSlice.reducer;