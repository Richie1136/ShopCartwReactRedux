import Cart from './components/cart/Cart';
import Layout from './components/layout/Layout';
import Products from './components/products/Products';
import { useSelector } from 'react-redux'


function App() {

  const isUi = useSelector(state => state.ui.cartVisible)
  return (
    <Layout>
      {isUi && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;