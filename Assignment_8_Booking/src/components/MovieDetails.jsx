import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from the URL
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Movie Details</h1>
      <p>Details for Movie ID: {id}</p>

      <button
        onClick={handleBookNow}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Book Now
      </button>
    </div>
  );
};

export default MovieDetails;
