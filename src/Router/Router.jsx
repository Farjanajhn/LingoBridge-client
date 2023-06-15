import {
  createBrowserRouter,

} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AddClass from "../Pages/Dashboard/AddClass";

import ManageUsers from "../Pages/Dashboard/ManageUsers";

import MyCart from "../Pages/Dashboard/myCart";

import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
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
        path: 'signup',
        element:<SignUp></SignUp>
      },
      {
        path: 'instructors',
        element:<Instructors></Instructors>
      }
    ],
  },
 
 {
    path:'dashboard',
    element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,

    children: [
      {
        
          path: 'myCart',
         element:<MyCart></MyCart>
        
      },
      {
        path: 'manageUsers',
        element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'addClass',
        element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
      }
    ]
  },  

 {
    path: '*',
    element:<ErrorElement></ErrorElement>
  } 
]);