import './CartButton.css';


import { uiActions } from '../../store/ui-slice';
import { useDispatch } from 'react-redux'


const CartButton = (props) => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(uiActions.toggle())

  }
  return (
    <button className='button' onClick={handleClick}>
      <span>My Cart</span>
      <span className='badge'>1</span>
    </button>
  );
};

export default CartButton;

