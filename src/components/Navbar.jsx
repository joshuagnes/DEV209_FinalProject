import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
	const { user, login, logout } = useAuth();

	return (
		<nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-lg">
			<Link
				to="/"
				className="text-2xl font-bold tracking-wide hover:opacity-80"
			>
				Trip Planner
			</Link>

			<div className="space-x-4">
				{user ? (
					<>
						<Link to="/plan" className="hover:underline">
							Plan a Trip
						</Link>
						<Link to="/trips" className="hover:underline">
							My Trips
						</Link>
						<Link to="/profile" className="hover:underline">
							Profile
						</Link>
						<button
							onClick={logout}
							className="bg-red-500 px-3 py-2 rounded shadow hover:bg-red-600"
						>
							Logout
						</button>
					</>
				) : (
					<button
						onClick={login}
						className="bg-white text-blue-600 px-3 py-2 rounded shadow hover:bg-gray-100"
					>
						Login
					</button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
