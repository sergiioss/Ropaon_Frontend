import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const ftituloSlice = createSlice({
    name: 'prod',
    initialState: {
        prod: [],
        isError: ""
    },
    reducers: {
        filtra: (state, action) => {
            state.prod = action.payload
            state.isError = action.payload
        },
        isError: (state, action) => {
            state.isError = action.payload
        },
    },
});

export const productos = (event) => async (dispatch) => {
    try {
        const product = await axios.get(`https://sergi.lighthousemarketing.es/public/api/productname/${event}`/* `http://localhost:8000/api/productname/${event}` */);
        if (!product.data.succes === true) {
            dispatch(isError({
                isError: "Error"
            }))

        } else {
            dispatch(filtra({
                prod: product.data.message,
                isError: ""
            }))
        }

    } catch (error) {
        console.log(error)
    }
};




export const { filtra, isError} = ftituloSlice.actions

export const selectFiltra = (state) => state.prod

export default ftituloSlice.reducer;