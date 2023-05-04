/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { AiFillHeart } from "react-icons/ai";
import "./ChefDetailsCard.css";
import React from "react";

const ChefDetailsCard = ({ newChef }) => {
  const { name, img_url, experience_years, num_recipes, bio, likes } = newChef;

  return (
    <div>
      <div className="card mb-3 mx-auto py-5 chef-card ">
        <img className="mx-auto" src={img_url} alt="" />

        <div className="card-body">
          <h5 className="card-title fw-bold text-center">{name}</h5>
          <p>{bio}</p>
          <p>{experience_years} years of experinces</p>
          <div className="d-flex justify-content-between align-items-center">
            <p>{num_recipes} Recipes</p>
            <p>
              {likes}{" "}
              <span className="likes">
                <AiFillHeart></AiFillHeart>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetailsCard;
