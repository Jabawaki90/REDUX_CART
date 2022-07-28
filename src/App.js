import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const toggle = useSelector((state) => state.cart.cartToggle);
  const myCartLength = useSelector(state=>state.cart.myCartList.length)
  return (
    <Layout>
      {toggle &&  myCartLength>0 && <Cart />}

      <Products />
    </Layout>
  );
}

export default App;
