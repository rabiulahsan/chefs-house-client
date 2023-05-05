/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import "./ChefsDetails.css";
import React, { useEffect, useState } from "react";
import SingleRecipe from "../SingleRecipe/SingleRecipe";
import ChefDetailsCard from "../ChefDetailsCard/ChefDetailsCard";

const ChefsDetails = () => {
  const recipes = useLoaderData();
  const id = parseInt(useParams().id);
  console.log(id);

  return (
    <div className="container my-5">
      <h3 className="text-center fw-bolder my-5">About Chefs</h3>
      <ChefDetailsCard id={id}></ChefDetailsCard>

      <h3 className="text-center fw-bolder my-5">Recipes</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
        {recipes.map((recipe) => (
          <SingleRecipe key={recipe._id} recipe={recipe}></SingleRecipe>
        ))}
      </div>
    </div>
  );
};

export default ChefsDetails;
