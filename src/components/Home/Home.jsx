/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css";

import Banner from "../Banner/Banner";
import About from "../About/About";
import Chefs from "../Chefs/Chefs";
import { Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Review from "../Review/Review";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://chefs-house-server-rabiulahsan.vercel.app/")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div>
      <Banner></Banner>

      {/* all chefs  */}

      <div className="container-lg">
        <h3 className="fw-bold text-center my-5">Chefs</h3>
        <Row xs={1} md={2} lg={3} className="g-2 gy-4">
          {chefs.map((chef) => (
            <Chefs key={chef.id} chef={chef}></Chefs>
          ))}
        </Row>
      </div>

      {/* about section  */}
      <About></About>

      {/* Review Section */}
      <Review></Review>

      {/* footer section  */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
