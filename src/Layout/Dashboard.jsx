import { Link,  Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import { FaHome, FaShoppingBag, FaShoppingCart, FaUsers, FaWallet } from 'react-icons/fa';
import useCart from "../Components/hooks/useCart";

import useAdmin from "../Components/hooks/UseAdmin";
import useInstructor from "../Components/useInstructor";


const Dashboard = () => {
  const [cart] = useCart();

  const [isInstructor] = useInstructor();
  /* const isAdmin = true; */
  const [isAdmin] = useAdmin();
  console.log(isAdmin)
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
       
        <Outlet></Outlet>
      {/* Page content here */}
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 h-full bg-purple-900 text-white mt-4">
      {isAdmin ? (
  <>
    <li className="text-xl font-bold my-4 text-center">
      <FaHome></FaHome>Admin Dashboard
    </li>
    <li>
      <Link to="/dashboard/manageClasses">
        <FaShoppingBag /> Manage Classes
      </Link>
    </li>
    <li>
      <Link to="/dashboard/manageUsers">
        <FaUsers></FaUsers>Manage Users
      </Link>
    </li>
  </>
) : isInstructor ? (
  <>
    <li className="text-xl font-bold my-4 text-center">
      <FaHome></FaHome>Instructor Dashboard
    </li>
    <li>
      <Link to="/dashboard/addClass">
        <FaShoppingBag /> Add a class
      </Link>
    </li>
    <li>
      <Link to="/dashboard/myClass">
        <FaUsers></FaUsers>My Classes
      </Link>
    </li>
  </>
) : (
  <>
    <li className="text-xl font-bold my-10 text-center">
      <FaHome></FaHome>Student Dashboard
    </li>
    <li>
      <Link to="/dashboard/myCart">
        <FaShoppingCart /> My Course
        <span className="badge badge-secondary">+{cart?.length || 0}</span>
      </Link>
    </li>
    <li>
      <Link>
        <FaWallet></FaWallet>My Payment
      </Link>
    </li>
  </>
)}

      </ul>
    
    </div>
  </div>
    </div>
  );
};

export default Dashboard;