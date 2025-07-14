import { useState, useEffect } from "react";
import axios from "axios";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookings = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.get(`${apiUrl}/bookings`);
      setBookings(response.data);
    } catch {
      setError("Failed to fetch bookings");
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (id) => {
    if (!confirm("Are you sure you want to cancel this booking?")) return;
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.delete(`${apiUrl}/bookings/${id}`);
      setBookings((prev) => prev.filter((b) => b.id !== id)); // instant update
    } catch {
      alert("Failed to cancel booking.");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading)
    return (
      <p className="p-6 text-center text-indigo-600 font-semibold">
        Loading bookings...
      </p>
    );

  if (error)
    return (
      <p className="p-6 text-center text-red-600 font-semibold">{error}</p>
    );

  if (bookings.length === 0)
    return (
      <p className="p-6 text-center text-gray-600 font-medium">
        No bookings yet.
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">
        All Bookings
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="bg-indigo-100 text-indigo-700">
            <tr>
              {["Name", "Email", "Date", "Time", "Actions"].map((header) => (
                <th key={header} className="p-3 border border-indigo-300">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bookings.map(({ id, name, email, date, time }) => (
              <tr
              key={id}
              className="odd:bg-white even:bg-indigo-50 hover:bg-indigo-100 transition"
            >
              <td className="p-3 border border-indigo-300 text-gray-800">{name}</td>
              <td className="p-3 border border-indigo-300 text-gray-800">{email}</td>
              <td className="p-3 border border-indigo-300 text-gray-800">{date}</td>
              <td className="p-3 border border-indigo-300 text-gray-800">{time}</td>
              <td className="p-3 border border-indigo-300">
                <button
                  onClick={() => cancelBooking(id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-xs font-semibold transition"
                  aria-label={`Cancel booking for ${name}`}
                >
                  Cancel
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookings;
