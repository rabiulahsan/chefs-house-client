/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./Footer.css";
import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <Link
              to="/"
              className="btn btn-outline-light social-sign"
              href="#!"
              role="button"
            >
              <AiFillFacebook></AiFillFacebook>
            </Link>
            <Link
              to="/"
              className="btn btn-outline-light social-sign"
              href="#!"
              role="button"
            >
              <AiFillInstagram></AiFillInstagram>
            </Link>
            <Link
              to="/"
              className="btn btn-outline-light social-sign"
              href="#!"
              role="button"
            >
              <AiFillGithub></AiFillGithub>
            </Link>
          </section>
        </div>

        <div className="text-center p-3">© 2020 Copyright: Chefs House</div>
      </footer>
    </div>
  );
};

export default Footer;
