/* eslint-disable no-unused-vars */
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import "./SocialBtn.css";
import React from "react";

const SocialBtn = () => {
  return (
    <div className="my-5 social-box">
      <h4 className="text-center">Sign up via Social site</h4>
      <div className="d-flex justify-content-around my-3 align-items-center">
        <span>
          <AiFillGoogleCircle></AiFillGoogleCircle>
        </span>
        <p>or</p>
        <span>
          <AiFillGithub></AiFillGithub>
        </span>
      </div>
    </div>
  );
};

export default SocialBtn;
