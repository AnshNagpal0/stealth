import { useState } from 'react';

export default function RegisterLessee() {
  const [formData, setFormData] = useState({
    name: '',
    vehicleId: '',
    email: '',
    phone: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/lessees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (res.ok) alert('Lessee registered');
    else alert('Registration failed');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Register Lessee</h2>
      {['name', 'vehicleId', 'email', 'phone'].map(field => (
        <input
          key={field}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          required
        />
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
