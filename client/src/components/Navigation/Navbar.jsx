import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/book" className="hover:underline">
            Book
          </Link>
        </li>
        <li>
          <Link to="/admin" className="hover:underline">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
