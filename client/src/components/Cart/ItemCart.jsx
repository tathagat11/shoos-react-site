/* eslint-disable react/prop-types */
import products from "../../data/products.json";

function ItemCart({ code, quantity, updateCart }) {
  const incrementQuantity = () => {
    updateCart(code, quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      updateCart(code, quantity - 1);
    }
  };

  return (
    <div>
      <div className="item">
        <div className="image">
          <img
            src={"/public/shoe" + code + ".png"}
            alt=""
            className="CPImage"
          />
        </div>

        <div className="description">
          <span>{products[code - 1].name}</span>
          <span>Red</span>
        </div>

        <div className="quantity">
          <i className="fa-solid fa-minus plus-minus" onClick={decrementQuantity}></i>
          <input readOnly="readonly" type="text" name="name" value={quantity} />
          <i className="fa-solid fa-plus plus-minus" onClick={incrementQuantity}></i>
        </div>

        <div className="total-price">
          {"₹" + products[code - 1].price * quantity}
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
