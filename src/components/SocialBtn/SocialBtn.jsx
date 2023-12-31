/* eslint-disable no-unused-vars */
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import "./SocialBtn.css";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialBtn = () => {
  //for redirecting
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  //state for user via social
  const [userSocial, setUserSocial] = useState({});

  // call the context

  const { googleLogin, githubLogin } = useContext(AuthContext);

  // gooogle sign in
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUserSocial(user);
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // github sign in
  const handleGithubSignIn = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        setUserSocial(user);
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="my-5 social-box">
      <h4 className="text-center">Sign up via Social site</h4>
      <div className="d-flex justify-content-around my-3 align-items-center">
        <span onClick={handleGoogleSignIn}>
          <AiFillGoogleCircle></AiFillGoogleCircle>
        </span>
        <p>or</p>
        <span onClick={handleGithubSignIn}>
          <AiFillGithub></AiFillGithub>
        </span>
      </div>
    </div>
  );
};

export default SocialBtn;
