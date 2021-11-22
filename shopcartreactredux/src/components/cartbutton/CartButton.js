import './CartButton.css';

import { uiActions } from '../../store/ui-slice';
import { useDispatch } from 'react-redux'


const CartButton = (props) => {

  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(uiActions.toggle())

  }
  return (
    <button className='button' onClick={handleToggle}>
      <span>My Cart</span>
      <span className='badge'>1</span>
    </button>
  );
};

export default CartButton;

