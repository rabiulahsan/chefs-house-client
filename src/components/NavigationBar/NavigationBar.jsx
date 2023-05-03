/* eslint-disable no-unused-vars */
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css";
import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex py-2">
          <Link to="/" className="text-decoration-none logo">
            Chefs House
          </Link>
          <div className="">
            <Link to="/" className="navlink mx-4 text-decoration-none">
              Home
            </Link>
            <Link to="/blog" className="navlink mx-4 text-decoration-none">
              Blog
            </Link>
          </div>
          <div className="">
            <img src="" alt="" />
            <Link to="/login">
              <Button variant="light">Login</Button>
            </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
