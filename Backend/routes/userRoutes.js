// routes/userRoutes.js
const express = require("express");
const router = express.Router();

module.exports = (db) => { // Accept db connection as an argument
  // --- STUDENTS --- //

  // GET all students_not_checkin
  router.get("/user/students_not_checkins", (req, res) => {
    db.query("SELECT * FROM students_not_checkin", (err, results) => {
      if (err) {
        console.error("❌ Fetch Students Error:", err);
        return res.status(500).json({ error: "Failed to fetch students" });
      }
      res.json(results);
    });
  });

  // POST register new student
  router.post("/user/students_not_checkins", (req, res) => {
    const {
      first_name,
      last_name,
      gender,
      phone_number,
      university,
      faculty,
      department,
      year,
    } = req.body;

    const query = `
      INSERT INTO students_not_checkin
      (first_name, last_name, gender, phone_number, university, faculty, department, year)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      query,
      [
        first_name,
        last_name,
        gender,
        phone_number,
        university,
        faculty,
        department,
        year,
      ],
      (err, result) => {
        if (err) {
          console.error("❌ Insert Student Error:", err.sqlMessage || err);
          return res
            .status(500)
            .json({ error: err.sqlMessage || "Insert failed" });
        }
        res
          .status(201)
          .json({
            message: "Student registered successfully",
            id: result.insertId,
          });
      }
    );
  });

  // PUT update student by ID
  router.put("/user/students_not_checkins/:id", (req, res) => {
    const { id } = req.params;
    const {
      first_name,
      last_name,
      gender,
      phone_number,
      university,
      faculty,
      department,
      year,
    } = req.body;

    const query = `
      UPDATE students_not_checkin
      SET first_name=?, last_name=?, gender=?, phone_number=?, university=?, faculty=?, department=?, year=?
      WHERE id=?
    `;

    db.query(
      query,
      [
        first_name,
        last_name,
        gender,
        phone_number,
        university,
        faculty,
        department,
        year,
        id,
      ],
      (err) => {
        if (err) {
          console.error("❌ Update Student Error:", err.sqlMessage || err);
          return res
            .status(500)
            .json({ error: err.sqlMessage || "Update failed" });
        }
        res.json({ message: "Student updated successfully" });
      }
    );
  });

  // DELETE student by ID + auto-increment reset if empty
  router.delete("/user/students_not_checkins/:id", (req, res) => {
    const { id } = req.params;
    const deleteQuery = "DELETE FROM students_not_checkin WHERE id=?";

    db.query(deleteQuery, [id], (err) => {
      if (err) {
        console.error("❌ Delete Student Error:", err.sqlMessage || err);
        return res.status(500).json({ error: err.sqlMessage || "Delete failed" });
      }

      const reorderQuery = `
        SET @count = 0;
        UPDATE students_not_checkin SET id = (@count := @count + 1);
        ALTER TABLE students_not_checkin AUTO_INCREMENT = 1;
      `;

      // Note: For multiple statements, the db connection usually needs multipleStatements: true
      // or execute each query separately. Assuming multipleStatements is enabled if this was working before.
      db.query(reorderQuery, (err) => {
        if (err) {
          console.error("❌ Reorder Student ID Error:", err);
          return res.json({
            message: "Student deleted, but failed to reorder IDs",
          });
        }
        console.log("🔄 Student IDs reordered");
        res.json({ message: "Student deleted and IDs reordered" });
      });
    });
  });

  // --- CHECKINS --- //

  // GET all check-ins
  router.get("/user/students_checkins", (req, res) => {
    db.query("SELECT * FROM students_checkin", (err, results) => {
      if (err) {
        console.error("❌ Fetch Check-ins Error:", err);
        return res.status(500).json({ error: "Failed to fetch check-ins" });
      }
      res.json(results);
    });
  });

  // POST log check-in with timestamp
  // router.post("/user/students_checkins", (req, res) => {
  //   const { phone_number } = req.body;
  //   const query = `INSERT INTO students_checkin (phone_number, checkin_time) VALUES (?, NOW())`;

  //   db.query(query, [phone_number], (err, result) => {
  //     if (err) {
  //       console.error("❌ Insert Check-in Error:", err.sqlMessage || err);
  //       return res.status(500).json({ error: err.sqlMessage || "Insert failed" });
  //     }
  //     res
  //       .status(201)
  //       .json({ message: "Check-in successful", id: result.insertId });
  //   });
  // });

  router.post("/user/students_checkins", (req, res) => {
    const { phone_number } = req.body;
    if (!phone_number) {
        return res.status(400).json({ error: "phone_number is required" });
    }
    const query = `INSERT INTO students_checkin (phone_number, checked_in_at) VALUES (?, NOW())`;
    db.query(query, [phone_number], (err, result) => {
        if (err) {
            console.error("❌ Insert Check-in Error:", err.sqlMessage || err);
            return res.status(500).json({ error: err.sqlMessage || "Insert failed" });
        }
        res
            .status(201)
            .json({
                message: "Check-in successful",
                id: result.insertId 
            });
    });
});

  // PUT update check-in by ID
  router.put("/user/students_checkins/:id", (req, res) => {
    const { id } = req.params;
    const { phone_number } = req.body;

    const query = `
      UPDATE students_checkin
      SET phone_number=?
      WHERE id=?
    `;

    db.query(query, [phone_number, id], (err) => {
      if (err) {
        console.error("❌ Update Check-in Error:", err.sqlMessage || err);
        return res.status(500).json({ error: err.sqlMessage || "Update failed" });
      }
      res.json({ message: "Check-in updated successfully" });
    });
  });

  // DELETE check-in by ID + auto-increment reset if empty
  router.delete("/user/students_checkins/:id", (req, res) => {
    const { id } = req.params;
    const deleteQuery = "DELETE FROM students_checkin WHERE id=?";

    db.query(deleteQuery, [id], (err) => {
      if (err) {
        console.error("❌ Delete Check-in Error:", err.sqlMessage || err);
        return res.status(500).json({ error: err.sqlMessage || "Delete failed" });
      }

      const reorderQuery = `
        SET @count = 0;
        UPDATE students_checkin SET id = @count := @count + 1;
        ALTER TABLE students_checkin AUTO_INCREMENT = 1;
      `;

      // Note: For multiple statements, the db connection usually needs multipleStatements: true
      // or execute each query separately. Assuming multipleStatements is enabled if this was working before.
      db.query(reorderQuery, (err) => {
        if (err) {
          console.error("❌ Reorder Check-in ID Error:", err);
          return res.json({
            message: "Check-in deleted, but failed to reorder IDs",
          });
        }
        console.log("🔄 Check-in IDs reordered");
        res.json({ message: "Check-in deleted and IDs reordered" });
      });
    });
  });

  return router;
};