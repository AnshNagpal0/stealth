// src/components/LeaseCard.jsx
export default function LeaseCard({ lease }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 border hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{lease.title}</h2>
      <p className="text-gray-600">{lease.description}</p>
      <p className="text-sm text-gray-400 mt-2">ID: {lease._id}</p>
    </div>
  );
}
