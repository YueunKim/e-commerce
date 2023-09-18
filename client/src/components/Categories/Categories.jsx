import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://www.looper.com/img/gallery/why-does-voldemort-want-to-kill-harry-potter-and-how-did-he-actually-survive/intro-1689194586.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="https://ik.imagekit.io/hpapi/ginny.jpg" alt="" />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img src="https://ik.imagekit.io/hpapi/bellatrix.jpg" alt="" />
          <button>
            <Link to="/products" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://i2-prod.mylondon.news/incoming/article22316650.ece/ALTERNATES/s615/0_CY21112359.jpg"
                alt=""
              />
              <button>
                <Link to="/products/2" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1333,w_2000,x_0,y_54/c_fill,f_auto,h_1200,q_auto,w_1600/v1/m/1/c/1c24e3bbebb3f19570c6528b2ca566a27608fa7e/20-best-secondary-harry-potter-characters-ranked.jpg"
                alt=""
              />
              <button>
                <Link to="/products/3" className="link">
                  House Elf
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/04/harry-potter-characters.jpg"
            alt=""
          />
          <button>
            <Link to="/products" className="link">
              Set
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
