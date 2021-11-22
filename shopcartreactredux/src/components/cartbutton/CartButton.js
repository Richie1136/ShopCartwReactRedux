import './CartButton.css';

import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux'


const CartButton = (props) => {

  const dispatch = useDispatch()
  const quantity = useSelector(state => state.cart.totalQuantity)

  const handleToggle = () => {
    dispatch(uiActions.toggle())
  }
  return (
    <button className='button' onClick={handleToggle}>
      <span>My Cart</span>
      <span className='badge'>{quantity}</span>
    </button>
  );
};

export default CartButton;

