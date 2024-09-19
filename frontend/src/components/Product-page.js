import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { product_id } = useParams(); // Getting the product ID from the URL
  console.log(product_id)
  const [product, setProduct] = useState(null);
  const [message,setMessage] = useState("");

  useEffect(() => {
    // Fetch product details from the Django backend
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/products/${product_id}/`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

   
    fetchProduct();
  }, [product_id]);

  

// Function for server didn't respond

useEffect(()=>{
  var timeout = setTimeout(()=>{
    setMessage("Oops! Server down. ");
  },3000)
  return ()=>{clearTimeout(timeout);}
},[])

  if (!product) {

    return (
    <div>
      Loading...
      <br/>
      <h1>{message}</h1>
    </div>);
  }

  return (
    <div>

    
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image_path} alt="not available" className="img-fluid rounded" />
        </div>
        <div className="col-md-6" style={{borderLeft:"1px solid black"}}>
          <h1>{product.name}</h1>
          <p style={{color:"blue"}}>{product.description}</p>
          <h3>₹{product.price}</h3>
          <span className="text-dark">
                    {'★'.repeat(Math.floor(product.ratings))}
                    {'☆'.repeat(5 - Math.floor(product.ratings))}  ({product.ratings})
          </span>
          <div className="mt-4">
            <button className="btn btn-warning " onClick={() => console.log('Added to cart')}>
              Add to Cart
            </button>
            <button className="btn btn-success mx-3" onClick={() => console.log('Buying now')}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;
