import React from 'react';
import './index.css';
import './Home.css';

const Home = () => {
  return (
    <>
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>BEYOND YOUR IMAGINATION <br /><strong className="brand">PHONO MANIA</strong></h1>
                  <h4 className="my-3">Anything you want, you get</h4>
                  <div className="mt-4">
                    <a href="#" className="btn btn-info px-4 py-2 rounded">Get Started</a>
                  </div>
                </div>

                <div className="col-md-6 order-1 order-lg-2 d-flex justify-content-center align-items-center">
                  <img src="https://img.mobygeek.com/crop/1200x628/2020/10/14/1280x720-dddf.jpg" className="img-fluid" alt="Main Header" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="carousel" className="my-5">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://browserstack.wpenginepowered.com/wp-content/uploads/2022/10/Testing-on-real-mobile-devices.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="http://blog.olx.com.pk/wp-content/uploads/2022/02/Mobile-phones-1.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.w600.comps.canstockphoto.com/smartphones-and-mobile-applications-clipart_csp13776419.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section id="featured-products" className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {[ 
            { title: 'iPhone 14 Pro Max', price: '₹1,20,999', src: 'https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MQ9P3HN_A_1.jpg?v=1662718624' },
            { title: 'Samsung S23 Ultra', price: '₹1,27,999', src: 'https://cdn1.smartprix.com/rx-izLSMVlI0-w1200-h1200/zLSMVlI0.jpg' },
            { title: 'Huawei P30 Pro', price: '₹79,000', src: 'https://images-cdn.ubuy.co.in/6340051ae566b8277211a103-huawei-p30-pro-128gb-8gb-ram-vog-l29.jpg' },
            { title: 'iPhone 14 Pro Gold Edition', price: '₹10,15,79,000', src: '/assets/images/apple-iphone-14-pro-max-128gb-gold-smartphone.jpg' }
          ].map((product, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow-lg" data-aos="fade-up">
                <img src={product.src} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Special Edition Only Available on Phonomania</p>
                  <p className="card-price"><strong>Best Price: {product.price}</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer-section bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h4>Find Us</h4>
              <p>Sector-71, Mohali, Chandigarh</p>
            </div>
            <div className="col-lg-4 mb-4">
              <h4>Contact Us</h4>
              <p>Phone: 7745968800</p>
              <p>Email: rs2927802@gmail.com</p>
            </div>
            <div className="col-lg-4 mb-4">
              <h4>Follow Us</h4>
              <a href="#"><img src="https://img.icons8.com/fluency/2x/facebook-new.png" alt="Facebook" className="me-2" /></a>
              <a href="#"><img src="https://img.icons8.com/color/2x/whatsapp.png" alt="WhatsApp" className="me-2" /></a>
              <a href="#"><img src="https://img.icons8.com/fluency/2x/google-logo.png" alt="Google" /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
