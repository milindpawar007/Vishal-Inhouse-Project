import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import users from './Data/users.json'
import { useState } from 'react';

function App() {
  const [userList, setUserList] = useState(users);

  const addUser = (newUser) => {
    setUserList([...userList, newUser]);
  };
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/register" element={<Register users={userList} addUser={addUser}/>} />
      <Route path="/signin" element={<Login users={userList} />} />
      <Route path="/home" element={<Landing />} />
      {/* <Route path="/landing" element={<Landing />} /> */}
    </Routes>
  );
}

export default App;
