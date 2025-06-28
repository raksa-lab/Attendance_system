const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// 🏫 Sample Data
const University = {
  "Royal University": {
    faculties: [
      "Faculty of Science",
      "Faculty of Engineering",
      "Faculty of Social Science and Humanities",
      "Faculty of Development Studies",
    ],
    departments: {
      "Faculty of Science": [
        "Biology", "Chemistry", "Computer Science",
        "Environmental Science", "Mathematics", "Physics",
      ],
      "Faculty of Engineering": [
        "Information Technology Engineering", "Telecommunication and Electronic Engineering",
        "Bio Engineering", "Automation & Supply Chain Systems Engineering",
        "Environmental Engineering",
      ],
      "Faculty of Social Science and Humanities": [
        "Geography and Land Management", "History", "Khmer Literature",
        "International Business Management", "Linguistics", "Philosophy",
        "Psychology", "Media and Communication", "Sociology",
        "Social Work", "Tourism",
      ],
      "Faculty of Development Studies": [],
    },
  },
  HUS: {
    faculties: ["IT", "Math"],
    departments: {
      IT: ["Software", "Network"],
      Math: ["Applied Math", "Statistics"],
    },
  },
  ITC: {
    faculties: ["Technology", "Engineering"],
    departments: {
      Technology: ["Computer Science", "Information Systems"],
      Engineering: ["Mechanical", "Electrical"],
    },
  },
  CADT: {
    faculties: ["Digital", "Telecom"],
    departments: {
      Digital: ["Digital Media", "Digital Business"],
      Telecom: ["Telecom Engineering"],
    },
  },
};

// 📦 DB Pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "raksa12534",
  database: "attendance_system",
  multipleStatements: true,
});

// ⚙️ Init Database
async function initDatabase() {
  const connection = await pool.getConnection();

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
  console.log("✅ Tables created.");

  for (const [uniName, uniData] of Object.entries(University)) {
    const [uniResult] = await connection.execute(
      `INSERT INTO universities (name) VALUES (?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)`,
      [uniName]
    );
    const universityId = uniResult.insertId;

    for (const facultyName of uniData.faculties) {
      const [facResult] = await connection.execute(
        `INSERT INTO faculties (university_id, name) VALUES (?, ?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)`,
        [universityId, facultyName]
      );
      const facultyId = facResult.insertId;

      const departments = uniData.departments[facultyName] || [];
      for (const deptName of departments) {
        await connection.execute(
          `INSERT INTO departments (faculty_id, name) VALUES (?, ?) ON DUPLICATE KEY UPDATE name=name`,
          [facultyId, deptName]
        );
      }
    }
  }

  connection.release();
  console.log("✅ Initial data inserted.");
}

// 🛠 API Routes

// Root
app.get("/", (req, res) => res.send("🎉 API is running"));

// Universities
app.get("/universities", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM universities");
  res.json(rows);
});

app.post("/universities", async (req, res) => {
  const { name } = req.body;
  await pool.query("INSERT INTO universities (name) VALUES (?)", [name]);
  res.json({ message: "University added" });
});

app.put("/universities/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await pool.query("UPDATE universities SET name = ? WHERE id = ?", [name, id]);
  res.json({ message: "University updated" });
});

app.delete("/universities/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM universities WHERE id = ?", [id]);
  res.json({ message: "University deleted" });
});

// Faculties
app.get("/faculties/:university_id", async (req, res) => {
  const { university_id } = req.params;
  const [rows] = await pool.query("SELECT * FROM faculties WHERE university_id = ?", [university_id]);
  res.json(rows);
});

app.post("/faculties", async (req, res) => {
  const { university_id, name } = req.body;
  await pool.query("INSERT INTO faculties (university_id, name) VALUES (?, ?)", [university_id, name]);
  res.json({ message: "Faculty added" });
});

app.put("/faculties/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await pool.query("UPDATE faculties SET name = ? WHERE id = ?", [name, id]);
  res.json({ message: "Faculty updated" });
});

app.delete("/faculties/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM faculties WHERE id = ?", [id]);
  res.json({ message: "Faculty deleted" });
});

// Departments
app.get("/departments/:faculty_id", async (req, res) => {
  const { faculty_id } = req.params;
  const [rows] = await pool.query("SELECT * FROM departments WHERE faculty_id = ?", [faculty_id]);
  res.json(rows);
});

app.post("/departments", async (req, res) => {
  const { faculty_id, name } = req.body;
  await pool.query("INSERT INTO departments (faculty_id, name) VALUES (?, ?)", [faculty_id, name]);
  res.json({ message: "Department added" });
});

app.put("/departments/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await pool.query("UPDATE departments SET name = ? WHERE id = ?", [name, id]);
  res.json({ message: "Department updated" });
});

app.delete("/departments/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM departments WHERE id = ?", [id]);
  res.json({ message: "Department deleted" });
});

// 🚀 Start Server
app.listen(port, async () => {
  await initDatabase();
  console.log(`🚀 Server running at http://localhost:${port}`);
});
