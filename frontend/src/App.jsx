import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import RegisterLessee from './pages/RegisterLessee';
import Payments from './pages/Payments';
import Navbar from './components/navBar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<RegisterLessee />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </div>
    </Router>
  );
}
