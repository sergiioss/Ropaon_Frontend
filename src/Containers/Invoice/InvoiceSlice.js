import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const InvoiceSlice = createSlice({
    name: 'purchase',
    initialState: {
        Purchase: "",
    },
    reducers: {
        addPurchase: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
    },
},);


export const { addPurchase } = InvoiceSlice.actions

export const selectAddPurch = (state) => state.purchase

export default InvoiceSlice.reducer;