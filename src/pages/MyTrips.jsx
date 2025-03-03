import { useEffect, useState } from "react";

const MyTrips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const storedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(storedTrips);
  }, []);

  return (
    <div className="trips-container">
      <h1 className="trips-title">My Saved Trips</h1>
      
      {trips.length === 0 ? (
        <p className="trips-empty">No trips saved. Start planning!</p>
      ) : (
        <ul className="trip-list">
          {trips.map((trip, index) => (
            <li key={index} className="trip-item">
              <strong>{trip.destination}</strong> - {trip.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyTrips;
