import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <div className="item">
              <img src="../../../public/img/ko.png" alt="korea" />
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <span>KRW</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <Link to="/products/1">Women</Link>
            </div>
            <div className="item">
              <Link to="/products/2">Men</Link>
            </div>
            <div className="item">
              <Link to="/products/3">Children</Link>
            </div>
          </div>
          <div className="center">
            <Link>Wizards Store</Link>
          </div>
          <div className="right">
            <div className="center">
              <Link>Homepages</Link>
            </div>
            <div className="center">
              <Link>About</Link>
            </div>
            <div className="center">
              <Link>Contact</Link>
            </div>
            <div className="center">
              <Link>Stores</Link>
            </div>
            <div className="icons">
              <SearchIcon />
              <PersonOutlineIcon />
              <FavoriteBorderIcon />
              <div className="cartIcon">
                <ShoppingCartIcon />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar