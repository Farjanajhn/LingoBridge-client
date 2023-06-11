

const Pclass = ({ popularClass }) => {
  const {img,available_seat,price,classe_name} =popularClass
  
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-[200px] h-[200px]"src={img} alt="Album"/></figure>
  <div className="card-body">
          <h2 className="card-title">{classe_name}</h2>
          <p>Available seat:{available_seat}</p>
          <p>Price :${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Pclass;
