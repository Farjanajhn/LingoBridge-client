
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Login = () => {
  const {signIn}=useContext(AuthContext)
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
    })
    

  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-4 text-center">Login now!</h1>
    <img className=" w-3/4 rounded-lg" src="https://img.freepik.com/premium-vector/pensive-girl-online-sign-up-concept-female-character-flat-design-vector-cartoon-illustration-web-apps-landing-page_258190-1305.jpg?w=1380" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 ml-8">
            <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name="password" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="login"/>
        </div>
            </form>
            <p><small>New Here? <Link to="/signup">Register</Link></small></p>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default Login;