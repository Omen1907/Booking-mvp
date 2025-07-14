import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 text-center px-6">
      <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow mb-4">
        Welcome to My Booking Page
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Book a session with me in just a few clicks.
      </p>
      <Link
        to="/book"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
      >
        Book Now
      </Link>
    </div>
  );
};

export default Home;
