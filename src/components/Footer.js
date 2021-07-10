import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="py-5">
          <h2 className="text-light">Interested in working with me?</h2>
          <Link to="/contact">
            <button className="btn btn-outline-light btn-lg mt-3">
              Let's talk
            </button>
          </Link>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 py-3 MoreLink">
            <h5 className="text-info pb-3">More links</h5>
            <Link
              to="/"
              style={{ textDecorationLine: "none" }}
              className="text-light d-block"
            >
              Blogs
            </Link>
            <Link
              style={{ textDecorationLine: "none" }}
              to="/"
              className="text-light d-block"
            >
              Home
            </Link>
            <Link
              style={{ textDecorationLine: "none" }}
              to="/"
              className="text-light d-block"
            >
              Projects
            </Link>
            <Link
              style={{ textDecorationLine: "none" }}
              to="/contact"
              className="text-light d-block"
            >
              Contact me
            </Link>
            <Link
              style={{ textDecorationLine: "none" }}
              to="/WriteRecommendation"
              className="text-light"
            >
              Write a recommendation <i className="fas fa-heart text-light"></i>
            </Link>
          </div>
          <div className="col-12 col-md-4 text-light text-justify py-3">
            <p style={{ textAlign: "justify" }}>
              An engineer is a person who invents or builds something having in
              mind the limits of its cost, safety and regulation.Engineers are
              professionals in their field. It is derived from a Latin or Greek
              word ingeniare which means to create or devise something. Its
              standard education is 4 year of bachelors.
            </p>
          </div>
          <div className="col-12 col-md-4 py-3 ">
            <h5 className="text-info pb-3">Social</h5>
            <Link style={{ textDecorationLine: "none" }} to="/">
              <i className="fab fa-linkedin text-light h1 d-block"></i>
            </Link>
            <Link style={{ textDecorationLine: "none" }} to="/">
              <i className="fab fa-github text-light h1 d-block"></i>
            </Link>
            <Link style={{ textDecorationLine: "none" }} to="/">
              <i className="fas fa-envelope text-light h1 d-block"></i>
            </Link>
          </div>
        </div>
        <div className="text-muted py-3">
          <p>Copyright © Vijay Iyer</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
