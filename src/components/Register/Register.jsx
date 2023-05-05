/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { Button, Container, Form } from "react-bootstrap";
import "./Register.css";
import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //for email , name, password
  const [name, setName] = useState("");
  const [photo, setphoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        form.reset();
        navigate("/login");
        profileUpdate(result.user, name, photo);
        console.log(createdUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //update display function
  const profileUpdate = (loggedUser, userName, photoUrl) => {
    updateProfile(loggedUser, {
      displayName: userName,
      photoURL: photoUrl,
    })
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  // email handle

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErrorMessage("Provide a valid eror message");
    } else setEmailErrorMessage("");
  };

  // password error and handle

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (password.length < 6) {
      setPasswordError("Password must be 6 letters");
    } else {
      setPasswordError("");
    }
  };

  // terms handle
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Container className="w-25 mx-auto">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            onChange={(e) => setphoto(e.target.value)}
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleEmail}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Text className="text-danger">{emailErrorMessage}</Form.Text>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handlePassword}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {passwordError && (
          <Form.Text className="text-danger">{passwordError}</Form.Text>
        )}

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">Terms and Conditions</Link>{" "}
              </>
            }
          />
        </Form.Group>
        <Button variant="primary" disabled={!accepted} type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already Have an Account? <Link to="/login">Login</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
