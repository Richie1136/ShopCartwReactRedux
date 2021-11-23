import Cart from './components/cart/Cart';
import Layout from './components/layout/Layout';
import Products from './components/products/Products';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { uiActions } from './store/ui-slice'
import Notification from './components/notification/Notification';

let Initial = true

function App() {
  const dispatch = useDispatch()
  const isUi = useSelector(state => state.ui.cartVisible)

  const cart = useSelector(state => state.cart)

  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending Data'
      }))
      const response = await fetch('https://react-foodapp-ac153-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })

      if (!response.ok) {
        throw new Error("Sending data failed")
      }
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Successful',
        message: 'Data has been sent successfully'
      }))
    }

    if (Initial) {
      Initial = false
      return
    }

    sendCartData().catch(err => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error occured',
        message: 'Sending data failed.'
      }))
    })
  }, [cart, dispatch])
  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {isUi && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;