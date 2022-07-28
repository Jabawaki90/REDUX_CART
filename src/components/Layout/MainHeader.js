import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useSelector } from "react-redux";

const MainHeader = (props) => {

  const cart = useSelector(state => state.cart.myCartList.length)
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          {cart>0 &&  <li>
            <CartButton />
          </li>}
          
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
