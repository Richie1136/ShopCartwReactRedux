import Card from '../card/Card';
import './ProductItem.module.css';

import { cartActions } from '../../store/cart-slice';
import { useDispatch } from 'react-redux'

const ProductItem = ({ title, price, description, id }) => {


  const dispatch = useDispatch()

  const addItemToCart = () => {
    dispatch(cartActions.addItemToCart({
      id, title, price
    }))
  }

  const removeItemFromCart = () => {
    dispatch(cartActions.removeItemFromCart())
  }


  return (
    <li className='item'>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className='price'>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className='actions'>
          <button onClick={addItemToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;