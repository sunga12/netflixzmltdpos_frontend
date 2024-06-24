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
      <Inventory />
      <Orders />
      <Profile />
      <UserMain />
    </div>
  );
}

export default App;
