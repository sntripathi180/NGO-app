import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/volunteers`);
        setVolunteers(response.data.data || []); 
      } catch (err) {
        setError("Failed to load volunteers");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  if (loading) return <p>Loading volunteers...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-bold mb-6 text-purple-400">Volunteers</h1>
      {volunteers.length === 0 ? (
        <p>No volunteers found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Role</th>
             
            </tr>
          </thead>
          <tbody>
            {volunteers.map((vol) => (
              <tr key={vol._id || vol.id}>
                <td className="border border-gray-300 p-2 text-white">{vol.fullname || vol.name}</td>
                <td className="border border-gray-300 p-2 text-white">{vol.email}</td>
                <td className="border border-gray-300 p-2 text-white ">{vol.role || "volunteer"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
