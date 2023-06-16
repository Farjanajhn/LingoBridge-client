

import { Link } from "react-router-dom";





const ManageClassList = ({ data }) => {
  
  const { _id, img, classe_name, name, email, available_seat, price, status } = data;

  return (
   
    <tr>
      
        <td>
          
        
              <div className="mask mask-squircle  h-24">
          <img className="w-[100px] h-[100px]" src={img}  />
              </div>
           
        </td>
      <td>{classe_name}</td>
        <td>
       {name}
         
        </td>
      <td>{available_seat}</td>
      <td>${price}</td>
      <td>{email}</td>
      <td>{status}</td>
     

        <td >
         <Link to={`/update/${_id}`}><button className="btn  btn-ghost btn-sm my-2 bg-purple-900 text-white">Approve</button></Link> 
         
         <Link to={`/update/${_id}`}><button  className="btn  btn-ghost btn-sm bg-purple-900 text-white my-2">Feedback</button></Link> 
       
         <Link to={`/update/${_id}`}><button  className="btn  btn-ghost btn-sm bg-purple-900 text-white my-2">Deny</button></Link> 
         
        
        </td>
       
      </tr>
  );
};

export default   ManageClassList;