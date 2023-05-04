/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./SingleRecipe.css";
import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleRecipe = ({ recipe }) => {
  const { name, ingredients, method, rating, dishpic } = recipe;
  const [react, setReact] = useState(false);

  const reactControl = () => {
    toast("Added as a favourite");
    setReact(true);
  };
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

            <span className="react">
              {react ? (
                <AiFillHeart disable={true}></AiFillHeart>
              ) : (
                <AiOutlineHeart onClick={reactControl}></AiOutlineHeart>
              )}
              <ToastContainer />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
