const express = require("express");

function OrganizerEventRoutes(db) {
  const router = express.Router();

  // CREATE event
  router.post("/Organizer", (req, res) => {
    const {
      fullNameEvent,
      shortNameEvent,
      description,
      startDate,
      endDate,
      startTime,
      endTime,
      venue,
      address,
    } = req.body;

    // Append :00 if time is HH:mm
    const formatTime = (time) => {
      if (time && time.length === 5) return time + ":00";
      return time;
    };

    const query = `
      INSERT INTO Events_Organizer (
        fullNameEvent, shortNameEvent, description,
        startDate, endDate, startTime, endTime,
        venue, address
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      query,
      [
        fullNameEvent,
        shortNameEvent,
        description,
        startDate,
        endDate,
        formatTime(startTime),
        formatTime(endTime),
        venue,
        address,
      ],
      (err, result) => {
        if (err) {
          console.error("❌ Insert Error:", err);
          return res
            .status(500)
            .json({ error: "Insert failed", details: err.message });
        }
        res.status(201).json({ message: "Event created", id: result.insertId });
      }
    );
  });

  // GET all events
  router.get("/Organizer", (req, res) => {
    const renumberQuery = `
    SET @count = 0;
    UPDATE Events_Organizer SET id = (@count := @count + 1);
  `;
    const resetAutoIncrementQuery = `ALTER TABLE Events_Organizer AUTO_INCREMENT = 1`;
    const fetchQuery = `SELECT * FROM Events_Organizer`;

    // First: renumber IDs
    db.query(renumberQuery, (err1) => {
      if (err1) {
        console.error("❌ Renumber Error:", err1);
        return res.status(500).json({ error: "Failed to renumber events" });
      }

      // Second: reset auto_increment
      db.query(resetAutoIncrementQuery, (err2) => {
        if (err2) {
          console.error("❌ Auto-increment Reset Error:", err2);
          return res
            .status(500)
            .json({ error: "Failed to reset auto-increment" });
        }

        // Finally: fetch data
        db.query(fetchQuery, (err3, results) => {
          if (err3) {
            console.error("❌ Fetch Error:", err3);
            return res.status(500).json({ error: "Failed to fetch events" });
          }

          res.json(results);
        });
      });
    });
  });

  // GET one event by ID
  router.get("/Organizer/:id", (req, res) => {
    const eventId = req.params.id;
    db.query(
      "SELECT * FROM Events_Organizer WHERE id = ?",
      [eventId],
      (err, results) => {
        if (err) {
          console.error("❌ Fetch One Error:", err);
          return res.status(500).json({ error: "Failed to fetch event" });
        }
        if (results.length === 0) {
          return res.status(404).json({ error: "Event not found" });
        }
        res.json(results[0]);
      }
    );
  });

  // UPDATE event by ID
  router.put("/Organizer/:id", (req, res) => {
    const eventId = req.params.id;
    const {
      fullNameEvent,
      shortNameEvent,
      description,
      startDate,
      endDate,
      startTime,
      endTime,
      venue,
      address,
    } = req.body;

    const query = `
      UPDATE Events_Organizer SET 
        fullNameEvent=?, shortNameEvent=?, description=?,
        startDate=?, endDate=?, startTime=?, endTime=?,
        venue=?, address=?
      WHERE id=?
    `;

    db.query(
      query,
      [
        fullNameEvent,
        shortNameEvent,
        description,
        startDate,
        endDate,
        formatTime(startTime),
        formatTime(endTime),
        venue,
        address,
        eventId,
      ],
      (err, result) => {
        if (err) {
          console.error("❌ Update Error:", err);
          return res.status(500).json({ error: "Update failed" });
        }
        res.json({ message: "Event updated" });
      }
    );
  });

  // DELETE event by ID
  router.delete("/Organizer/:id", (req, res) => {
    const eventId = req.params.id;

    const deleteQuery = "DELETE FROM Events_Organizer WHERE id = ?";
    const resetIdQuery = "ALTER TABLE Events_Organizer AUTO_INCREMENT = 1";

    db.query(deleteQuery, [eventId], (err, result) => {
      if (err) {
        console.error("❌ Delete Error:", err);
        return res.status(500).json({ error: "Delete failed" });
      }

      // Reset auto-increment
      db.query(resetIdQuery, (err2) => {
        if (err2) {
          console.error("❌ AUTO_INCREMENT Reset Error:", err2);
          return res
            .status(500)
            .json({ error: "Deleted, but failed to reset ID" });
        }

        res.json({ message: "✅ Event Deleted" });
      });
    });
  });

  return router;
}

module.exports = OrganizerEventRoutes;
