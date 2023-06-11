


const Pclass = ({ popularClass }) => {
 
  const {img,student,price,classe_name,name} =popularClass
  
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-[200px] h-[200px]"src={img} alt="Album"/></figure>
  <div className="card-body">
          <h2 className="card-title">{classe_name}</h2>
          <h4>Instructor Name:{name}</h4>
          <p>Number of student:{student}</p>
          <p>Price :${price}</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
    </div>
  );
};

export default Pclass;
