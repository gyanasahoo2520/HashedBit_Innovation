import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const details = location.state?.details;

  if (!details) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>No Booking Details Found!</h1>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go Back to Booking Form
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Seat Booked Successfully!</h1>
      <h2>Booking ID: {details.bookingId}</h2>
      <p>Name: {details.name}</p>
      <p>Email: {details.email}</p>
      <p>Mobile: {details.mobile}</p>
    </div>
  );
};

export default BookingConfirmation;
