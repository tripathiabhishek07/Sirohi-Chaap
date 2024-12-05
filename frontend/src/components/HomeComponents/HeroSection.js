import React from "react";
import { Link } from 'react-router-dom';
import "./HeroSection.css";
import backgroundImage from "../../images/bg.jpg"

const HeroSection = () => {
  return (
    <section className="hero-section"style={{ backgroundImage: `url(${backgroundImage})` }} >
      <div className="container">
        <div className="text-content">
          <h1 className="title">
          SIROHI CHAAP
           <br/>
           <span>Food On Your Doorstep </span>
          </h1>
          <p className="description">
         
          </p>
          <div className="button-group">
            <Link to="/admin/addFood">
            <button className="btn primary-btn">Donate</button>
            </Link>
            <Link to = "/homepage">
            <button className="btn secondary-btn">Order</button>
            </Link>
          </div>
        </div>
        <div className="image-container">
          <img
            className="hero-image"
            alt="hero"
            src="/images/SirohiLogo.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
