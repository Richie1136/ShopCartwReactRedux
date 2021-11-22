import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const Newitem = action.payload
      const existingItem = state.items.find(item => item.id === Newitem.id)
      state.totalQuantity++
      if (!existingItem) {
        state.items.push({ id: Newitem.id, price: Newitem.price, quantity: 1, totalPrice: Newitem.price, title: Newitem.name })
      } else {
        existingItem.quantity++
        existingItem.totalPrice = existingItem.totalPrice + Newitem.price
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload
      const existingItem = state.items.find(item => item.id === id)
      state.totalQuantity--
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
    }
  }
})


export const cartActions = cartSlice.actions



export default cartSlice