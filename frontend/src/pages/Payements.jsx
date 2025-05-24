import { useEffect, useState } from 'react';

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/payments')
      .then(res => res.json())
      .then(setPayments)
      .catch(err => console.error('Failed to fetch payments', err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Lease Payments</h2>
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Lessee</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(p => (
            <tr key={p._id} className="border-t">
              <td className="p-2">{p.lessee?.name}</td>
              <td className="p-2">${p.amount}</td>
              <td className="p-2">{new Date(p.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
