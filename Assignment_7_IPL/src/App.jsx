import React, { useState } from "react";
import "./App.css";

const App = () => {
  // Sample IPL 2023 Points Table Data
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Gujarat Titans",
      played: 14,
      won: 10,
      lost: 4,
      nrr: "+0.809",
      points: 20,
    },
    {
      id: 2,
      name: "Chennai Super Kings",
      played: 14,
      won: 8,
      lost: 5,
      nrr: "+0.652",
      points: 17,
    },
    {
      id: 3,
      name: "Lucknow Super Giants",
      played: 14,
      won: 8,
      lost: 5,
      nrr: "+0.284",
      points: 17,
    },
    {
      id: 4,
      name: "Mumbai Indians",
      played: 14,
      won: 8,
      lost: 6,
      nrr: "-0.044",
      points: 16,
    },
    {
      id: 5,
      name: "Rajasthan Royals",
      played: 14,
      won: 7,
      lost: 7,
      nrr: "+0.148",
      points: 14,
    },
    {
      id: 6,
      name: "Royal Challengers Bangalore",
      played: 14,
      won: 7,
      lost: 7,
      nrr: "+0.135",
      points: 14,
    },
    {
      id: 7,
      name: "Kolkata Knight Riders",
      played: 14,
      won: 6,
      lost: 8,
      nrr: "-0.239",
      points: 12,
    },
    {
      id: 8,
      name: "Punjab Kings",
      played: 14,
      won: 6,
      lost: 8,
      nrr: "-0.304",
      points: 12,
    },
    {
      id: 9,
      name: "Delhi Capitals",
      played: 14,
      won: 5,
      lost: 9,
      nrr: "-0.808",
      points: 10,
    },
    {
      id: 10,
      name: "Sunrisers Hyderabad",
      played: 14,
      won: 4,
      lost: 10,
      nrr: "-0.590",
      points: 8,
    },
  ]);

  return (
    <div className="app">
      <h1>IPL 2023 Points Table</h1>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Matches Played</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Net Run Rate</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td>{index + 1}</td>
              <td>{team.name}</td>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.lost}</td>
              <td>{team.nrr}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
