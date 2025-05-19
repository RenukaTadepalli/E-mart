import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ProductPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { MdFavoriteBorder } from "react-icons/md";
import { SearchContext } from "../SearchContext/SearchContext";
const ProductPage = () => {
  const [homeProducts, setHomeProducts] = useState([]);
  const[loading,setLoading]=useState(false);
  const {searchTerm}=useContext(SearchContext)

const navigate=useNavigate();

const handleIcon=()=>{
    alert("clicked")
}
  useEffect(() => {
    document.title = "Home";

    const getProducts = async () => {
        setLoading(true)
      try {
        const products = await axios.get("https://fakestoreapi.com/products");
        console.log(products);
        setHomeProducts(products.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
     getProducts();
  }, []);

const filteredProducts = homeProducts.filter((product) =>
  product.title.toLowerCase().includes((searchTerm?.toLowerCase() || ""))
);

  return (
    <div>
        <h1 className="mt-4">Products</h1>
    {loading?<div className="d-flex justify-content-center align-items-center"><Spinner variant="primary" /></div>:
<div>
     {filteredProducts.length === 0 ? (
      <div className="text-center mt-5">
        <h4>No products found</h4>
      </div>
    ) : (
      <div className="product-each-item">
        {filteredProducts.map((product, index) => {
          const { title, image, category, id } = product;
          return (
            <div
              key={index}
              className="border border-2 m-4 text-center product-details"
            >
              <img src={image} className="product-image" alt={title} />
              <p className="product-title">{title}</p>
              <div className="d-flex product-button-icon">
                <button
                  className="product-button"
                  onClick={() =>
                    navigate(`/product/${id}`, { state: product })
                  }
                >
                  View
                </button>
                <MdFavoriteBorder size={30} onClick={handleIcon} />
              </div>
            </div>
          );
        })}
      </div>
    )}
    </div>
    }
  
    </div>
  );
};

export default ProductPage;
