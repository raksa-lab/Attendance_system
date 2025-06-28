const mysql = require("mysql2");
const bcrypt = require("bcrypt");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "raksa12534",
  database: "attendance_system",
});

const username = "Raksa";
const password = "12534";
const role = "admin";

bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  db.query(
    "INSERT INTO users (username, password, role, is_approved) VALUES (?, ?, ?, TRUE)",
    [username, hash, role],
    (err, res) => {
      if (err) console.error(err);
      else console.log("Admin created.");
      db.end();
    }
  );
});
