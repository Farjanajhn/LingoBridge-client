import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";



const SignUp = () => {

  const { register, handleSubmit, reset,formState: { errors } } = useForm();

  const {createUser,updateUserProfile } = useContext(AuthContext);

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log('user profile info update');
            reset();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          })
          .catch(error => {
          console.log(error)
        })
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
              <input type="text" {...register("name",{ required: true })} placeholder="name" className="input input-bordered" />
              {errors.name && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
              <input type="text" {...register("photoURL",{ required: true })} placeholder="photo URL" className="input input-bordered" />
              {errors.photoURL && <span className="text-red-600">This field is required</span>}
          </div>
      {/*   <div className="form-control">

          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" {...register("name")} name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" placeholder="photoUrl" {...register("photoURL")} name="email" className="input input-bordered" />
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" {...register("email", { required: true  })} name="email" className="input input-bordered" />
          {errors.email && <span>This field is required</span>}
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" {...register("password", {
       
            pattern:/^[a-z]{1,6}$/

         })} className="input input-bordered" />
       
          
          {errors.password?.type === 'pattern' && <p className="text-red-600">Password must be less than 6 characters,must not contain any uppercase, must not contain any special character</p>} 
          
        </div>
        <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up"/>
        </div>
            </form>
    </div>
  );
};

export default SignUp;