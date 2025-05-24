import { useEffect, useState } from 'react';
import StatCard from '../components/statCard';
import LesseeTable from '../components/LesseeTable';

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/leases/dashboard')
      .then(res => res.json())
      .then(setStats)
      .catch(err => console.error('Failed to fetch dashboard', err));
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Leased Vehicles" value={stats.leased} color="bg-blue-600" />
        <StatCard title="Available Vehicles" value={stats.available} color="bg-green-600" />
        <StatCard title="Payments Collected" value={`$${stats.collected}`} color="bg-purple-600" />
        <StatCard title="Payments Expected" value={`$${stats.expected}`} color="bg-red-600" />
      </div>

      <h2 className="text-xl mt-8 mb-2">Overdue Lessees</h2>
      <LesseeTable lessees={stats.overdueLessees} />
    </div>
  );
}
