import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const myCartList = useSelector(state => state.cart.myCartList)

  const totalItem = myCartList.map(item=> item.quantity).reduce((prev,next)=> prev+next,0)

  const toggleHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;
