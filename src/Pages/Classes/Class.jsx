import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Class = ({ popularClass }) => {
  const {user}=useContext(AuthContext)
  const {img,available_seat,price,classe_name,name} =popularClass
  return (
    <div>
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-[200px] h-[200px]"src={img} alt="Album"/></figure>
  <div className="card-body">
          <h2 className="card-title">{classe_name}</h2>
          <h4>Instructor Name:{name}</h4>
          <p>Available seat:{available_seat}</p>
          <p>Price :${price}</p>
    <div className="card-actions justify-end">
    <button
      className={`bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${user ? '' : 'opacity-50 cursor-not-allowed'}`}
      disabled={!user}
    >
      Select the course
    </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Class;