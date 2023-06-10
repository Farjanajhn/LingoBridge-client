import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Classes from "../Pages/Classes/Classes";
import DashBoard from "../Pages/DashBoard/DashBoard";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path: 'dashboard',
        element:<DashBoard></DashBoard>
      },
      {
        path: 'classes',
        element:<PrivateRoute><Classes></Classes></PrivateRoute>
      },
      {
        path: 'signup',
        element:<SignUp></SignUp>
      }
    ]
  },
  {
    path: '*',
    element:<ErrorElement></ErrorElement>
  }
]);