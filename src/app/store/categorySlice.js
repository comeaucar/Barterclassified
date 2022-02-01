import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    category: [],
    status: 'idle',
}



export const categorySlice = createSlice({
    name: 'Category',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        addCategory: (state, action) => {
            state.category.push(action.payload);
        }
    }
})

export const {setCategory, addCategory} = categorySlice.actions
export default categorySlice.reducer