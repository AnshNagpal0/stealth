import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6">
      <Link to="/">Dashboard</Link>
      <Link to="/register">Register Lessee</Link>
      <Link to="/payments">Payments</Link>
    </nav>
  );
}
