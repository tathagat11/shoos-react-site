import { useEffect, useState } from "react";
import ItemCart from "./ItemCart";
import products from "../../data/products.json";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cart-fet")
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const updateCart = (code, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.code === code) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
  
    setCart(updatedCart);
  
    fetch("http://localhost:3001/update-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCart),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error("Error updating cart:", error);
      });
  };
  

  const calculateTotals = () => {
    let subtotal = 0;
    cart.forEach((item) => {
      const product = products.find((prod) => prod.code === item.code);
      if (product) {
        subtotal += product.price * item.quantity;
      }
    });
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const { subtotal, tax, total} = calculateTotals()

  
  return (
    <div>
      <div className="cartWrapper">
        <div className="shopping-cart">
          <div className="title">Shopping Bag</div>
          {cart.map((item, index) => (
            <ItemCart 
            key={index} 
            code={item.code} 
            quantity={item.quantity} 
            updateCart={updateCart}
            />
          ))}
        </div>

        <div className="cart-totals">
          <div className="cartTotal">
            <div className="cart-totals__labels">Sub Total:</div>
            <div className="cart-totals__values">{"₹" + subtotal}</div>
          </div>
          <div className="cartTotal">
            <div className="cart-totals__labels">Tax:</div>
            <div className="cart-totals__values">{"₹" + tax}</div>
          </div>
          <div className="cartTotal">
            <div className="cart-totals__labels">To Pay:</div>
            <div className="cart-totals__values">{"₹" + total}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
