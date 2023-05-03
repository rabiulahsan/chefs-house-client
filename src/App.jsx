/* eslint-disable no-unused-vars */
import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
