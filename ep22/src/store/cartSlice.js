import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems : []
    },
    reducers:{
        addItems : (state,action) => {
            state.cartItems.push(action.payload) //action.payload is used to get value passed
        },
        removeItems : (state,action) => {
            state.cartItems.pop();
        },
        clearItems : (state,action) => {
            state.cartItems.length = 0;
        }
    }
})
// cartslice returns  2 items -> reducer, object(actions)
export const {addItems,removeItems,clearItems} = cartSlice.actions
export default cartSlice.reducer;