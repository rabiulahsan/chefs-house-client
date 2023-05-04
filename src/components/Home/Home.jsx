/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css";

import Banner from "../Banner/Banner";
import About from "../About/About";
import Chefs from "../Chefs/Chefs";
import { Card, Col, Row } from "react-bootstrap";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div>
      <Banner></Banner>

      {/* all chefs  */}

      <div className="container-lg">
        <h3 className="fw-bold text-center my-5">Chefs</h3>
        <Row xs={1} md={2} lg={3} className="g-2">
          {chefs.map((chef) => (
            <Chefs key={chef.id} chef={chef}></Chefs>
          ))}
        </Row>
      </div>

      {/* about section  */}
      <About></About>
    </div>
  );
};

export default Home;
