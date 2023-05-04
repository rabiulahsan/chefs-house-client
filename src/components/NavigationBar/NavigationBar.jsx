/* eslint-disable no-unused-vars */
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Activelink from "../ActiveLink/Activelink";

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
          <div className="navlink">
            <Activelink to="/">Home</Activelink>
            <Activelink to="/blog">Blog</Activelink>
          </div>
          <div className="user">
            {user ? (
              <>
                <img src="" alt="Profile" title={user.displayName} />
                <Button onClick={handleLogOut} variant="light">
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="light">Login</Button>
              </Link>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
