// routes/universityRoutes.js
const express = require("express");
const router = express.Router();

module.exports = (dbPool, universityData) => {
  // Accept dbPool and universityData as arguments
  // Initialize University Database Tables and Data
  async function initUniversityDatabase() {
    let connection;
    try {
      connection = await dbPool.getConnection();

      const createTablesSQL = `
        CREATE TABLE IF NOT EXISTS universities (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) UNIQUE NOT NULL
        );

        CREATE TABLE IF NOT EXISTS faculties (
          id INT AUTO_INCREMENT PRIMARY KEY,
          university_id INT NOT NULL,
          name VARCHAR(255) NOT NULL,
          UNIQUE KEY unique_faculty (university_id, name),
          FOREIGN KEY (university_id) REFERENCES universities(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS departments (
          id INT AUTO_INCREMENT PRIMARY KEY,
          faculty_id INT NOT NULL,
          name VARCHAR(255) NOT NULL,
          UNIQUE KEY unique_department (faculty_id, name),
          FOREIGN KEY (faculty_id) REFERENCES faculties(id) ON DELETE CASCADE
        );
      `;
      await connection.query(createTablesSQL);
      console.log("✅ University related tables created.");

      for (const [uniName, uniDataEntry] of Object.entries(universityData)) {
        const [uniResult] = await connection.execute(
          `INSERT INTO universities (name) VALUES (?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)`,
          [uniName]
        );
        const universityId = uniResult.insertId;

        for (const facultyName of uniDataEntry.faculties) {
          const [facResult] = await connection.execute(
            `INSERT INTO faculties (university_id, name) VALUES (?, ?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)`,
            [universityId, facultyName]
          );
          const facultyId = facResult.insertId;

          const departments = uniDataEntry.departments[facultyName] || [];
          for (const deptName of departments) {
            await connection.execute(
              `INSERT INTO departments (faculty_id, name) VALUES (?, ?) ON DUPLICATE KEY UPDATE name=name`,
              [facultyId, deptName]
            );
          }
        }
      }
      console.log("✅ Initial university data inserted.");
    } catch (error) {
      console.error("❌ Error initializing University database:", error);
    } finally {
      if (connection) connection.release();
    }
  }

  // --- API Routes ---

  // Universities
  router.get("/", (req, res) => res.send("🎉 University API is running")); 

  router.get("/api/get/universities", async (req, res) => {
    try {
      const [rows] = await dbPool.query("SELECT * FROM universities");

      // Reset ID only in response (not database)
      const resetRows = rows.map((row, index) => ({
        ...row,
        id: index + 1, // Overwrite original id with new sequential id
      }));

      res.json(resetRows);
    } catch (error) {
      console.error("❌ Fetch Universities Error:", error);
      res.status(500).json({ error: "Failed to fetch universities" });
    }
  });

  router.post("/api/post/universities", async (req, res) => {
    try {
      const { name } = req.body;
      await dbPool.query("INSERT INTO universities (name) VALUES (?)", [name]);
      res.json({ message: "University added" });
    } catch (error) {
      console.error("❌ Add University Error:", error);
      res.status(500).json({ error: "Failed to add university" });
    }
  });

  router.put("/api/put/universities/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      await dbPool.query("UPDATE universities SET name = ? WHERE id = ?", [
        name,
        id,
      ]);
      res.json({ message: "University updated" });
    } catch (error) {
      console.error("❌ Update University Error:", error);
      res.status(500).json({ error: "Failed to update university" });
    }
  });

  router.delete("/api/delete/universities/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await dbPool.query("DELETE FROM universities WHERE id = ?", [id]);
      res.json({ message: "University deleted" });
    } catch (error) {
      console.error("❌ Delete University Error:", error);
      res.status(500).json({ error: "Failed to delete university" });
    }
  });

  // Faculties
  router.get("/api/faculties/:university_id", async (req, res) => {
    try {
      const { university_id } = req.params;
      const [rows] = await dbPool.query(
        "SELECT * FROM faculties WHERE university_id = ?",
        [university_id]
      );
      res.json(rows);
    } catch (error) {
      console.error("❌ Fetch Faculties Error:", error);
      res.status(500).json({ error: "Failed to fetch faculties" });
    }
  });

  router.post("/api/faculties", async (req, res) => {
    try {
      const { university_id, name } = req.body;
      await dbPool.query(
        "INSERT INTO faculties (university_id, name) VALUES (?, ?)",
        [university_id, name]
      );
      res.json({ message: "Faculty added" });
    } catch (error) {
      console.error("❌ Add Faculty Error:", error);
      res.status(500).json({ error: "Failed to add faculty" });
    }
  });

  router.put("/api/faculties/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      await dbPool.query("UPDATE faculties SET name = ? WHERE id = ?", [
        name,
        id,
      ]);
      res.json({ message: "Faculty updated" });
    } catch (error) {
      console.error("❌ Update Faculty Error:", error);
      res.status(500).json({ error: "Failed to update faculty" });
    }
  });

  router.delete("/api/faculties/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await dbPool.query("DELETE FROM faculties WHERE id = ?", [id]);
      res.json({ message: "Faculty deleted" });
    } catch (error) {
      console.error("❌ Delete Faculty Error:", error);
      res.status(500).json({ error: "Failed to delete faculty" });
    }
  });

  // Departments
  router.get("/api/departments/:faculty_id", async (req, res) => {
    try {
      const { faculty_id } = req.params;
      const [rows] = await dbPool.query(
        "SELECT * FROM departments WHERE faculty_id = ?",
        [faculty_id]
      );
      res.json(rows);
    } catch (error) {
      console.error("❌ Fetch Departments Error:", error);
      res.status(500).json({ error: "Failed to fetch departments" });
    }
  });

  router.post("/api/departments", async (req, res) => {
    try {
      const { faculty_id, name } = req.body;
      await dbPool.query(
        "INSERT INTO departments (faculty_id, name) VALUES (?, ?)",
        [faculty_id, name]
      );
      res.json({ message: "Department added" });
    } catch (error) {
      console.error("❌ Add Department Error:", error);
      res.status(500).json({ error: "Failed to add department" });
    }
  });

  router.put("/api/departments/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      await dbPool.query("UPDATE departments SET name = ? WHERE id = ?", [
        name,
        id,
      ]);
      res.json({ message: "Department updated" });
    } catch (error) {
      console.error("❌ Update Department Error:", error);
      res.status(500).json({ error: "Failed to update department" });
    }
  });

  router.delete("/api/departments/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await dbPool.query("DELETE FROM departments WHERE id = ?", [id]);
      res.json({ message: "Department deleted" });
    } catch (error) {
      console.error("❌ Delete Department Error:", error);
      res.status(500).json({ error: "Failed to delete department" });
    }
  });

  return { router, initUniversityDatabase }; // Export both the router and the init function
};
