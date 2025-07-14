import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Book from "./components/Pages/Book";
import Confirmation from "./components/Pages/Confirmation";
import AdminBookings from "./components/Pages/AdminBookings";
import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-50">
        <Navbar />
        <main className="flex-grow p-6 max-w-5xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/admin" element={<AdminBookings />} />
          </Routes>
        </main>
        <footer className="text-center py-4 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Your Business Name
        </footer>
      </div>
    </Router>
  );
}

export default App;
