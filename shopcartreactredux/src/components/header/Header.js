import CartButton from '../cartbutton/CartButton';
import './Header.css';

const Header = (props) => {
  return (
    <header className='header'>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
