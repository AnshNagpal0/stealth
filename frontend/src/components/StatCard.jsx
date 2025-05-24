export default function StatCard({ title, value, color }) {
  return (
    <div className={`p-4 rounded-lg shadow-md ${color} text-white`}>
      <h3 className="text-sm uppercase">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
