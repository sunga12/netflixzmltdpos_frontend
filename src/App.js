import './App.css';
import Navigation from './components/Navigation';
import Orders from './components/Orders';
import Profile from './components/Profile';
import UserMain from './components/UserMain';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Orders />
      <Profile />
      <UserMain />
    </div>
  );
}

export default App;
