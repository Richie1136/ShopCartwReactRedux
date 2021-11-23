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
    }

    if (Initial) {
      Initial = false
      return
    }

    sendCartData().catch(err => {

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