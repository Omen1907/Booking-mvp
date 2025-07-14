import { useLocation, Link } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();
  const booking = state || {};

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 to-indigo-300 p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-indigo-900 mb-6">
          Booking Confirmed!
        </h1>
        <p className="text-gray-800 mb-4 text-lg">
          Thank you, <span className="font-semibold">{booking.name}</span>.
        </p>
        <p className="text-gray-700 mb-8">
          Your session is scheduled for{" "}
          <span className="font-semibold">{booking.date}</span> at{" "}
          <span className="font-semibold">{booking.time}</span>.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
