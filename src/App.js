import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inventory from './components/Inventory';
import Navigation from './components/Navigation';
import Orders from './components/Orders';
import Profile from './components/Profile';
import UserMain from './components/UserMain';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<UserMain />} />
        <Route path="/users/:userId" element={<Profile />} />
        <Route path="/users/:userId/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </div>
  );
}

export default App;
