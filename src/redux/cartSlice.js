import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'cart',
    initialState:{
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action)=>{
            const timeId = new Date().getTime()
            //console.log(timeId)
            state.cartItems.push({
                id: timeId,
                projId: action.payload.proj.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.proj.price
            })
        },
        removeItemFromCart: (state, action)=>{
            console.log(action);
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItem
            )
        }
    }
})
export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) =>{
        return cartItems.totalPrice + total
    }, 0)
}

export const getCartItems = state => state.cart.cartItems; 
export const { addItemToCart } = slice.actions;
export const { removeItemFromCart } = slice.actions;
export default slice.reducer;