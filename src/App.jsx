import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product/Product";
import { ImCross } from "react-icons/im";

function App() {
  //Use State
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //Use Effect
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (p) => {
    const isExist = cart.find((item) => item.id == p.id);
    if (!isExist) {
      setCart([...cart, p]);
    } else {
      alert("Already Added");
    }
  };

  const handleDeleteFromCart = (id)=>{
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart)
  }

  return (
    <>
      <div className="main-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <div className="cart-title">
            <h5>Name: </h5>
            <h5>Price: ${}</h5>
          </div>
          {cart.map((item) => (
            <div className="cart-info">
              <h5>{item.title.slice(0, 15)}</h5>
              <h5>${item.price}</h5>
              <button onClick={()=>handleDeleteFromCart(item.id)}>
                <ImCross size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
