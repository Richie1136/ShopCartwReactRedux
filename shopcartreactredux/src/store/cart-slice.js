import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartVisible: false },
  reducers: {
    toggle(state) {
      state.cartVisible = !state.cartVisible
    }
  }
})


export const cartActions = cartSlice.actions



export default cartSlice