import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Welcome to VibeVerse, where your auditory journey begins. Dive into
            a realm of unparalleled sound quality and immerse yourself in a
            symphony of innovation. Discover the perfect harmony between style
            and substance as you explore our curated collection of headphones
            and speakers. Elevate your listening experience to new heights with
            cutting-edge technology and timeless design.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Community Centre Rd, Hauz Khas Metro Station, Delhi, 688006
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0342 267 0245</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@vibeverse.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">VIBEVERSE 2024 CREATED BY FAHAD KHAN.</span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
