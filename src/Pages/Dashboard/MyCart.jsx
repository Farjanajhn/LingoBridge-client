import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../Components/hooks/useCart";

const MyCart = () => {
  const [cart,refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = item => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        refetch();
        fetch(`https://lingo-bridge-server-farjanajhn.vercel.app/carts/${item._id}`, {
       method:'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire(

              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
        
          }
        })
      }
    })
    
  }
  return (
    <div className="w-3/4">
    
      <div className="font-semibold flex justify-evenly h-[60px] items-center ">
      <Helmet>
        <title>Lingo Bridge | student dashboard</title>
      </Helmet>
      <h3 className="text-3xl">Selected course: {cart.length}</h3>
      <h3 className="text-3xl">Total price : ${total}</h3>
      <button className="btn btn-active btn-primary">Pay</button>
      </div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-purple-900 text-white">
      <tr>
        <th>
        #
        </th>
        <th>Image</th>
        <th>Course_Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
            {
              cart.map((row,index) => 
                <tr key={
                  row.id
                }>
                <td>
             {index + 1}
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={row.img} />
                      </div>
                    </div>
                    
                  </div>
                </td>
                <td>
                {row.classe_name}
                
                 
                </td>
                <td>$ {row.price}</td>
                <td>
                    <button onClick={()=> handleDelete (row)} className="btn btn-ghost btn-xl"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>)
      }
    
    </tbody>

  </table>
</div>
    </div>
  );
};

export default MyCart;