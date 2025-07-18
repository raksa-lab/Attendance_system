const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

function OrganizerEventRoutes(db) {
  const router = express.Router();

  // Setup Multer for image upload
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = "uploads"; // Images will be stored in a folder named 'uploads'
      // Ensure the directory exists. Create it if it doesn't.
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      // Create a unique filename using timestamp and original extension
      const uniqueName = Date.now() + path.extname(file.originalname);
      cb(null, uniqueName);
    }
  });

  const upload = multer({ storage: storage }); 
  router.post("/Organizer/upload", upload.single("imageFile"), (req, res) => { // Changed 'image' to 'imageFile' to match frontend's name
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    // The imageUrl will be relative to the static files served by Express
    const imageUrl = "/uploads/" + req.file.filename;
    res.status(200).json({ message: "✅ Image uploaded", imageUrl: imageUrl }); // Return the imageUrl
  });

  // Helper to fix time
  const formatTime = (time) => (time && time.length === 5 ? time + ":00" : time);

  // Route: Create event
  // This endpoint now expects 'imageUrl' in the request body, which comes from the frontend
  // after it has successfully uploaded the image via the /Organizer/upload endpoint.
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
      imageUrl // Received from frontend after image upload
    } = req.body;

    const query = `
      INSERT INTO Events_Organizer (
        fullNameEvent, shortNameEvent, description,
        startDate, endDate, startTime, endTime,
        venue, address, imageUrl
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
        imageUrl // Store the received imageUrl in the database
      ],
      (err, result) => {
        if (err) {
          console.error("❌ Insert Error:", err);
          return res.status(500).json({ error: "Insert failed", details: err.message });
        }

        res.status(201).json({ message: "✅ Event created", id: result.insertId, imageUrl: imageUrl });
      }
    );
  });

  // Route: Get all events
  router.get("/Organizer", (req, res) => {
    const fetchQuery = `SELECT * FROM Events_Organizer`;
    db.query(fetchQuery, (err, results) => {
      if (err) {
        console.error("❌ Fetch Error:", err);
        return res.status(500).json({ error: "Failed to fetch events" });
      }
      res.json(results);
    });
  });

  // Route: Get one event by ID
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
      imageUrl // Received from frontend (can be new or existing URL)
    } = req.body;

    db.query("SELECT imageUrl FROM Events_Organizer WHERE id = ?", [eventId], (err, currentResults) => {
      if (err) {
        console.error("❌ Fetch Current Image URL Error (for update):", err);
        return res.status(500).json({ error: "Failed to update event" });
      }

      let oldImageUrlInDb = null;
      if (currentResults.length > 0 && currentResults[0].imageUrl) {
        oldImageUrlInDb = currentResults[0].imageUrl;
      }

      const query = `
        UPDATE Events_Organizer SET 
          fullNameEvent=?, shortNameEvent=?, description=?,
          startDate=?, endDate=?, startTime=?, endTime=?,
          venue=?, address=?, imageUrl=?
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
          imageUrl, // Update with the new or existing imageUrl
          eventId
        ],
        (err, result) => {
          if (err) {
            console.error("❌ Update Error:", err);
            return res.status(500).json({ error: "Update failed", details: err.message });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Event not found for update" });
          }
          if (imageUrl && oldImageUrlInDb && imageUrl !== oldImageUrlInDb) {
            const fullOldPath = path.join(__dirname, oldImageUrlInDb); // Path to the old file
            fs.unlink(fullOldPath, (unlinkErr) => {
              if (unlinkErr && unlinkErr.code !== 'ENOENT') { // 'ENOENT' means file not found, which is fine
                console.error("Error deleting old image file during update:", unlinkErr);
              }
            });
          }

          res.json({ message: "✅ Event updated" });
        }
      );
    });
  });

  router.delete("/Organizer/:id", (req, res) => {
    const eventId = req.params.id;
    db.query("SELECT imageUrl FROM Events_Organizer WHERE id = ?", [eventId], (err, results) => {
      if (err) {
        console.error("❌ Fetch Image URL for Delete Error:", err);
        return res.status(500).json({ error: "Delete failed", details: err.message });
      }

      let imageUrlToDelete = null;
      if (results.length > 0 && results[0].imageUrl) {
        imageUrlToDelete = results[0].imageUrl;
      }

      const deleteQuery = "DELETE FROM Events_Organizer WHERE id = ?";

      db.query(deleteQuery, [eventId], (err, result) => {
        if (err) {
          console.error("❌ Delete Error:", err);
          return res.status(500).json({ error: "Delete failed", details: err.message });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({ error: "Event not found for deletion" });
        }

        // If an image URL existed, delete the file from the server
        if (imageUrlToDelete) {
          // Construct the full path to the image file on the server
          const fullPathToDelete = path.join(__dirname, imageUrlToDelete);
          fs.unlink(fullPathToDelete, (unlinkErr) => {
            if (unlinkErr && unlinkErr.code !== 'ENOENT') { // ENOENT means file not found, which is okay
              console.error("Error deleting event image file:", unlinkErr);
            }
          });
        }

        const renumberQuery = `
          SET @count = 0;
          UPDATE Events_Organizer SET id = (@count := @count + 1) ORDER BY id;
        `;
        const resetAutoIncrementQuery = `ALTER TABLE Events_Organizer AUTO_INCREMENT = 1`;

        db.query(renumberQuery, (errRenumber) => {
          if (errRenumber) {
            console.error("❌ Renumber Error (during delete cleanup):", errRenumber);
            // Don't return error here, as main delete was successful
          }
          db.query(resetAutoIncrementQuery, (errReset) => {
            if (errReset) {
              console.error("❌ AUTO_INCREMENT Reset Error (during delete cleanup):", errReset);
            }
            res.json({ message: "✅ Event deleted" });
          });
        });
      });
    });
  });

  return router;
}

module.exports = OrganizerEventRoutes;
