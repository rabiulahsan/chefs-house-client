/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { AiFillHeart } from "react-icons/ai";
import "./ChefDetailsCard.css";
import React, { useEffect, useState } from "react";

const ChefDetailsCard = ({ id }) => {
  const [chefInfo, setChefInfo] = useState([]);

  useEffect(() => {
    fetch("https://chefs-house-server-rabiulahsan.vercel.app/")
      .then((res) => res.json())
      .then((data) => setChefInfo(data));
  }, []);

  console.log(chefInfo);
  const newChef = chefInfo.filter((c) => c.id === id);
  const chefDetails = newChef[0];
  console.log(newChef[0]);
  console.log(chefDetails);

  return (
    <div>
      <div className="card mb-3 mx-auto py-5 chef-card ">
        <img className="mx-auto" src={chefDetails?.img_url} alt="" />

        <div className="card-body">
          <h5 className="card-title fw-bold text-center">{name}</h5>
          <p>{chefDetails?.bio}</p>
          <p>{chefDetails?.experience_years} years of experinces</p>
          <div className="d-flex justify-content-between align-items-center">
            <p>{chefDetails?.num_recipes} Recipes</p>
            <p>
              {chefDetails?.likes}{" "}
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
