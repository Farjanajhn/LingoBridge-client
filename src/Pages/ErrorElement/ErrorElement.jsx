import { Link } from "react-router-dom";


const ErrorElement = () => {
  return (
    <div className="text-center">
      <h1>
        <img className="mx-auto my-20 rounded-lg"src="https://st3.depositphotos.com/1006899/14908/i/450/depositphotos_149080517-stock-photo-white-word-error.jpg" alt="" />
        <p className="text-xl pl-4 py-4 font-bold"><small>Go Back To <Link to="/"><button className="btn btn-outline btn-primary ml-2 ">Home</button></Link></small></p>
      </h1>
    </div>
  );
};

export default ErrorElement;