// Server.js
const express = require("express");
const cors = require("cors");
const mysqlLegacy = require("mysql2"); // For User.js routes
const mysqlPromise = require("mysql2/promise"); // For University.js routes

// Import the modularized route files
const createUserRoutes = require("./routes/userRoutes");
const createUniversityRoutes = require("./routes/universityRoutes");
const OrganizerEventRoutes = require("./routes/OrganizerRoutes");

const app = express();
const port = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// --- Database Connections ---

// Connection for User.js (callback-style)
const dbUser = mysqlLegacy.createConnection({
  host: "localhost",
  user: "root",
  password: "raksa12534",
  database: "attendance_system",
  port: 3306,
  multipleStatements: true, // IMPORTANT: Needed for reorder queries in userRoutes.js
});

dbUser.connect((err) => {
  if (err) {
    console.error("❌ MySQL User DB Connection Error:", err);
    return;
  }
  console.log("✅ Connected to MySQL Database (User operations)");
});

// Connection Pool for University.js (promise-based)
const dbUniversityPool = mysqlPromise.createPool({
  host: "localhost",
  user: "root",
  password: "raksa12534",
  database: "attendance_system",
  multipleStatements: true,
});

// --- University Data (moved here for consistency, but could stay in universityRoutes.js if preferred) ---
const UniversityData = {
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

// --- Use the modularized routes ---

// User routes (mounted under /api)
app.use("/api", createUserRoutes(dbUser));
app.use("/api", OrganizerEventRoutes(dbUser));
const { router: universityRouter, initUniversityDatabase } = createUniversityRoutes(dbUniversityPool, UniversityData);
app.use("/", universityRouter); // Or app.use("/university", universityRouter); if you want a prefix

 // Organizer routes under /organizer

// Root API is still here
app.get("/", (req, res) => res.send("🎉 API is running"));


// --- Server Start ---
app.listen(port, async () => {
  // Initialize the University related database first
  await initUniversityDatabase(); // Call the init function from the university module
  console.log(`🚀 Backend running at http://localhost:${port}`);
});