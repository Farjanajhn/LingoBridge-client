import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

import { AuthContext } from "../../Providers/AuthProvider";

import ManageClassList from "./ManageClassList";


const ManageClasses = () => {

  const { user } = useContext(AuthContext);
  const [manageClass, setManageClass] = useState([])
  
  useEffect(() => {
    fetch(`https://lingo-bridge-server-farjanajhn.vercel.app//manageClasses`)
      .then(res => res.json())
    .then(data=>setManageClass(data))
  }, [user])
  
  
  return (
    <div >
    <h1 className="text-2xl text-center font-semibold my-4">Number of Class:{manageClass.length}</h1>
    <div className="overflow-x-auto max-w-screen-xl">
  <table className="table ">
  {/* head */}
  <thead>
    <tr>
      <th>Image</th>
      <th>Course Name</th>
      <th>Instructor Name</th>
      <th>Available Seat</th>
      <th>Price</th>
      <th>Email</th>
  <th>Status</th>
      
              <th></th>
              <th></th>
              <th></th>
     
    </tr>
  </thead>
  <tbody>

   
          {
            manageClass.map(data => <ManageClassList
              key={data._id}  data={data}></ManageClassList>)
 }
   
  </tbody>

 
</table>
</div>
  

</div>
  );
};

export default ManageClasses;