const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  const { name, email, date, time } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO bookings (name, email, date, time) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, date, time]
    );
    res.status(201).json({ message: "Booking saved", booking: result.rows[0] });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(
      "DELETE FROM bookings WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking canceled", booking: result.rows[0] });
  } catch (error) {
    console.error("Cancel error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /bookings - get all bookings, ordered by date and time
router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM bookings ORDER BY date, time");
    res.json(result.rows);
  } catch (error) {
    console.error("Fetch bookings error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
