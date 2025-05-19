import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './EachProduct.css'; // Make sure to create and import a CSS file

const EachProduct = () => {
  const { state } = useLocation();
  const { image, title, id, description, price, rating, category } = state;

useEffect(()=>{
document.title="product"
},[])
  return (
    <div className='each-product-page'>
    <div className="each-product-container">
      <div className="each-product-image-wrapper">
        <img src={image} alt='Product' className="each-product-image" />
      </div>
      <div className="each-product-details">
        <h1 className="each-product-title">Title: {title}</h1>
        <h5 className="each-product-category"><strong>Category:</strong>{category}</h5>
        <p className="each-product-price"><strong>Price:</strong> &#8377;{price}</p>
        <p className="each-product-rating"><strong>Rating:</strong> {rating.rate} </p>
        <p className="each-product-description"><strong>Description: </strong>{description}</p>
        <div >
            <button className='each-product-button1'>Add to cart</button>
            <button className='each-product-button2'>Buy now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EachProduct;
