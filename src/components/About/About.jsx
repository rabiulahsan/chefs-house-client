/* eslint-disable no-unused-vars */
import "./About.css";
import React from "react";

const About = () => {
  return (
    <div className=" container-lg my-5 py-5 ">
      <h2 className="fw-bolder my-5 text-center">About</h2>
      <div className="about d-flex justify-content-around py-5 px-3">
        <div className="about-details my-auto w-50 px-5 ">
          <p className="">
            We all known as a well established restaurent. We have the bset
            chefs in the country. We also provide chefs for ant program. Our
            quality is up to mark. All our chefs are so good. There are so many
            variety of foods you can choose.
          </p>
          <p>
            There is a lots of food item. You can find it in menu or item card.
            There are also appetaizer and deserts also. We want to provide you a
            very goood service with good food.
          </p>
        </div>
        <div className="about-image ">
          <img
            className="img-fluid"
            src="https://media.istockphoto.com/id/1146261080/photo/chef-finishing-healthy-salad-on-a-black-plate-with-tweezers-almost-ready-to-serve-it-on-a.jpg?s=612x612&w=0&k=20&c=78_UgFxxUBLsQcgL2oI6JRDibAqO4hkNldJ_DyA55KU="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
