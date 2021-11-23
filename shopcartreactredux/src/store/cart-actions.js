import { uiActions } from "./ui-slice"
import { cartActions } from "./cart-slice"

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://react-foodapp-ac153-default-rtdb.firebaseio.com/cart.json')
      if (!response.ok) {
        throw new Error("Getting data failed")
      }
      const data = await response.json()
      return data
    }
    try {
      const cartData = await fetchData()
      dispatch(cartActions.replaceCart(cartData))
    } catch (err) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error occured',
        message: 'Fetching data failed.'
      }))
    }
  }
}

export const sendData = (cart) => {
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