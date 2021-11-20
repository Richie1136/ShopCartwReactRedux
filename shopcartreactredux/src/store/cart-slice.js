import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItemToCart(state, action) {
      const Newitem = action.payload
      const existingItem = state.items.find(item => item.id === Newitem.id)
      if (!existingItem) {
        state.items.push({ itemId: Newitem.id, price: Newitem.price, quantity: 1, totalPrice: Newitem.price, name: Newitem.title })
      }
    },
    removeItemFromCart(state) {
      state.cartVisible = !state.cartVisible
    }
  }
})


export const cartActions = cartSlice.actions



export default cartSlice