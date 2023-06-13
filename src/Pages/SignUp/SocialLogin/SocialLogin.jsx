import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
 
  const from=location.state?.from?.pathname || "/"
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
    })
  }
  return (
    <div className=" flex flex-cols justify-center items-center">
        <div className="divider divider-horizontal "><button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline "><FaGoogle></FaGoogle>
 
</button></div>
    </div>
  );
};

export default SocialLogin;