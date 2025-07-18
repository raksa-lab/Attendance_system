const express = require("express");
const cors = require("cors");
const mysqlLegacy = require("mysql2"); // For User.js routes
const mysqlPromise = require("mysql2/promise"); // For University.js routes
const path = require("path"); // Import path for serving static files
const multer = require("multer"); // Import multer for MulterError handling in global error handler

// Import the modularized route files
const createUserRoutes = require("./routes/userRoutes");
const createUniversityRoutes = require("./routes/universityRoutes");
const OrganizerEventRoutes = require("./routes/OrganizerRoutes"); // Assuming OrganizerRoutes.js is in ./routes/

const app = express();
const port = 3001; // Your backend server will run on port 3001

// Middlewares
// Configure CORS to allow requests from your frontend.
// Replace 'http://localhost:5173' with the actual URL of your frontend development server.
app.use(cors({
  origin: 'http://localhost:5173', // Example: For a React app created with Vite. If Create React App, it's usually http://localhost:3000
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Include Authorization if you add auth tokens later
}));
app.use(express.json()); // To parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded request bodies

// Serve static files from the 'uploads' directory.
// This makes uploaded images accessible via URLs like http://localhost:3001/uploads/your-image.jpg
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// --- Database Connections ---

// Connection for User.js and OrganizerRoutes (callback-style)
const dbUser = mysqlLegacy.createConnection({
  host: "localhost",
  user: "root",
  password: "raksa12534",
  database: "attendance_system",
  port: 3306,
  multipleStatements: true, // IMPORTANT: Needed for reorder queries in userRoutes.js and potentially OrganizerRoutes
});

dbUser.connect((err) => {
  if (err) {
    console.error("❌ MySQL User DB Connection Error:", err);
    return; // Exit if DB connection fails
  }
  console.log("✅ Connected to MySQL Database (User & Organizer operations)");
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

// Organizer routes (mounted under /api)
// This will handle /api/Organizer and /api/Organizer/upload
app.use("/api", OrganizerEventRoutes(dbUser));

// University routes (mounted under / by default, or change to /university if desired)
const { router: universityRouter, initUniversityDatabase } = createUniversityRoutes(dbUniversityPool, UniversityData);
app.use("/", universityRouter); // Or app.use("/university", universityRouter); if you want a prefix

// Root API is still here
app.get("/", (req, res) => res.send("🎉 API is running"));

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the full error stack for debugging purposes

  // Handle Multer-specific errors
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large, max 5MB allowed.' });
    }
    // For other Multer errors (e.g., 'LIMIT_UNEXPECTED_FILE', 'LIMIT_FIELD_COUNT')
    return res.status(400).json({ error: err.message });
  }

  // Handle generic server errors
  res.status(500).json({ error: 'Something went wrong!', details: err.message });
});


// --- Server Start ---
app.listen(port, async () => {
  // Initialize the University related database first
  await initUniversityDatabase(); // Call the init function from the university module
  console.log(`🚀 Backend running at http://localhost:${port}`);
});
