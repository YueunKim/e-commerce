import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>House Elf</span>
          <span>Sale</span>
          <span>Set Product</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            This shopping mall is a fictional Harry Potter character shopping
            mall. As a big fan of Harry Potter, I made it with my love We will
            continue to develop and add various functions
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            If you have any questions about this virtual shopping mall, please
            feel free to email us at yueunkim0605@gmail.com . I'll answer as
            soon as possible when I have time. Thank you!🥰
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">HOGWARTS STORE</span>
          <span className="copyright">Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
