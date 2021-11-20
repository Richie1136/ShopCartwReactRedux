import Card from '../card/Card';
import './Cart.css';
import CartItem from '../cartitem/CartItem';

const Cart = (props) => {
  return (
    <Card className='cart'>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
