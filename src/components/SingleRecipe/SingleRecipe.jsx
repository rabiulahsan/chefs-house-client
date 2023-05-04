/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./SingleRecipe.css";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const SingleRecipe = ({ recipe }) => {
  const { name, ingredients, method, rating, dishpic } = recipe;
  return (
    <div className="col">
      <div className="card recipe-card ">
        <img className="mx-auto" src={dishpic} alt="" />

        <div className="card-body">
          <h5 className="card-title fw-bold text-center">{name}</h5>
          <p>
            <span className="fw-bold">Ingredients: </span> {ingredients}
          </p>
          <p>
            <span className="fw-bold">Method: </span>
            {method}
          </p>
          <div className="rating d-flex justify-content-between">
            <p>rating</p>
            <AiOutlineHeart></AiOutlineHeart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
