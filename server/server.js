const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const bookingRoutes = require("./routes/bookings");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/bookings", bookingRoutes);

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
