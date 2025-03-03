const Home = () => {
  return (
    <div className="bg-home">
      <div className="home-container">
        <h1 className="home-title">Welcome to Trip Planner</h1>
        <p className="home-description">Plan your perfect trip with ease!</p>

        <input type="text" placeholder="Search destinations..." className="search-input" />

        <div className="mt-6 space-x-4">
          <a href="/plan" className="button plan-button">Plan a Trip</a>
          <a href="/trips" className="button trips-button">View My Trips</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
