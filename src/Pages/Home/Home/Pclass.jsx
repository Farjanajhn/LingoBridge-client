import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../Components/hooks/useCart";
import { AuthContext } from "../../../Providers/AuthProvider";




const Pclass = ({ popularClass }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [,refetch] = useCart();


  const { img, available_seat, price,student,classe_name, name ,id} = popularClass;

  const handelAddToCart = popularClass => {
    console.log(popularClass)
    if (user && user.email) {
      const orderCourse={classId:id,img, available_seat, price,student,classe_name, name,email:user.email }
      fetch('https://lingo-bridge-server-farjanajhn.vercel.app//carts', {
        method: 'POST',
        headers: {
          'content-type':'application/json'
        },
        body:JSON.stringify( orderCourse)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'course added to the cart',
              showConfirmButton: false,
              timer: 1500
            })
        }
      })
    }
    else {
      Swal.fire({
        title: 'please login to oder the course',
   
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now!'
      }).then((result) => {
        if (result.isConfirmed) {
        navigate('/login',{state:{from:location}})
        }
      })
    }
  }
  return (
    <div>
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-[200px] h-[200px]"src={img} alt="Album"/></figure>
  <div className="card-body">
          <h2 className="card-title">{classe_name}</h2>
          <h4>Instructor Name:{name}</h4>
          <p>Student: {student}</p>
     
          <p>Price :${price}</p>
          <p>Available seat:{available_seat}</p>
    <div className="card-actions justify-end">
    <button onClick={()=> handelAddToCart(popularClass)}
      className="bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
    >
      Select the course
    </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Pclass;
