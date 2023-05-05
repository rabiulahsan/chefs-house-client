/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Card } from "react-bootstrap";
import "./Chefs.css";
import React, { createContext } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import LazyLoad from "react-lazy-load";

const Chefs = ({ chef }) => {
  const { id, name, img_url, experience_years, num_recipes, likes } = chef;
  return (
    <div>
      <Card style={{ width: "18rem" }} className=" card">
        {/* lazy loading */}
        <div>
          <LazyLoad height={250}>
            <Card.Img variant="top" src={img_url} />
          </LazyLoad>
        </div>
        <Card.Body>
          <h4 className="fw-bold">{name}</h4>
          <p>Experiences {experience_years} years</p>

          <div className="d-flex justify-content-between">
            <p>{num_recipes} Recipes</p>
            <span>
              {likes}
              <AiFillHeart></AiFillHeart>
            </span>
          </div>
          <Link to={`/${id}`}>
            <Button variant="primary">View Recipes Button</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Chefs;
