/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import ChefsDetails from "../components/ChefsDetails/ChefsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/:id",
        element: <ChefsDetails></ChefsDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
