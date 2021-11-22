import Cart from './components/cart/Cart';
import Layout from './components/layout/Layout';
import Products from './components/products/Products';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


function App() {

  const isUi = useSelector(state => state.ui.cartVisible)

  const cart = useSelector(state => state.cart)

  useEffect(() => {
    fetch('https://react-foodapp-ac153-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart)
    })
  }, [cart])
  return (
    <Layout>
      {isUi && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;