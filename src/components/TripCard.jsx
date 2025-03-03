const TripCard = ({ trip, onDelete }) => {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-blue-600">{trip.destination}</h2>
        <p className="text-gray-700">📅 {trip.date}</p>
        {trip.weather && <p className="text-gray-500">🌤️ {trip.weather}</p>}
        
        <button onClick={() => onDelete(trip.id)} className="mt-4 bg-red-500 text-white px-3 py-2 rounded">
          Delete Trip
        </button>
      </div>
    );
  };
  
  export default TripCard;
  