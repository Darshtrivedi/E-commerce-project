import React, { useState , useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ProductDisplay = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 18;


//   useEffect(()=>{
//   var products = localStorage.getItem("products")
//   if (products) {
//     props.setProducts(JSON.parse(products)); // Set products from localStorage
//   }
//   // Calculate the products to display on the current page
  
// },[])



useEffect(() => {
  // On component mount, check if products exist in localStorage
  const savedProducts = localStorage.getItem('products');
  if (savedProducts) {
    props.setProducts(JSON.parse(savedProducts)); // Set products from localStorage
  }

  // Optionally retrieve and set the search term
  const savedSearchTerm = localStorage.getItem('searchTerm');
  if (savedSearchTerm) {
    console.log('Last search term:', savedSearchTerm);
  }

}, [props]);

const products = props.products || [];

// Perform slicing based on pagination
const startIndex = currentPage * itemsPerPage;
const selectedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="container my-4">
      <div className="row">
        
         {selectedProducts.map((product) => (
        
          <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
            <Link to={`/products/${product.product_id}`} style={{ textDecoration: 'none' }}>
            <div className="card h-100">
              <img
                src={product.image_path}
                className="card-img-top"
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' , borderBottom:"2px solid black" }} // Responsive image size
              />
              <div className="card-body">
                <p className=" card-title"><b>{product.name.slice(0,60)}...</b></p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price} <br />
                  <strong>Discount:</strong> {product.discount}% <br />
                  <strong>Company:</strong> {product.company_name} <br />
                  <strong>Category:</strong> {product.category} <br />
                  <strong>Description:</strong> {product.description} <br />

                  <strong>Ratings:</strong> {product.ratings} ({product.number_of_ratings} reviews) <br />
                  <strong>Stock:</strong> {product.stock} left in stock
                </p>
              </div>
              <div className="card-footer">
                <center>
                <button className="btn btn-primary mx-2 bg-dark">Add to Cart</button>
                <Link to="/" className="btn btn-secondary mx-2 bg-success">Buy Now</Link>
                </center>
              </div>
            </div>
            </Link>
          </div>
         
        ))}
  
      
      
      </div>

      {/* Pagination Component */}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(products.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default ProductDisplay;
