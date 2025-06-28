import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [organizers, setOrganizers] = useState([]);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const fetchOrganizers = async () => {
    const res = await axios.get("http://localhost:3001/unapproved");
    setOrganizers(res.data);
  };

  const approve = async (id) => {
    await axios.post("http://localhost:3001/approve", { id });
    fetchOrganizers();
  };

  const createOrganizer = async () => {
    try {
      await axios.post("http://localhost:3001/create-organizer", {
        username: newUsername,
        password: newPassword,
      });
      alert("Organizer created.");
      setNewUsername("");
      setNewPassword("");
      fetchOrganizers();
    } catch (err) {
      alert(err.response?.data?.error || "Failed to create organizer");
    }
  };

  useEffect(() => {
    fetchOrganizers();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <h3>Create New Organizer</h3>
      <input
        placeholder="Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={createOrganizer}>Create Organizer</button>

      <h3>Pending Organizer Approvals</h3>
      <ul>
        {organizers.map((o) => (
          <li key={o.id}>
            {o.username} <button onClick={() => approve(o.id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
