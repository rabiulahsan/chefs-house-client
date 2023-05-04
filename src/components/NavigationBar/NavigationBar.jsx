/* eslint-disable no-unused-vars */
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <>
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
            <Nav>
              {user ? (
                <Button onClick={handleLogOut} variant="light">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="light">Login</Button>
                </Link>
              )}
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
