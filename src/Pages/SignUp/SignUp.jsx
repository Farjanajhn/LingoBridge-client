import { useForm } from "react-hook-form";



const SignUp = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
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
       
            pattern:/^[a-z]{1,5}$/

         })} className="input input-bordered" />
       
          
          {errors.password?.type === 'pattern' && <p className="text-red-600">Password must be less than 6 characters,must not contain any uppercase, must not contain any special character</p>} 
          
        </div>
        <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="login"/>
        </div>
            </form>
    </div>
  );
};

export default SignUp;