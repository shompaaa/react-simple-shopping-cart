import React from 'react';

const Product = ({product,handleAddToCart}) => {
    const {image,title,description,price} = product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h2>{title.slice(0,15)}</h2>
            <p>{description}</p>
            <div className="product-footer">
                <button onClick={()=>handleAddToCart(product)}>Add To Cart</button>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Product;