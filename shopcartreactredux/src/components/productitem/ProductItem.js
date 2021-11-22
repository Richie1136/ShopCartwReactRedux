import Card from '../card/Card';
import './ProductItem.module.css';

import { cartActions } from '../../store/cart-slice';
import { useDispatch } from 'react-redux'

const ProductItem = ({ title, price, description, id }) => {

  const dispatch = useDispatch();

  const addToCartHandler = () => {


    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className='item'>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className='price'>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className='actions'>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
