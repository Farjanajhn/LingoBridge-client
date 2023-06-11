

const InstructorCard = ({instructor}) => {
  const { img, name, email,classes } = instructor;
  return (
    <div>
          <div className="card w-96 bg-base-100 shadow-xl mt-4">
    
    <figure><img className="w-[200px] h-[200px] "src={img} alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">Name:{name}</h2>
        <p className="text-lg">Email:{email}</p>
        <p><small>Classes:{classes}</small></p>

      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
    </div>
  );
};

export default InstructorCard;