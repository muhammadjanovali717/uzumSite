import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value:  JSON.parse(localStorage.getItem("uzum-cart")) ||  []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action)=>{
            let index = state.value.findIndex(i => i.id === action.payload.id)
            if(index < 0){
                state.value = [...state.value, action.payload]
                localStorage.setItem("uzum-cart", JSON.stringify(state.value))
            }
            else{
                state.value =  state.value.map((item, inx) => inx === index ? {...item, quantity: item.quantity + 1} : item)
              }
        },
        removeFromCart: (state, action)=>{
            state.value = state.value.filter(i => i.id !== action.payload.id)
            localStorage.setItem("uzum-cart", JSON.stringify(state.value))
        },
        decrementCart: (state, action)=>{
            let index = state.value.findIndex(i => i.id === action.payload.id)
            state.value =  state.value.map((item, inx) => inx === index ? {...item, quantity: item.quantity - 1} : item)
      }
    }
})

export const { addToCart, decrementCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
