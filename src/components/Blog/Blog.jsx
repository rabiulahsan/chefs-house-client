/* eslint-disable no-unused-vars */
import LazyLoad from "react-lazy-load";
import "./Blog.css";
import React from "react";

const Blog = () => {
  return (
    <div className="container my-5 mx-auto w-75">
      <div className="">
        <h4 className="text-center fw-bold">
          Controlled vs Uncontrolled Component
        </h4>
        <p>
          Uncontrolled: Uncontrolled Components are the components that are not
          controlled by the React state and are handled by the DOM Document
          Object Model.
        </p>
        <p>
          Controlled: In React, Controlled Components are those in which forms
          data is handled by the components state. It takes its current value
          through props and makes changes through callbacks like onClick,
          onChange, etc. A parent component manages its own state and passes the
          new values as props to the controlled component.
        </p>
      </div>
      <div className="">
        <h4 className="text-center fw-bold">Validate react Props</h4>
        <p>We have to use props type library and have to configure it </p>
      </div>
      <div className="">
        <h4 className="text-center fw-bold">Node js vs Express js</h4>
        <p>
          Node js is a runtime environment. it is not a programming language.
        </p>
        <p>
          Express js is a js framework which is used for reduce the backend code
        </p>
      </div>
      <div className="">
        <h4 className="text-center fw-bold">
          What is custom hook and why it is?
        </h4>
        <p>
          A custom Hook is a JavaScript function whose name starts with ”use”
          and that may call other Hooks. Thats it! If you have code in a
          component that you feel would make sense to extract, either for reuse
          elsewhere or to keep the component simpler, you can pull that out into
          a function.
        </p>
      </div>
    </div>
  );
};

export default Blog;
