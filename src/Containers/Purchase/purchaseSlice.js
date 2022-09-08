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
        addSum: (state, action) => {
            return{
                ...state,
                newSum : action.payload
            }
        },
    },
},);

export const newCount = (event) => async (dispatch) => {
    try{
        console.log(event);
            dispatch(addSum({
                newSum: event
            }))
    }catch (error){
        console.log(error)
    }
};

export const { arrayPurchase, deletePurchase, addSum } = purchaseSlice.actions

export const selectPurchase = (state) => state.purchase

export default purchaseSlice.reducer;