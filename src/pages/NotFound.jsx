import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404 Not Found</h1>
          <p className="py-6">The Page You want Not Found</p>
          <Link to="/" className="btn btn-primary">
            <FaHome className="mr-3" /> Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
