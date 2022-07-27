import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";

const Products = (props) => {
  const cartList = useSelector((state) => state.cart.item);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {cartList.map((item) => {
          const { id } = item;
          return <ProductItem key={id} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default Products;
