import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import BookingForm from "./components/BookingForm";
import BookingConfirmation from "./components/BookingConfirmation";

const App = () => {
  const navigate = useNavigate();

  const handleSelectMovie = (movie) => {
    // Navigate to movie details page
    navigate(`/movie/${movie.id}`);
  };

  const handleBookingSubmit = (bookingDetails) => {
    // Navigate to booking confirmation page with booking details
    navigate("/confirmation", { state: { details: bookingDetails } });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<MovieList onSelectMovie={handleSelectMovie} />}
      />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route
        path="/book/:id"
        element={<BookingForm onSubmit={handleBookingSubmit} />}
      />
      <Route path="/confirmation" element={<BookingConfirmation />} />
    </Routes>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
