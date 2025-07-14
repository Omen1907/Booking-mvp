import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const BookingForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${apiUrl}/bookings`, form);

      toast.success("Booking confirmed!");
      navigate("/confirmation", { state: response.data.booking });
    } catch (error) {
      console.error("Booking failed:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md
                   border border-indigo-300"
      >
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-8 text-center">
          Book a Session
        </h2>

        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-5 rounded-lg border border-indigo-300
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     transition"
          value={form.name}
          onChange={handleChange}
          required
          autoComplete="name"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-5 rounded-lg border border-indigo-300
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     transition"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />

        <input
          name="date"
          type="date"
          className="w-full p-3 mb-6 rounded-lg border border-indigo-300
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     transition"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          name="time"
          type="time"
          className="w-full p-3 mb-8 rounded-lg border border-indigo-300
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     transition"
          value={form.time}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold text-white
                      transition 
                      ${
                        loading
                          ? "bg-indigo-300 cursor-not-allowed"
                          : "bg-indigo-600 hover:bg-indigo-700"
                      }`}
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </form>
    </>
  );
};

export default BookingForm;
