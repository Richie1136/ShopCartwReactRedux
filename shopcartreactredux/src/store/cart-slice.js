import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

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


const sendData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending Data'
      }))

    const sendRequest = async () => {
      const response = await fetch('https://react-foodapp-ac153-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })

      if (!response.ok) {
        throw new Error("Sending data failed")
      }
    }
    try {

      await sendRequest()
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Successful',
        message: 'Data has been sent successfully'
      }))
    } catch (err) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error occured',
        message: 'Sending data failed.'
      }))
    }

  }
}


export const cartActions = cartSlice.actions



export default cartSlice