import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const myCart = useSelector((state) => state.cart.myCartList);
  const totalPrice = myCart.map(item=>item.totalAmount).reduce((prev,next)=>prev + next,0)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {myCart.map((item) => {
          const { id } = item;
          return (
            <CartItem
              key={id}
              {...item}
              // item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
            />
          );
        })}
      </ul>
      <h2>{`Total Amount : $ ${totalPrice} `}</h2>
    </Card>
  );
};

export default Cart;
