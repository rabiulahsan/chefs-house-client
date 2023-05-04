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

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

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
        setErrorMessage(error.message);
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
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger">{errorMessage}</Form.Text>

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
