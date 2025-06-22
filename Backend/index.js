const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const port = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",     // or "mysql" if you're using Docker Compose
  user: "root",
  password: "raksa12534",
  database: "attendance_system",
  port: 3306,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Error:", err);
    return;
  }
  console.log("✅ Connected to MySQL Database");
});

// API endpoint: register student
app.post("/api/students", (req, res) => {
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
    INSERT INTO students_not_checkin (
      first_name, last_name, gender, phone_number,
      university, faculty, department, year
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
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
        console.error("❌ Insert Error:", err.sqlMessage || err);
        return res.status(500).json({ error: err.sqlMessage || "Insert failed" });
      }
      console.log("✅ Student inserted with ID:", result.insertId);
      res.status(201).json({ message: "Student registered successfully" });
    }
  );
});

app.post("/api/checkins", (req, res) => {
    const { phone_number } = req.body;
    const query = `INSERT INTO students_checkin (phone_number) VALUES (?)`;

    db.query(query, [phone_number] , (err , result) => {
        if(err) {
            console.error("❌ Check-in Insert Error:" , err.sqlMessage || err);
            return res.status(500).json({ error: err.sqlMessage || "Check-in failed" });
        }
        else {
            console.log("✅ Check-in successful for phone number:", phone_number);
            res.status(201).json({ message: "Check-in successful" });
        }
    });
});

// Health check route
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`🚀 Backend running at http://localhost:${port}`);
});
