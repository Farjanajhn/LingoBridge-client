import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ClassList from "./ClassList";


const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [myClass, setMyClass] = useState([])
  
  useEffect(() => {
    fetch(`https://lingo-bridge-server.vercel.app/myClass?email=${user?.email}`)
      .then(res => res.json())
    .then(data=>setMyClass(data))
  },[user])
  return (
    <div >
    <h1 className="text-2xl text-center font-semibold my-4">Number of my class:{myClass.length}</h1>
    <div className="overflow-x-auto w-full">
<table className="table w-full">
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
     
    </tr>
  </thead>
  <tbody>

   
          {
            myClass.map(data => <ClassList
              key={data._id}  data={data}></ClassList>)
 }
   
  </tbody>

 
</table>
</div>
  

</div>
  );
};

export default MyClass;