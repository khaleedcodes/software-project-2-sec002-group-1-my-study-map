import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-semibold">
          MyStudyMap
        </Link>
        <div>
          <Link to="/login" className="text-white ml-4">
            Login
          </Link>
          <Link to="/signup" className="text-white ml-4">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
