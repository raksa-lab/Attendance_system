const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3001;
const JWT_SECRET = "your_jwt_secret";

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "raksa12534",
  database: "attendance_system",
});

// LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], async (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (results.length === 0) return res.status(401).json({ error: "User not found" });

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid password" });

    if (user.role === "organizer" && !user.is_approved) {
      return res.status(403).json({ error: "Organizer not approved yet." });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, role: user.role });
  });
});

// CREATE ORGANIZER (admin only)
app.post("/create-organizer", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = "INSERT INTO users (username, password, role, is_approved) VALUES (?, ?, 'organizer', TRUE)";
  db.query(query, [username, hashedPassword], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ error: "Username already exists" });
      }
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "Organizer created and approved." });
  });
});

// GET UNAPPROVED ORGANIZERS (for admin)
app.get("/unapproved", (req, res) => {
  db.query("SELECT id, username FROM users WHERE role = 'organizer' AND is_approved = FALSE", (err, result) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.json(result);
  });
});

// APPROVE ORGANIZER (admin action)
app.post("/approve", (req, res) => {
  const { id } = req.body;
  db.query("UPDATE users SET is_approved = TRUE WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: "Approval error" });
    res.json({ message: "Organizer approved." });
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
