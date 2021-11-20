import Card from '../card/Card';
import './ProductItem.module.css';

const ProductItem = ({ title, price, description }) => {

  return (
    <li className='item'>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className='price'>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className='actions'>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;