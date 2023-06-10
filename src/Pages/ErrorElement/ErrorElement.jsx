import { Link } from "react-router-dom";


const ErrorElement = () => {
  return (
    <div>
      <h1>
        go back to homepage <Link to="/"><button>Home</button></Link>
      </h1>
    </div>
  );
};

export default ErrorElement;