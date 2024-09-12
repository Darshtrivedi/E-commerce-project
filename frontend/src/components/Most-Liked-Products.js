import React,{useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../assets/most-liked.css"
export default function MostLikedProducts() {
  const[message,setMessage] = useState("")
  const[likedProducts,setProducts] = useState([])
  useEffect(()=>{
    var flag = 'hi';
    async function getLikedProducts(){
      try {
        const products = await axios.get("http://127.0.0.1:8000/products/product/")
        setProducts(products.data)
      } catch (error) {
        console.log(error)
      }
    }
    getLikedProducts()
    // if (flag == false){
    //    setTimeout(setMessage("server didn't respond"),1000)
    // }
  },[])

  if(likedProducts.length > 1){
  return (
    <div className="container mt-3">
      
      <div className="mb-4 ">
        <p style={{fontSize:"400%" }}>Most Liked Products</p>
      </div>
      <hr/>
      <div className="row">
        {likedProducts.map((product) => (
          <div key={product.product_id} className="col-md-4 mb-4">
            <Link to={`/products/${product.product_id}`} className="card  most-liked-div" style={{ textDecoration: 'none' }}>
              <img
                src={product.image_path}
                className="card-img-top"
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body" style={{borderTop:"1px solid black"}}>
                <h5 className="card-title">{product.name.substring(0,30)}...</h5>
                <p className="card-text">Price: {product.price}</p>
                <p className="card-text">Rating: 
                  <span className="text-warning">
                    {'★'.repeat(Math.floor(product.ratings))}
                    {'☆'.repeat(5 - Math.floor(product.ratings))}
                  </span>
                  ({product.ratings}) 
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
else{
  
  return(
    <div>
      <h1>Loading...</h1>
      
      <h2>{message}</h2>
    </div>
  )
}
}


