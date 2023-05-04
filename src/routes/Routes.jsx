/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: fetch("http://localhost:5000"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      // {
      //   path:'/login',
      //   element:
      // }
    ],
  },
]);

export default router;
