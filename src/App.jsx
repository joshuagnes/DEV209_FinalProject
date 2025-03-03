import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlanTrip from "./pages/PlanTrip";
import MyTrips from "./pages/MyTrips";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<ProtectedRoute><PlanTrip /></ProtectedRoute>} />
          <Route path="/trips" element={<ProtectedRoute><MyTrips /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
