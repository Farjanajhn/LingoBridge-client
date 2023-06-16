import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "./SocialLogin/SocialLogin";



const SignUp = () => {

  const { register, handleSubmit, reset,formState: { errors } } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
         const saveUser = {name: data.name, photo:data.photoURL, email:data.email}
            fetch('https://lingo-bridge-server-farjanajhn.vercel.app/users', {
              method: 'POST',
              headers: {
                'content-type':'application/json'
              },
              body:JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/');
              }
            })
         
          })
         .catch(error =>console.log(error))
    
    })
  }
  return (
    <div>
      <div className="my-10">
      <h1 className="text-purple-900 font-bold text-5xl text-center">Sign Up</h1>
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
       
       required: true,
       minLength: 6,
       pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/

         })} className="input input-bordered" />
       
          
       {errors.password?.type === 'required' && (
          <p>Password is required.</p>
        )}
        {errors.password?.type === 'minLength' && (
          <p>Password should be at least 6 characters long.</p>
        )}
        {errors.password?.type === 'pattern' && (
          <p>
            Password should contain at least one capital letter and one special character.
          </p>
        )}
          
          </div>
          
        <div className="form-control mt-6">
                <input className="btn bg-purple-900 text-white" type="submit" value="Sign Up"/>
        </div>
      </form>
      <p className="text-xl pl-4 py-4 font-semibold"><small>Already have an account? <Link to="/login"><span className="text-purple-900 text-xl font-bold">Login</span></Link></small></p>
      <SocialLogin></SocialLogin>
    </div>
 </div>
  );
};

export default SignUp;