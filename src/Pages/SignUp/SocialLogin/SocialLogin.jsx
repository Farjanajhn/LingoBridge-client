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

        const saveUser = {name: loggedInUser.displayName, email:loggedInUser.email}
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
              navigate(from, { replace: true });
          }
        })
       
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