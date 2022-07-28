import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./store";
import { useEffect } from "react";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.cart.cartToggle);
  const myCartLength = useSelector((state) => state.cart.myCartList.length);

  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.cart.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      const response = await fetch(
        "https://redux-cart-79baa-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sending cart data Successfully!",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggle && myCartLength > 0 && <Cart />}

        <Products />
      </Layout>
    </>
  );
}

export default App;
