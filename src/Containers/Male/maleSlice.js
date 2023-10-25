import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const maleSlice = createSlice({
    name: 'genders',
    initialState: {
        Gender: [],
        Error:""
    },
    reducers: {
        addGender: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
    },
},);

export const female = (event) => async (dispatch) => {
    try {
        const fem = await axios.get(`http://sergi.lighthousemarketing.es/public/api/productgenderf`/* 'http://localhost:8000/api/productgenderf' */);
        if (!fem.data.succes === true) {
            dispatch(addGender({
                Error: "error"
            }))

        } else {
            dispatch(addGender({
                Gender: fem.data.message,
                isError: ""
            }))
        }
    } catch (error) {
        console.log(error)
    }
}
export const male = (event) => async (dispatch) => {
    try {
        const mal = await axios.get(`http://sergi.lighthousemarketing.es/public/api/productgenderm`/* 'http://localhost:8000/api/productgenderm' */);
        if (!mal.data.succes === true) {
            dispatch(addGender({
                Error: "error"
            }))

        } else {
            dispatch(addGender({
                Gender: mal.data.message,
                isError: ""
            }))
        }
    } catch (error) {
        console.log(error)
    }
}

export const { addGender } = maleSlice.actions

export const selectGender = (state) => state.genders

export default maleSlice.reducer;