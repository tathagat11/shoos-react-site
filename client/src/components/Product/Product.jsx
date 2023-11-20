import { useParams } from "react-router-dom";
import products from "../../data/products.json";

function Product() {
  const { productId } = useParams();
  const code = parseInt(productId[1]) - 1;

  const addToCart = () => {
    const newCartItem = {
      code: code + 1,
      quantity: 1,
    };

    fetch("http://localhost:3001/add-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCartItem),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product added to cart: ", data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  return (
    <div>
      <div className="product">
        <img
          src={`../../../public/shoe${code + 1}.png`}
          alt=""
          className="productImg"
        />
        <div className="productDetails">
          <h1 className="productTitle">{products[code].name}</h1>
          <h2 className="productPrice">₹{products[code].price}</h2>
          <p className="productDesc">{products[code].longDesc}</p>
          <div className="colors">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
          </div>
          <div className="sizes">
            <div className="size">UK 9</div>
            <div className="size">UK 10</div>
            <div className="size">UK 11</div>
            <div className="size">UK 12</div>
          </div>
          <button className="productButton" onClick={addToCart}>Add to cart.</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
