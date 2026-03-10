
import { useEffect, useState } from 'react'
import './App.css'
import Product from './components/Product/Product';

function App() {

//Use State
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

//Use Effect
  useEffect(()=>{
    fetch('./products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])


  const handleAddToCart = (p) =>{
    const isExist = cart.find(item => item.id == p.id)
    if(!isExist){
      setCart([...cart,p])
    }
    else{
      alert('Already Added')
    }
  }



  return (
    <>
      <div className="main-container">
        <div className="product-container">
          {
            products.map(product => <Product 
              key={product.id}
               product = {product}
               handleAddToCart = {handleAddToCart}
               ></Product>)
          }
        </div>
        <div className="cart-container">
          <div className="cart-title">
            <h5>Name: </h5>
            <h5>Price: ${}</h5>
          </div>
          {
            cart.map(item => 
            <div className='cart-info'>
              <h5>{item.title.slice(0,15)}</h5>
              <h5>${item.price}</h5>
            </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
