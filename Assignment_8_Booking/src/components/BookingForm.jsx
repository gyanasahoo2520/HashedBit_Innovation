import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate booking details
    const bookingDetails = {
      name,
      email,
      mobile,
      bookingId: Math.floor(1000 + Math.random() * 9000), // Random 4-digit booking ID
    };

    // Navigate to BookingConfirmation with state
    navigate("/confirmation", { state: { details: bookingDetails } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "auto",
      }}
    >
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Mobile:
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
