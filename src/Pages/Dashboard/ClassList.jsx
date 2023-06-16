import { Link } from "react-router-dom";



const   ClassList = ({ data }) => {
  const { _id,img,classe_name, name, email, available_seat, price, status } = data;
  
  return (
   
    <tr>
      
        <td>
          
        
              <div className="mask mask-squircle w-24 h-24">
          <img src={img}  />
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
     

        <td>
         <Link to={`/update/${_id}`}><button  className="btn  btn-ghost btn-sm bg-purple-900 text-white">Update</button></Link> 
         
        
        </td>
       
      </tr>
  );
};

export default ClassList;