import Cart from './components/cart/Cart';
import Layout from './components/layout/Layout';
import Products from './components/products/Products';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { uiActions } from './store/ui-slice'


function App() {
  const dispatch = useDispatch()
  const isUi = useSelector(state => state.ui.cartVisible)

  const cart = useSelector(state => state.cart)

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
      const data = await response.json()
      dispatch(uiActions.showNotification({
        status: 'Success',
        title: 'Successful',
        message: 'Data has been sent successfully'
      }))
    }
  }, [cart])
  return (
    <Layout>
      {isUi && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;