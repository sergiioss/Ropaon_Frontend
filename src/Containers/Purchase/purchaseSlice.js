import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: {
        Purchase: [],
        newSum: ""
    },
    reducers: {
        arrayPurchase: (state, action) => {
            state.Purchase.push(action.payload)
        },
        deletePurchase: (state, action) => {
            return {
                ...state,
                Purchase: []
            }
        },
    },
},);


export const { arrayPurchase, deletePurchase } = purchaseSlice.actions

export const selectPurchase = (state) => state.purchase

export default purchaseSlice.reducer;