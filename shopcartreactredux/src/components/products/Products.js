import ProductItem from '../productitem/ProductItem';
import './Products.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', price: 6, title: 'This is it', description: 'Welcome to this fun' },
  { id: 'p2', price: 10, title: 'This is the one ', description: 'Welcome to the fun' }

]

const Products = (props) => {
  return (
    <section className='products'>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />

        ))}
      </ul>
    </section>
  );
};

export default Products;
