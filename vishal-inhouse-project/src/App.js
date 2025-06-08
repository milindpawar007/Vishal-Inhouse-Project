import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/home" element={<Landing />} />
      {/* <Route path="/landing" element={<Landing />} /> */}
    </Routes>
  );
}

export default App;
