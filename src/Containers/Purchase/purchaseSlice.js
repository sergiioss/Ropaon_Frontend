import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: {
        Purchase: [],
        id:[]
    },
    reducers: {
        arrayPurchase: (state, action) => {
            state.Purchase.push(action.payload)
        }
        },
    },
);

export const { arrayPurchase } = purchaseSlice.actions

export const selectPurchase = (state) => state.purchase

export default purchaseSlice.reducer;