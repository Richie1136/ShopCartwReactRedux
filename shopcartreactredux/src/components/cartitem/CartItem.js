import './CartItem.css';

import { cartActions } from '../../store/cart-slice';
import { useDispatch, useSelector } from 'react-redux'

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }))
  }

  const handleDecrement = () => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  return (
    <li className='item'>
      <header>
        <h3>{title}</h3>
        <div className='price'>
          ${total.toFixed(2)}{' '}
          <span className='itemprice'>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className='details'>
        <div className='quantity'>
          x <span>{quantity}</span>
        </div>
        <div className='actions'>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
