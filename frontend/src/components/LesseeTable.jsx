export default function LesseeTable({ lessees }) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full text-sm border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Vehicle ID</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Phone</th>
          </tr>
        </thead>
        <tbody>
          {lessees.map((lessee) => (
            <tr key={lessee._id} className="border-t">
              <td className="p-2">{lessee.name}</td>
              <td className="p-2">{lessee.vehicleId}</td>
              <td className="p-2">{lessee.email}</td>
              <td className="p-2">{lessee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
