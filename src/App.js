import './App.css';
import Home from "./pages/Home/Home";
import UserProfile from './pages/UserProfile/UserProfile';
import Register from './pages/Auth/Register/Register'
import Login from './pages/Auth/Login/Login.jsx'
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <UserProfile/>
      {/* <Register/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
