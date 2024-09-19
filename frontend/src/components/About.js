import React from 'react';

export default function AboutUs(){
  return (
    <div>

    <div className="container mt-5">
      <h1 className="text-center mb-4">About Us</h1>
      
      <div className="card text-center mb-4">
        <div className="card-body">
          <h2 className="card-title display-4">Our Mission</h2>
          <p className="card-text">
            We strive to offer high-quality products that meet the needs of our customers while providing exceptional service. Our commitment to innovation and customer satisfaction drives everything we do.
          </p>
          {/* <a className="btn btn-primary" href="#contact">Contact Us</a> */}
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card">
            
            <div className="card-body">
              {/* <h5 className="card-title">Jane Doe</h5> */}
              <p className="card-text " style={{fontFamily:"OpenSans-Light" , fontSize:"130%"}}>
              Welcome to E-Buy, your one-stop shop for the latest and greatest in electronic devices.Whether you 're a tech enthusiast, a professional, or just looking for the perfect gadget to make life easier, we've got you covered.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            
            <div className="card-body">
              <h5 className="card-title">John Smith</h5>
              <p className="card-text">
                John is our Chief Technology Officer. He leads the tech team and ensures that we stay ahead with the latest technological advancements.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            
            <div className="card-body">
              <h5 className="card-title">John Smith</h5>
              <p className="card-text">
                John is our Chief Technology Officer. He leads the tech team and ensures that we stay ahead with the latest technological advancements.
              </p>
            </div>
          </div>
        </div>

      </div>
      
      <div className="row mb-5" id="contact">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Contact Us</h2>
              <p className="card-text text-center">
                If you have any questions or need further information, feel free to reach out to us at:
              </p>
              <p className="text-center">
                <strong>Email:</strong> support@ecommerce.com<br />
                <strong>Phone:</strong> +1 (234) 567-8901
              </p>
              <div className="text-center">
                <a className="btn btn-primary" href="mailto:support@ecommerce.com">Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


