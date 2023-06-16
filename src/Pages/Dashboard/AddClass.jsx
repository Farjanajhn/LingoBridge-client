




import { useContext } from 'react';

import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const AddClass = () => { 
   const {user}=useContext(AuthContext)
  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const classe_name = form.classe_name.value;
    const available_seat = form.available_seat.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const status = form.status.value;
    const name = form.name.value;
    const email = form.email.value;
    const newClass = { classe_name,name, status,email, photo, price, available_seat };
    console.log(newClass);

    //send data to the server
    fetch('https://lingo-bridge-server.vercel.app/classes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newClass)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            title: 'Success!',
            text: 'Course added successfully',
            icon: 'success',
            confirmButtonText: 'ok'
          })
       
        }
      })
    
  }
  
 return (
    <div className='bg-[#F4F3F0] p-24'>
      <h1 className='text-3xl font-extrabold  bg-purple-900 text-white text-center my-10'>Add a new class</h1>
     <form onSubmit={handleAddClass}>
     <div className="form-control md:w-full ml-4">
  <label className="label">
    <span className="label-text ">Class Name</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="class name" name="classe_name" className="input input-bordered w-full" />
  </label>
</div>
        <div className='md:flex'>
        <div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text ">Status</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Status" name="status" className="input input-bordered w-full" />
  </label>
</div>
        <div className="form-control w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Photo Url</span>
  </label>
  <label className="input-group ">
  
    <input type="text" name="photo" placeholder="Photo url" className="input input-bordered w-full" />
  </label>
</div>


        <div className="form-control">

</div>
        </div>
        <div className='md:flex'>
        <div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text ">Price</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
  </label>
</div>
        <div className="form-control w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Available_seat</span>
  </label>
  <label className="input-group ">
  
    <input type="text" name="available_seat" placeholder="Available Seat" className="input input-bordered w-full" />
  </label>
</div>


        <div className="form-control">

</div>
        </div>
        <div className='md:flex'>
        <div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text ">Instructor Name</span>
  </label>
  <label className="input-group">
  
    <input type="text" placeholder="Instructor Name" value={user?.displayName} readOnly name="name"className="input input-bordered w-full" />
  </label>
         </div>
         <div className="form-control w-1/2 ml-4">
  <label className="label">
    <span className="label-text">Instructor email</span>
  </label>
  <label className="input-group ">
  
    <input type="text" value={user?.email} readOnly name="email" placeholder="Instructor Email" className="input input-bordered w-full" />
  </label>
</div>
 
         
       
        </div>
  
        <input type='submit' className="mt-4 btn btn-block  bg-purple-900 text-white" value="Add Class" />
      </form>
    </div>
  );
};

export default AddClass;   