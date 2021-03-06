import Card from '../card/Card';
import './Cart.css';
import CartItem from '../cartitem/CartItem';
import { useSelector } from 'react-redux'

const Cart = (props) => {

  const cartItems = useSelector((state) => state.cart.items)
  return (
    <Card className='cart'>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              title: item.name,
              id: item.id,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;