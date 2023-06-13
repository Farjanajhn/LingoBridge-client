import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaUserShield, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";




const ManageUsers = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const {data: users=[],refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:3000/users')
    return res.json();
  })
  const handleMakeAdmin = user => {
    fetch(`http://localhost:3000/users/admin/${user._id}`, {
      method:'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an admin now!`,
            showConfirmButton: false,
            timer: 1500
          })
          
      }
      })
      setIsButtonDisabled(true);
  }
  const handleMakeInstructor = user => {
    fetch(`http://localhost:3000/users/instructor/${user._id}`, {
      method:'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an instructor now!`,
            showConfirmButton: false,
            timer: 1500
          })
          
      }
    })
  }
  return (
    <div>
      <Helmet>
        <title>Lingo Bridge | Manage Users</title>
      </Helmet>
      <h1 className="text-3xl font-semibold"> Total Users :  {users.length}</h1>

      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
            {
              users.map((user,index) =>
                <tr key={user._id}>
                  <td>{index +1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                  {
  user.role === 'admin' ? 'admin' : user.role === 'instructor' ? 'instructor' : 'student'
}

                  </td>
                  <td>
                    <button onClick={()=> handleMakeAdmin(user)} className="btn btn-ghost btn-xl"  disabled={isButtonDisabled}><FaUserShield/>Make Admin</button></td>
                    <td><button onClick={()=>handleMakeInstructor(user) } className="btn btn-ghost btn-xl"><FaUserTie/>Make Instructor</button>
                </td>
        
              </tr>)
  }
    
    
 
    </tbody>
  </table>
</div>
     
    </div>
  );
};

export default ManageUsers;