import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, login, logout } = useAuth();

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-blue-600">Profile</h1>
      
      {user ? (
        <div className="mt-4">
          <p><strong>Name:</strong> {user.displayName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={logout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="text-gray-600 mt-4">You are not logged in.</p>
          <button onClick={login} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Login with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
