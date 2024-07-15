import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import "./ProductCard.css";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  
  const [inCart, setInCart] = useState(false);
  const { name, price, image } = product;
  const cartItems = useSelector((state) => state.cartState.cartList);

  useEffect(() => {
    const ProductInCart=cartItems.find((currentItem)=>currentItem.id===product.id)
    if(ProductInCart){
      setInCart(true)
    }
    else{
      setInCart(false)
    }
  }, [cartItems,product.id]);

  const dispatch = useDispatch();
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {inCart ? (
          <button    style={{
            background: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,65,54,1) 50%, rgba(255,105,97,1) 100%)",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
          }}  onClick={() => dispatch(remove(product))}>Remove</button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
