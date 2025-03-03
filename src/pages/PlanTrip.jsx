import { useState } from "react";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];
const googleMapsApiKey = "YOUR_GOOGLE_PLACES_API_KEY"; // Replace with your API Key

const PlanTrip = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);

  const handlePlaceSelect = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      setDestination(place.formatted_address || "");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination || !date) return alert("Please fill all fields!");

    const trips = JSON.parse(localStorage.getItem("trips")) || [];
    localStorage.setItem("trips", JSON.stringify([...trips, { destination, date }]));
    alert("Trip added successfully!");
  };

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries}>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">Plan Your Trip</h1>
        <form onSubmit={handleSubmit} className="mt-4 p-4 bg-gray-100 rounded">
          <Autocomplete onLoad={setAutocomplete} onPlaceChanged={handlePlaceSelect}>
            <input
              type="text"
              placeholder="Enter Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="p-2 border rounded w-full mb-3"
            />
          </Autocomplete>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border rounded w-full mb-3"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full rounded">
            Save Trip
          </button>
        </form>
      </div>
    </LoadScript>
  );
};

export default PlanTrip;
