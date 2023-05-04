/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import ChefsDetails from "../components/ChefsDetails/ChefsDetails";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorElement from "../components/ErrorElement/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/:id",
        element: (
          <PrivateRoute>
            <ChefsDetails></ChefsDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chefs-house-server-rabiulahsan.vercel.app/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
